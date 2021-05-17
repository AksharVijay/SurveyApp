import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Fragment } from "react";

const EditSurvey = ({ modal, toggle, updateSurvey, surveyObj }) => {
  const [question, setQuestion] = useState("");
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "question") {
      setQuestion(value);
    } else if (name === "answerOne") {
      setAnswerOne(value);
    } else if (name === "answerTwo") {
      setAnswerTwo(value);
    } else if (name === "answerThree") {
      setAnswerThree(value);
    } else {
      setAnswerFour(value);
    }
  };

  useEffect(() => {
    setQuestion(surveyObj.name);
    setAnswerOne(surveyObj.answerOne);
    setAnswerTwo(surveyObj.answerTwo);
    setAnswerThree(surveyObj.answerThree);
    setAnswerFour(surveyObj.answerFour);
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = question;
    tempObj["answerOne"] = answerOne;
    tempObj["answerTwo"] = answerTwo;
    tempObj["answerThree"] = answerThree;
    tempObj["answerFour"] = answerFour;
    updateSurvey(tempObj);
  };
  return (
    <Fragment>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Update Survey Question and Answers
        </ModalHeader>
        <ModalBody>
          <form>
            <div>
              <div className="form-group">
                <label>Survey Questions</label>
                <input
                  type="text"
                  className="form-control"
                  value={question}
                  name="question"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mt-2">
              <label>Survey Answers</label>
              <div className="form-group">
                <label>Answer 1</label>
                <input
                  type="text"
                  className="form-control mt-2 mb-2"
                  value={answerOne}
                  name="answerOne"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label>Answer 2</label>
                <input
                  type="text"
                  className="form-control mt-2 mb-2"
                  value={answerTwo}
                  name="answerTwo"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label>Answer 3</label>
                <input
                  type="text"
                  className="form-control mt-2 mb-2"
                  value={answerThree}
                  name="answerThree"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label>Answer 4</label>
                <input
                  type="text"
                  className="form-control mt-2 mb-2"
                  value={answerFour}
                  name="answerFour"
                  onChange={changeHandler}
                />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateHandler}>
            Update
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default EditSurvey;
