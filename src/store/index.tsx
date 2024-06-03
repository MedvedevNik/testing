import { configureStore } from "@reduxjs/toolkit";
import testReducer, { initialState } from "./testSlice";

// Получаем состояние из localStorage, если оно там есть
const savedState = localStorage.getItem("testState");
const persistedState = savedState ? JSON.parse(savedState) : initialState;

// Получаем индекс текущего вопроса из localStorage, если он там есть
const savedIndex = localStorage.getItem("currentIndex");
const persistedIndex = savedIndex ? parseInt(savedIndex, 10) : 0;

// Объединяем загруженное состояние с текущим индексом
const preloadedState = {
  ...persistedState,
  currentQuestionIndex: persistedIndex,
};

const store = configureStore({
  reducer: {
    test: testReducer,
  },
  preloadedState,
});

// Сохраняем состояние и текущий индекс в localStorage при каждом обновлении состояния
store.subscribe(() => {
  const { test } = store.getState();
  localStorage.setItem("testState", JSON.stringify(test));
  localStorage.setItem("currentIndex", String(test.currentQuestionIndex));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
