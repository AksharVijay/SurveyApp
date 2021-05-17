import React, { useState } from "react";
import "./Card.css";
import EditSurvey from "../modals/EditSurvey";

const Card = ({ surveyObj, deleteSurvey, index, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updateSurvey = (obj) => {
    updateListArray(obj, index);
  };

  const deleteHandler = () => {
    deleteSurvey(index);
  };

  return (
    <div>
      <div className="card-wrapper mr-5">
        <div className="card-top"></div>
        <div className="survey-holder">
          <span className="card-headers">{surveyObj.name}</span>
          <span className="check">
            <input type="radio" className="radio" />
            <p className="answer"> {surveyObj.answerOne}</p>
          </span>
          <span className="check">
            <input type="radio" className="radio" />
            <p className="answer"> {surveyObj.answerTwo}</p>
          </span>
          <span className="check">
            <input type="radio" className="radio" />
            <p className="answer"> {surveyObj.answerThree}</p>
          </span>
          <span className="check">
            <input type="radio" className="radio" />
            <p className="answer"> {surveyObj.answerFour}</p>
          </span>
          <div className="icons">
            <i className="far fa-edit edit" onClick={() => setModal(true)}></i>
            <i className="fas fa-trash-alt delete" onClick={deleteHandler}></i>
          </div>
        </div>
        <EditSurvey
          modal={modal}
          toggle={toggle}
          updateSurvey={updateSurvey}
          surveyObj={surveyObj}
        />
      </div>
    </div>
  );
};

export default Card;
