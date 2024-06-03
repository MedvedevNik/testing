import testReducer, { initialState, selectOption, resetTest, submitTest } from '../testSlice';

describe('Test Reducer', () => {
  test('should handle selectOption', () => {
    const action = selectOption('option1');
    const newState = testReducer(initialState, action);
    expect(newState.selectedOptions).toEqual(['option1']);
  });

  test('should handle resetTest', () => {
    const modifiedState = { ...initialState, selectedOptions: ['option1', 'option2'], correctAnswers: ['correct', 'incorrect'] };
    const action = resetTest();
    const newState = testReducer(modifiedState, action);
    expect(newState).toEqual(initialState);
  });

  test('should handle submitTest', () => {
    const modifiedState = { ...initialState, selectedOptions: ['Париж', 'Атлантический', 'H2O'] };
    const action = submitTest();
    const newState = testReducer(modifiedState, action);
    expect(newState.correctAnswers).toEqual(['correct', 'incorrect', 'correct']);
  });
});
