import React, { PureComponent } from 'react';
import { Select } from 'antd-noform';

const { Option } = Select;
const list = [{"commodityId":25909,"commodityCode":"CODE20181026144758","commodityName":"临时多规格","status":1,"createTime":"2018-10-26 14:47:59","groupbuying":false,"fulloff":false,"fullgive":false,"hasBargain":false,"hasCoupon":false,"specList":[{"specId":42803,"specName":"艾不释手","specDetail":"卫小沐舒缓膏*1+栖谷象牙白抱枕*1+艾草代餐粉*1","sellingPrice":55,"costPrice":20},{"specId":42804,"specName":"艾不释手","specDetail":"RC-7202","sellingPrice":123,"costPrice":20},{"specId":42805,"specName":"艾不释手","specDetail":"DUO*01","sellingPrice":444,"costPrice":20}]},{"commodityId":25898,"commodityCode":"CODE20181020174350","commodityName":"测试多规格测试","status":1,"createTime":"2018-10-20 17:43:51","groupbuying":false,"fulloff":false,"fullgive":false,"hasBargain":false,"hasCoupon":false,"specList":[{"specId":42790,"specName":"测试规格","specDetail":"规格11","sellingPrice":50,"costPrice":45},{"specId":42791,"specName":"测试规格","specDetail":"规格22","sellingPrice":60,"costPrice":20},{"specId":42792,"specName":"测试规格","specDetail":"规格33","sellingPrice":70,"costPrice":30}]},{"commodityId":25890,"commodityCode":"CODE20180930094733","commodityName":"测试多规格","status":1,"createTime":"2018-09-30 09:47:33","groupbuying":false,"fulloff":false,"fullgive":true,"hasBargain":false,"hasCoupon":false,"specList":[{"specId":42780,"specName":"雀巢脆脆鲨夹心威化32条","specDetail":"花生味","sellingPrice":50,"costPrice":20},{"specId":42781,"specName":"雀巢脆脆鲨夹心威化32条","specDetail":"牛奶味","sellingPrice":50,"costPrice":20},{"specId":42779,"specName":"雀巢脆脆鲨夹心威化32条","specDetail":"巧克力味","sellingPrice":60,"costPrice":20}]},{"commodityId":25874,"commodityCode":"CODE20180925145051","commodityName":"拼团多规格商品！拼团多规格商品！拼团多规格商品！拼团多规格商品！拼团多规格商品！拼团多规格","status":1,"createTime":"2018-09-25 14:50:52","groupbuying":false,"fulloff":false,"fullgive":false,"hasBargain":false,"hasCoupon":false,"specList":[{"specId":42740,"specName":"艾不释手","specDetail":"RC-7202","sellingPrice":99,"costPrice":50},{"specId":42741,"specName":"艾不释手","specDetail":"DUO*01","sellingPrice":108,"costPrice":50},{"specId":42742,"specName":"艾不释手","specDetail":"DUO*002","sellingPrice":128,"costPrice":50},{"specId":42739,"specName":"艾不释手","specDetail":"卫小沐舒缓膏*1+栖谷象牙白抱枕*1+艾草代餐粉*1","sellingPrice":88,"costPrice":50}]},{"commodityId":22124,"commodityCode":"CODE20180628103236","commodityName":"Misida美仕达智能多控按摩棒","status":2,"createTime":"2018-06-28 10:32:36","groupbuying":false,"fulloff":false,"fullgive":false,"hasBargain":false,"hasCoupon":false,"specList":[{"specId":36545,"specName":"Misida美仕达智能多控按摩棒","specDetail":"按摩棒*1","sellingPrice":189,"costPrice":179}]},{"commodityId":21589,"commodityCode":"CODE20180624141840","commodityName":"美的Midea 家用多功能迷你电烤箱","status":1,"createTime":"2018-06-24 14:18:41","groupbuying":false,"fulloff":false,"fullgive":false,"hasBargain":false,"hasCoupon":false,"specList":[{"specId":35712,"specName":"美的Midea 家用多功能迷你电烤箱","specDetail":"10L","sellingPrice":259,"costPrice":169}]},{"commodityId":21563,"commodityCode":"CODE20180624114611","commodityName":"TAKAMAI 多加米酵素进口酵素液 300ml","status":1,"createTime":"2018-06-24 11:46:12","groupbuying":false,"fulloff":false,"fullgive":false,"hasBargain":false,"hasCoupon":false,"specList":[{"specId":35673,"specName":"TAKAMAI 多加米酵素进口酵素液 300ml","specDetail":"300ml","sellingPrice":149,"costPrice":119}]},{"commodityId":20173,"commodityCode":"CODE20180611104027","commodityName":"多样屋牡丹功夫茶具组豪华礼盒装","status":1,"createTime":"2018-06-11 10:40:28","groupbuying":false,"fulloff":false,"fullgive":false,"hasBargain":false,"hasCoupon":true,"specList":[{"specId":33399,"specName":"多样屋牡丹功夫茶具组豪华礼盒装","specDetail":"礼盒装","sellingPrice":299,"costPrice":279}]},{"commodityId":19468,"commodityCode":"CODE20180608193215","commodityName":"优洁雅 多效倍洁洗衣液1L","status":2,"createTime":"2018-06-08 19:32:15","groupbuying":false,"fulloff":false,"fullgive":false,"hasBargain":false,"hasCoupon":false,"specList":[{"specId":32230,"specName":"优洁雅 多效倍洁洗衣液1L","specDetail":"1L","sellingPrice":33,"costPrice":29.99}]},{"commodityId":19447,"commodityCode":"CODE20180608185920","commodityName":"美的Midea 家用多功能迷你电烤箱","status":1,"createTime":"2018-06-08 18:59:20","groupbuying":false,"fulloff":false,"fullgive":false,"hasBargain":false,"hasCoupon":true,"specList":[{"specId":32202,"specName":"美的Midea 家用多功能迷你电烤箱","specDetail":"10L","sellingPrice":159,"costPrice":135}]},{"commodityId":19439,"commodityCode":"CODE20180608184545","commodityName":"TAKAMAI 多加米酵素进口酵素液 300ml","status":2,"createTime":"2018-06-08 18:45:46","groupbuying":false,"fulloff":false,"fullgive":false,"hasBargain":false,"hasCoupon":false,"specList":[{"specId":32187,"specName":"TAKAMAI 多加米酵素进口酵素液 300ml","specDetail":"300ml","sellingPrice":99,"costPrice":89}]},{"commodityId":18238,"commodityCode":"CODE20180605162623","commodityName":"OralB欧乐B牙龈专护精准多角度牙刷双支装","status":2,"createTime":"2018-06-05 16:26:23","groupbuying":false,"fulloff":false,"fullgive":false,"hasBargain":false,"hasCoupon":false,"specList":[{"specId":29971,"specName":"OralB欧乐B牙龈专护精准多角度牙刷双支装","specDetail":"颜色随机","sellingPrice":26.9,"costPrice":23.9}]},{"commodityId":18039,"commodityCode":"CODE20180604194318","commodityName":"奥迪双钻超级飞侠变形机器人-黄色多多","status":1,"createTime":"2018-06-04 19:43:19","groupbuying":false,"fulloff":false,"fullgive":false,"hasBargain":false,"hasCoupon":false,"specList":[{"specId":29570,"specName":"奥迪双钻超级飞侠变形机器人-黄色多多","specDetail":"黄色多多","sellingPrice":65,"costPrice":62}]},{"commodityId":12555,"commodityCode":"CODE20180529145057","commodityName":"美的Midea 家用多功能迷你电烤箱","status":2,"createTime":"2018-05-29 14:50:57","groupbuying":false,"fulloff":false,"fullgive":false,"hasBargain":false,"hasCoupon":false,"specList":[{"specId":19482,"specName":"美的Midea 家用多功能迷你电烤箱","specDetail":"10L","sellingPrice":299,"costPrice":249}]},{"commodityId":12229,"commodityCode":"CODE20180529140506","commodityName":"TAKAMAI 多加米酵素进口酵素液 300ml","status":2,"createTime":"2018-05-29 14:05:06","groupbuying":false,"fulloff":false,"fullgive":false,"hasBargain":false,"hasCoupon":false,"specList":[{"specId":19099,"specName":"TAKAMAI 多加米酵素进口酵素液 300ml","specDetail":"300ml","sellingPrice":149,"costPrice":130}]}];

export default class ProductPicker extends PureComponent {
  static defaultProps = {
    value: {},
  };

  onChange = commodityId => {
    if (this.props.onChange) {
      const data = list.filter(i => i.commodityId === commodityId)[0];
      this.props.onChange(JSON.stringify(data));
    }
  };

  render() {
    const { value, status } = this.props;
    const { commodityId } = JSON.parse(value) || {};
    return (
      <Select
        disabled={status === 'preview'}
        allowClear
        value={commodityId}
        showSearch
        style={{ width: 500 }}
        placeholder="请输入商品编码或名称"
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSelect={this.onChange}
      >
        {list.map(i => (
          <Option key={i.commodityId} value={i.commodityId}>
            {`${i.commodityCode} - ${i.commodityName}`}
          </Option>
        ))}
      </Select>
    );
  }
}
