import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import "./Survey.css";
import CreateSurvey from "../modals/CreateSurvey";
import Card from "../card/Card";

const Survey = () => {
  const [modal, setModal] = useState(false);
  const [surveyList, setSurveyList] = useState([]);
  //  const [surveyListArray, setSurveyListArray] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("surveyList");
    if (arr) {
      let obj = JSON.parse(arr);
      setSurveyList(obj);
    }
  }, []);

  // useEffect(() => {
  //   const surveyListArray = [];
  //   while (surveyList.length > 0) {
  //     surveyListArray.push(surveyList.splice(0, 3));
  //   }
  // }, []);

  const deleteSurvey = (index) => {
    let tempList = surveyList;
    tempList.splice(index, 1);
    localStorage.setItem("surveyList", JSON.stringify(tempList));
    setSurveyList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const updateListArray = (obj, index) => {
    let tempList = surveyList;
    tempList[index] = obj;
    localStorage.setItem("surveyList", JSON.stringify(tempList));
    setSurveyList(tempList);
    window.location.reload();
  };

  const saveSurvey = (surveyObj) => {
    let tempList = surveyList;
    tempList.push(surveyObj);
    localStorage.setItem("surveyList", JSON.stringify(tempList));
    setSurveyList(surveyList);
    setModal(false);
  };
  return (
    <Fragment>
      <div className="header text-center">
        <h5>Survey</h5>
        <button className="btn btn-primary" onClick={() => setModal(true)}>
          Create Survey
        </button>
      </div>
      <div className="survey-container">
        {surveyList &&
          surveyList.map((obj, index) => (
            <Card
              surveyObj={obj}
              index={index}
              deleteSurvey={deleteSurvey}
              updateListArray={updateListArray}
            >
              <input type="radio" name="answerOne" />
            </Card>
          ))}
      </div>
      <CreateSurvey toggle={toggle} modal={modal} save={saveSurvey} />
    </Fragment>
  );
};

export default Survey;
