import React from "react";

interface TimerProps {
  durationInSeconds: number; // Продолжительность таймера в секундах
  onTimeUp: () => void; // Функция обратного вызова, вызываемая при завершении времени
}

const Timer: React.FC<TimerProps> = ({ durationInSeconds, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = React.useState(durationInSeconds);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(intervalId);
          onTimeUp(); // Вызываем функцию обратного вызова при истечении времени
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [durationInSeconds, onTimeUp]);


  return (
    <div>
      <p>
        {Math.floor(timeLeft / 60)}:{timeLeft % 60}
      </p>
    </div>
  );
};

export default Timer;
