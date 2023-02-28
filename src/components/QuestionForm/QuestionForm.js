import React, { useState } from "react";
import Map from "../Map/Map";
import "./questionForm.css";

const QuestionForm = () => {
  const [nickname, setNickname] = useState("");
  const [language, setLanguage] = useState("Language");
  const [question, setQuestion] = useState("");
  const [location, setLocation] = useState({ lat: 0, long: 0 });

  return (
    <>
      <div className="questionFormContainer">
        <form className="questionForm">
          <label className="formLabel" for="nickname">
            Nickname
          </label>
          <input
            className="formInput"
            type="text"
            name="nickname"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            required
          />
          <label className="formLabel" for="language">
            Language
          </label>
          <select
            className="formInput"
            name="language"
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          >
            <option value="english">English</option>
            <option value="turkish">Türkçe</option>
          </select>
          <label className="formLabel" for="question">
            Question
          </label>
          <textarea
            className="formInput questionInput"
            type="text"
            value={question}
            name="question"
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
        </form>
      </div>
    </>
  );
};

export default QuestionForm;
