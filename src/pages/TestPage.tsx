import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { selectOption, setCurrentQuestionIndex } from "../store/testSlice";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";
import { Box, Typography, Button } from "@mui/material";
import Timer from "../components/Timer";
import ProgressBar from "../components/ProgressBar";

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

  const handleTimeUp = () => {
    alert("Время вышло!");
  };

  // Эффект для сохранения текущего id вопроса в localStorage
  useEffect(() => {
    localStorage.setItem("currentQuestionIndex", String(currentQuestionIndex));
  }, [currentQuestionIndex]);

  // Эффект для восстановления текущего id вопроса из localStorage при монтировании
  useEffect(() => {
    const storedCurrentQuestionIndex = localStorage.getItem(
      "currentQuestionIndex",
    );
    if (storedCurrentQuestionIndex !== null) {
      const index = parseInt(storedCurrentQuestionIndex, 10);
      if (!isNaN(index)) {
        dispatch(setCurrentQuestionIndex(index));
      }
    }
  }, [dispatch]);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Тестирование
      </Typography>
      <Timer durationInSeconds={600} onTimeUp={handleTimeUp} />
      <ProgressBar
        currentQuestionIndex={currentQuestionIndex + 1} // Индекс вопроса + 1 для корректного отображения
        totalQuestions={questions.length}
      />
      {questions.length > 0 && (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onSelectOption={handleSelectOption}
        />
      )}
      {currentQuestionIndex === questions.length - 1 && (
        <Button variant="contained" onClick={handleFinishTest}>
          Завершить тест
        </Button>
      )}
    </Box>
  );
};

export default TestPage;
