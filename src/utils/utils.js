import { dateFormat } from 'utils/config';
import XLSX from 'xlsx';

export function getPlainNode(nodeList, parentPath = '') {
  const arr = [];
  nodeList.forEach(node => {
    const item = node;
    item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
    item.exact = true;
    if (item.children && !item.component) {
      arr.push(...getPlainNode(item.children, item.path));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }
  const arr1 = str1.split('/');
  const arr2 = str2.split('/');
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1;
  } else if (arr1.every((item, index) => item === arr2[index])) {
    return 2;
  }
  return 3;
}

function getRenderArr(routes) {
  let renderArr = [];
  renderArr.push(routes[0]);
  for (let i = 1; i < routes.length; i += 1) {
    let isAdd = false;
    // 是否包含
    isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3);
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1);
    if (isAdd) {
      renderArr.push(routes[i]);
    }
  }
  return renderArr;
}

/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */
export function getRoutes(path, routerData) {
  let routes = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path
  );
  // Replace path to '' eg. path='user' /user/name => name
  routes = routes.map(item => item.replace(path, ''));
  // Get the route to be rendered to remove the deep rendering
  const renderArr = getRenderArr(routes);
  // Conversion and stitching parameters
  const renderRoutes = renderArr.map(item => {
    const exact = !routes.some(route => route !== item && getRelation(route, item) === 1);
    return {
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`,
      exact,
    };
  });
  return renderRoutes;
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
  return reg.test(path);
}

export function readPagination(data, body = '{}') {
  const { current, pageSize, ...filters } = JSON.parse(body);
  const { list, pageNum, currentPage, total, totalRecord } = data;
  const res = {
    list,
    pagination: {
      total: total || totalRecord,
      pageSize: data.pageSize,
      current: pageNum || currentPage,
    },
  };

  if (Object.keys(filters).length) {
    res.filters = filters;
  }

  return res;
}

export function exportExcel(fileName, header, data) {
  const option = {
    fileName,
  };

  option.datas = [
    {
      sheetData: data,
      sheetName: 'sheet',
      sheetHeader: header,
    },
  ];

  // eslint-disable-line
  const toExcel = new ExportJsonExcel(option);
  toExcel.saveExcel();
}

export function formatRangeDate(time, startTime = 'startTime', endTime = 'endTime') {
  return time
    ? {
        [startTime]: time[0].format(dateFormat),
        [endTime]: time[1].format(dateFormat),
      }
    : {};
}

/*
* 数组去重
* */
export function unique(arr, key) {
  if (key) {
    const resObj = {};
    arr.forEach(i => {
      resObj[i[key]] = i;
    });
    return Object.values(resObj);
  } else {
    const initArr = arr.map(i => JSON.stringify(i));
    const resArr = [...new Set(initArr)];
    return resArr.map(i => JSON.parse(i));
  }
}
// excel to json
export async function parseExcel(file) {
  const fileReader = new FileReader();
  function insertFile() {
    return new Promise(rs => {
      fileReader.onload = ev => {
        let datas = [];
        let data = '';
        let workbook = '';
        try {
          data = ev.target.result;
          workbook = XLSX.read(data, {
            type: 'binary',
          }); // 以二进制流方式读取得到整份excel表格对象
        } catch (e) {
          console.log('文件类型不正确');
          return;
        }
        // 表格的表格范围，可用于判断表头是否数量是否正确
        // 遍历每张表读取
        const { Sheets } = workbook;
        /* eslint-disable */
        for (const sheet in Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            datas = datas.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
            // break; // 如果只取第一张表，就取消注释这行
          }
        }
        /* eslint-disable */
        return rs(datas);
      };
      // 以二进制方式打开文件
      fileReader.readAsBinaryString(file);
    });
  }
  return await insertFile(file);
}

