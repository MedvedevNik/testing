import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { selectOption } from "../store/testSlice";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";
import { Box, Typography, Button } from "@mui/material";

const TestPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentQuestionIndex = useSelector(
    (state: RootState) => state.test.currentQuestionIndex,
  );
  const questions = useSelector((state: RootState) => state.test.questions);

  const handleSelectOption = (option: string) => {
    dispatch(selectOption(option));
  };
  const handleFinishTest = () => {
    navigate("/final");
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Тестирование
      </Typography>
      {questions.length > 0 && (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onSelectOption={handleSelectOption}
        />
      )}
      {currentQuestionIndex === questions.length - 1 && (
        <Button variant="contained" onClick={handleFinishTest}>
          Finish Test
        </Button>
      )}
    </Box>
  );
};

export default TestPage;
