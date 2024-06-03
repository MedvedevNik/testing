import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { resetTest } from "../store/testSlice";
import { useNavigate } from "react-router-dom";
import { Box, List, ListItem, Typography, Button } from "@mui/material";

const FinalPage: React.FC = () => {
  const selectedOptions = useSelector(
    (state: RootState) => state.test.selectedOptions,
  );
  const navigate = useNavigate();
  const questions = useSelector((state: RootState) => state.test.questions);
  const dispatch = useDispatch();

  const handleRetakeTest = () => {
    dispatch(resetTest());
    navigate("/");
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Финальная страница
      </Typography>
      <Typography variant="h5">Ваши ответы</Typography>
      <List>
        {selectedOptions.map((option, index) => (
          <ListItem
            key={index}
            sx={{
              color:
                option !== questions[index].correctAnswer ? "red" : "green",
            }}
          >
            {`Вопрос ${index + 1}: ${questions[index].question} Выбранный вариант: ${option}  ${
              option === questions[index].correctAnswer
                ? ""
                : `/ Правильный вариант: ${questions[index].correctAnswer}`
            }`}
          </ListItem>
        ))}
      </List>
      <Button variant="outlined" onClick={handleRetakeTest}>
        Пройти тест заново
      </Button>
    </Box>
  );
};

export default FinalPage;
