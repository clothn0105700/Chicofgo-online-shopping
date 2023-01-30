import React from 'react';
import styles from './Specification.module.scss';

const Specification = () => {
  const { spec_contorl, spec_info } = styles;
  return (
    <div className={`${spec_contorl} d-flex flex-column`}>
      <h3>產品規格</h3>
      <div className={`${spec_info}`}>
        1.商品組合/規格：4包/盒 2.商品品名：星巴克特選系列- 即期品<br/>
        焦糖瑪奇朵/卡布奇諾咖啡 任選(到期日: 2023/4/2)
        3.商品重(容)量：請見外包裝<br/>
        4.內容物成分(如含有豬、牛成分請加註國別)：請見外包裝<br/>
        5.食品添加物名稱：無 6.原產地(國)：土耳其<br/>
        7.製造廠商或國內負責廠商名稱：台灣雀巢股份有限公司<br/>
        8.製造廠商或國內負責廠商地址：台北市內湖區瑞光路399號8樓之1<br/>
        9.製造廠商或國內負責廠商電話：(02)2773-9910<br/>
        10.以消費者收受日算起，至少距有效日期前?日以上：30<br/>
        11.食品業者登錄字號：A-120683002-00000-9<br/>
        12.投保產品責任險字號：70-107--0842446400001-CGL 備註欄：請見外包裝<br/>
      </div>
    </div>
  );
};

export default Specification;
