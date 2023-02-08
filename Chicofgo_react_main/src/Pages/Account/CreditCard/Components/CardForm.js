import React, { useState } from 'react';
import Results from './Results';
// import './styles.css';
import './CardForm.scss';
import 'react-credit-cards-2/es/styles-compiled.css';

function CardForm() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [submittedData, setSubmittedData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData({ name, cardNumber, expiry, cvc });
  }
  return (
    <form className={`cardForm chicofgo-font`}>
      <h2 className={`text-center chicofgo-font-700 chicofgo_brown_font`}>
        信用卡修改
      </h2>
      <div className={`form-group mt-4`}>
        <input
          type="text"
          className={`form-control mt-3`}
          placeholder="持卡人姓名"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className={`form-control mt-3`}
          placeholder="卡號"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <div className={`d-flex mt-3`}>
          <input
            type="text"
            className={`form-control expirationDateField`}
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
          <input
            type="text"
            className={`form-control cvcField ml-3`}
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className={`btn btn-chicofgo-green btn-block mt-2`}
        onClick={handleSubmit}
      >
        送出
      </button>
      <hr />
      <Results data={submittedData} />
    </form>
  );
}

export default CardForm;
