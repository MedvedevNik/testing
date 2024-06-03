import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

interface ProgressBarProps {
  currentQuestionIndex: number; // Индекс текущего вопроса
  totalQuestions: number; // Общее количество вопросов
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentQuestionIndex,
  totalQuestions,
}) => {
  const progress = (currentQuestionIndex / totalQuestions) * 100;

  return (
    <div>
      <p>
        {currentQuestionIndex} из {totalQuestions}
      </p>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
};

export default ProgressBar;
