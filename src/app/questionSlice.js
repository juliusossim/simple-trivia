import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answers: [],
  wrongAnswers: []
};

export const questionSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    answers: (state, action) => {
      state.answers.push(action.payload);
    },
    wrongAnswers: (state, action) => {
      state.wrongAnswers.push(action.payload);
    },
    resetAnswers: () => (
      {
        answers: [],
        wrongAnswers: []
      }
    )
  }
});

// Action creators are generated for each case reducer function
export const { answers, wrongAnswers, resetAnswers } = questionSlice.actions;

export default questionSlice.reducer;
