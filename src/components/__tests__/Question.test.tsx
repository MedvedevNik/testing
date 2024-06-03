import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Question from "../Question";

describe("Question component", () => {
  const question = "What is the capital of France?";
  const options = ["Paris", "London", "Berlin"];
  const onSelectOption = jest.fn();

  beforeEach(() => {
    onSelectOption.mockClear();
  });

  test("renders question and options", () => {
    render(
      <Question
        question={question}
        options={options}
        onSelectOption={onSelectOption}
      />,
    );

    expect(screen.getByText(question)).toBeInTheDocument();
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  test("calls onSelectOption with selected option when clicked", () => {
    render(
      <Question
        question={question}
        options={options}
        onSelectOption={onSelectOption}
      />,
    );

    fireEvent.click(screen.getByText(options[0]));

    expect(onSelectOption).toHaveBeenCalledWith(options[0]);
  });
});
