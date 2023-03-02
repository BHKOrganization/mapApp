import React from "react";
import "./Faq.css";

const faqQuestions = [
  {
    id: 1,
    question: "Can I play with friends?",
    answer:
      "You can! Solve the questions by competing with your friends and win the game.",
  },
  {
    id: 2,
    question: "How do I submit my own questions/riddles?",
    answer:
      "If you'd like to have your questions/riddles on Keep Location, You need just click and post it with 'Want to add question?' button.",
  },
  {
    id: 3,
    question: "How can I contribute?",
    answer:
      "We appreciate anyone who takes the time to submit question or donate. For most people, the most effective thing you can do is share Keep Location with a friend. Maybe even play a round of multiplayer with them!",
  },
  {
    id: 4,
    question: "How can I get in touch?",
    answer:
      "Send an email and expect a response within 48 hours. All inquiries welcome. eemhaydaryildirim@gmail.com",
  },
];

function FAQ() {
  return (
    <div className="faqContainer">
      {faqQuestions.map((question) => (
        <div key={question.id} className="faqCard">
          <h3 className="faqQuestion">{question.question}</h3>
          <p className="faqAnswer">{question.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
