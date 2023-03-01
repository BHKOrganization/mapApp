import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import QuestionForm from "../components/QuestionForm/QuestionForm";
import Footer from "../components/Footer/Footer";

const AddQuestionPage = () => {
  return (
    <>
      <Navbar />
      <QuestionForm />
      <Footer />
    </>
  );
};

export default AddQuestionPage;
