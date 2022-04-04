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
        }
    }
});

// Action creators are generated for each case reducer function
export const { answers, wrongAnswers } = questionSlice.actions;

export default questionSlice.reducer;
