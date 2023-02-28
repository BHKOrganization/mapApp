import React, { useState } from "react";
import Map from "../Map/Map";
import "./questionForm.css";

const QuestionForm = () => {
  const [nickname, setNickname] = useState("");
  const [language, setLanguage] = useState("Language");
  const [question, setQuestion] = useState("");
  const [location, setLocation] = useState({ lat: 0, long: 0 });

  const clearForm = () => {
    setNickname("");
    setLanguage("Language");
    setQuestion("");
    setLocation({ lat: 0, long: 0 });
  };

  const data = {
    nickname: nickname,
    language: language,
    question: question,
    location: location,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    clearForm();
  };

  return (
    <>
      <div className="questionFormContainer">
        <form className="questionForm" onSubmit={handleSubmit}>
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
          <label className="formLabel" for="map">
            Map
          </label>
          <Map
            location={location}
            setLocation={setLocation}
            width="300px"
            length="300px"
            name="map"
          />
          <input type="submit" className="formSubmitBtn" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default QuestionForm;
