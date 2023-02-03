import React from 'react';
import styles from './MessageArea.module.scss';

const MessageArea = () => {
  const {
    message_control,
    message_box,
    member_pic,
    message_info,
    main_pic,
    member_name,
    message_rating,
    message_time,
    speak,
  } = styles;
  return (
    <div className={`${message_control}`}>
      <div className={`${message_box} d-flex`}>
        <div className={`${member_pic} d-flex align-items-center flex-column`}>
          <div className={`${main_pic}`}></div>
          <div className={`${member_name} mt-3`}>123</div>
        </div>
        <div className={`${message_info} d-flex  flex-column`}>
          <div className={`${message_rating} d-flex `}>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
          </div>
          <div className={`${message_time}`}>
            <p>2023-1-31</p>
          </div>
          <div className={`${speak}`}>
            <p>
              「鰻魚三吃名古屋備長」將名古屋的美食——鰻魚三吃原封不動帶來東京！不同於東京江戶前鰻魚的料理方式，名古屋流的鰻魚不經蒸烤程序，而是直接以大火烘烤，將香味牢牢鎖住。想在東京品嚐到正宗的鰻魚三吃料理嗎？務必前來「鰻魚三吃名古屋備長」滿足您的味蕾。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageArea;
