//CRreate the slice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prompts: [
    { name: "Explain this", id: "1dsx437d" },
    { name: "Correct this", id: "1dsx438d" },
    { name: "Translate to spanish", id: "1dsx479d" },
  ],
};

const chatSlice = createSlice({
  name: "prompts",
  initialState,
  reducers: {
    // add a new message to the chat
    addPrompt: (state, action) => {
      const { prompt } = action.payload;
      if (state.prompts.length <= 5) {
        const newOne = { name: prompt, id: crypto.randomUUID() };
        state.prompts.push(newOne);
      }
    },
    // update the current message index
    updatePrompt: (state, action) => {
      const { id, newprompt } = action.payload; // state.propms = action.payload;
      //find propmt
      const foundPromptIndex = state.prompts.findIndex((p) => p.id === id);
      if (foundPromptIndex != -1) {
        state.prompts[foundPromptIndex].name = newprompt;
      }
    },
    deletePrompt: (state, action) => {
      const { id } = action.payload; // state.propms = action.payload;
      state.prompts = state.prompts.filter((p) => p.id !== id);
    },
    changePosition: (state, action) => {
      const { newPrompts } = action.payload;
      // const prompt = state.prompts.find((p) => p.id === id);
      console.log("UPDATE PROMPTS");
      if (newPrompts) {
        console.log(newPrompts);
        state.prompts = newPrompts;
      }
    },
  },
  // additional reducers can be defined here
  // ...
});

export const { addPrompt, updatePrompt, deletePrompt, changePosition } =
  chatSlice.actions;

export const PropmtsRedux = chatSlice.reducer;
