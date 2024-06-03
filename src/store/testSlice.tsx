import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface TestState {
  currentQuestionIndex: number;
  selectedOptions: string[];
  questions: Question[];
  correctAnswers: string[];
}

export const initialState: TestState = {
  currentQuestionIndex: 0,
  selectedOptions: [],
  questions: [
    {
      question: "Столица Франции?",
      options: ["Париж", "Лондон", "Берлин"],
      correctAnswer: "Париж",
    },
    {
      question: "Самый большой океан?",
      options: ["Тихий", "Атлантический", "Индийский"],
      correctAnswer: "Тихий",
    },
    {
      question: "Какой химический символ для воды?",
      options: ["H2O", "CO2", "NaCl"],
      correctAnswer: "H2O",
    },
    // Добавьте больше вопросов здесь
  ],
  correctAnswers: [],
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    selectOption: (state, action: PayloadAction<string>) => {
      state.selectedOptions.push(action.payload);
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    resetTest: (state) => {
      state.currentQuestionIndex = 0;
      state.selectedOptions = [];
      state.correctAnswers = [];
    },
    submitTest: (state) => {
      // Сравнить выбранные ответы с правильными и сохранить результаты
      state.correctAnswers = state.selectedOptions.map((option, index) => {
        return option === state.questions[index].correctAnswer ? 'correct' : 'incorrect';
      });
    },
  },
});

export const { selectOption, resetTest, submitTest } = testSlice.actions;
export default testSlice.reducer;
