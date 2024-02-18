import "./InfoToolTip.css";
import React from "react";

const InfoToolTip = ({ isOpen, message, onClose }) => {

    if(isOpen){
        document.body.style.overflow = "hidden";
    }
    else{
        document.body.style.overflow = "auto";
    }
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__overlay">
        <div className="popup__content">
          <h3 className="popup__message">{message}</h3>
          <button className="popup__close-button" onClick={onClose}>
            закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoToolTip;
