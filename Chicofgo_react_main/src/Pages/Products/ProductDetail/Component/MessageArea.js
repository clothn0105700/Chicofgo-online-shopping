import React from 'react';
import styles from './MessageArea.module.scss';
import { useEffect, useMemo } from 'react';
import { v4 } from 'uuid';

const MessageArea = (props) => {
  const { rating, time, s, name } = props;
  console.log(time);
  const numberRating = useMemo(() => {
    return Number.isNaN(parseInt(rating)) ? 1 : parseInt(rating);
  }, [rating]);

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
      <br />
      <div className={`${message_box} d-flex`}>
        <div className={`${member_pic} d-flex align-items-center flex-column`}>
          <div className={`${main_pic}`}></div>
          <div className={`${member_name} mt-3`}>{name}</div>
        </div>
        <div className={`${message_info} d-flex  flex-column`}>
          <div className={`${message_rating} d-flex `}>
            {new Array(numberRating).fill().map((star) => {
              return <p key={v4()}>⭐</p>;
            })}
          </div>
          <div className={`${message_time}`}>
            <p>{time}</p>
          </div>
          <div className={`${speak}`}>
            <p>{s}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageArea;
