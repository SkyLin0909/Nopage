import React, { PureComponent, isValidElement } from 'react';
import { connect } from 'dva';
import { Table, Alert, Button } from 'antd';
import { Form, FormCore } from 'utils/noform';
import { Page } from 'components';
import { unique } from 'utils/utils';
import { dateFormat, defaultPagination } from 'utils/config';
import styles from './index.less';

function initSelectedRows(rowsRaw, keys, key) {
  const list = [];
  if (rowsRaw && keys && key) {
    const rows = unique(rowsRaw, key);
    keys.forEach(i => {
      const index = rows.findIndex(ii => i === ii[key]);
      if (index !== -1) {
        list.push(rows[index]);
      }
    });
  }

  return list;
}

@connect(({ page, loading }) => ({
  ...page,
  loading: loading.models.page,
}))
class PageTable extends PureComponent {
  static defaultProps = {
    rowKey: 'id',
    selectedRows: [],
    selectedRowKeys: null,
  };

  constructor(props) {
    super(props);
    const { selectedRows, selectedRowKeys, rowKey } = props;
    this.form = new FormCore();
    this.state = {
      selectedRows: initSelectedRows(selectedRows, selectedRowKeys, rowKey),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { selectedRows, selectedRowKeys, rowKey } = nextProps;
    if (selectedRows && selectedRowKeys && selectedRowKeys.length !== this.props.selectedRowKeys) {
      this.setState({
        selectedRows: initSelectedRows(
          [...this.state.selectedRows, ...selectedRows],
          selectedRowKeys,
          rowKey
        ),
      });
    }
  }

  onRowSelectChange = (selectedRowKeys, selectedRows) => {
    const { rowKey, onSelectRow } = this.props;
    const rows = initSelectedRows(
      [...this.state.selectedRows, ...selectedRows],
      selectedRowKeys,
      rowKey
    );

    this.setState(
      {
        selectedRows: rows,
      },
      () => {
        if (onSelectRow) {
          onSelectRow(selectedRowKeys, rows);
        }
      }
    );
  };

  onChange = ({ current, pageSize }) => {
    this.onRead({
      current,
      pageSize,
    });
  };

  onRead = (pagination = defaultPagination, filters = this.props.filters) => {
    this.props.dispatch({
      type: 'page/readList',
      payload: {
        pagination,
        filters,
      },
    });
  };

  onSearch = type => {
    if (type === 'reset') {
      this.form.reset();
    }
    this.form.validate(errors => {
      if (!errors) {
        const { rangeTime, ...rest } = this.form.getValues();
        if (rangeTime) {
          const { rangeTimeKeys = ['startTime', 'endTime'] } = this.props.form;
          rest[rangeTimeKeys[0]] = rangeTime[0].format(dateFormat);
          rest[rangeTimeKeys[1]] = rangeTime[1].format(dateFormat);
        }
        this.onRead(defaultPagination, rest);
      }
    });
  };

  cleanSelectedKeys = () => {
    this.onRowSelectChange([], []);
  };

  render() {
    const {
      title,
      form,
      list,
      pagination,
      loading,
      rowKey,
      columns,
      selectedRowKeys,
      renderOperator,
      onCreate,
      toolbar,
      createText,
      expandedRowRender,
    } = this.props;

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      ...pagination,
    };

    const hasSelected = selectedRowKeys;

    const rowSelection = hasSelected
      ? {
          selectedRowKeys,
          onChange: this.onRowSelectChange,
          getCheckboxProps: record => ({
            disabled: record.disabled,
          }),
        }
      : null;

    // eslint-disable-next-line
    const { render, rangeTimeKeys, timeKeys, ...rest } = form || {};

    return (
      <Page title={title}>
        <div className={styles.standardTable}>
          {hasSelected && (
            <div className={styles.tableAlert}>
              <Alert
                message={
                  <>
                    已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a>{' '}
                    项&nbsp;&nbsp;
                    {!!selectedRowKeys.length && (
                      <>
                        {renderOperator}
                        <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>
                          取消已选
                        </a>
                      </>
                    )}
                  </>
                }
                type="info"
                showIcon
              />
            </div>
          )}
          {form && (
            <Form core={this.form} direction="horizontal" {...rest}>
              {isValidElement(form) ? form : form.render(this.form) || ''}
              <div className="searchBtn">
                <Button type="primary" onClick={this.onSearch}>
                  查询
                </Button>
                <Button onClick={() => this.onSearch('reset')}>重置</Button>
              </div>
            </Form>
          )}
          <div className="tableListOperator">
            {onCreate && (
              <Button icon="plus" type="primary" onClick={onCreate}>
                {createText || '新建'}
              </Button>
            )}
            {toolbar}
          </div>
          <Table
            expandedRowRender={expandedRowRender}
            loading={loading}
            rowKey={rowKey}
            rowSelection={rowSelection}
            dataSource={list}
            columns={columns}
            pagination={paginationProps}
            onChange={this.onChange}
          />
        </div>
      </Page>
    );
  }
}

export default PageTable;
