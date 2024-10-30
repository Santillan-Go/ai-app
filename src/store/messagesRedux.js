import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messagesGlobal: [
    {
      _id: "1",
      messageAll: [
        {
          content: "Help me with math",
          role: "you",
        },
        {
          content: "Sure!",
          role: "AI",
        },
        {
          content: "Tell me what  you want me to do",
          role: "AI",
        },
        {
          content:
            "I'm having trouble with division. Could you help me with that?",
          role: "you",
        },
        {
          content:
            "I think I'm getting the hang of it. How about division? Any tips?",
          role: "you",
        },
        {
          content:
            "I've tried breaking it down into steps, but I'm still not getting the hang of it. Could you give me a step-by-step guide?",
          role: "AI",
        },
        {
          content:
            "Alright, let's break it down into steps. First, divide the dividend by the divisor: 10 ÷ 5 = 2",
          role: "AI",
        },
        {
          content:
            "Great, now let's find the remainder. To do this, multiply the quotient by the divisor and subtract it from the dividend: 2 × 5 = 10, then subtract that from 10: 10 - 10 = 0",
          role: "AI",
        },
      ],
    },
    {
      _id: "2",
      messageAll: [
        {
          content: "I'm having trouble with algebra",
          role: "you",
        },
        {
          content: "Sure!",
          role: "AI",
        },
        {
          content: "Tell me what you want me to do",
          role: "AI",
        },
        {
          content:
            "I'm trying to solve a system of linear equations. Could you help me with that?",
          role: "you",
        },
        {
          content:
            "I think I'm getting the hang of it. How about solving systems of linear equations? Any tips?",
          role: "you",
        },
        {
          content:
            "I've tried breaking it down into steps, but I'm still not getting the hang of it. Could you give me a step-by-step guide?",
          role: "AI",
        },
        {
          content: `Alright, let's break it
            down into steps. First, isolate one variable in one equation. Then, solve the other equation for that variable. Finally, substitute the value of the isolated variable into the first equation to find the solution.`,
          role: "AI",
        },
      ],
    },
    {
      _id: "3",
      messageAll: [
        {
          content: "I'm having trouble with geometry",
          role: "you",
        },
        {
          content: "Sure!",
          role: "AI",
        },
        {
          content: "Tell me what you want me to do",
          role: "AI",
        },
        {
          content:
            "I'm trying to solve a problem involving triangles. Could you help me with that?",
          role: "you",
        },
        {
          content:
            "I think I'm getting the hang of it. How about solving problems involving triangles? Any tips?",
          role: "you",
        },
        {
          content:
            "I've tried breaking it down into steps, but I'm still not getting the hang of it. Could you give me a step-by-step guide?",
          role: "AI",
        },
      ],
    },
    {
      _id: "4",
      messageAll: [
        {
          content: "I'm having trouble with statistics",
          role: "you",
        },
        {
          content: "Sure!",
          role: "AI",
        },
        {
          content: "Tell me what you want me to do",
          role: "AI",
        },
        {
          content:
            "I'm trying to solve a problem involving data analysis. Could you help me with that?",
          role: "you",
        },
        {
          content:
            "I think I'm getting the hang of it. How about solving problems involving data analysis? Any tips?",
          role: "you",
        },
        {
          content:
            "I've tried breaking it down into steps, but I'm still not getting the hang of it. Could you give me a step-by-step guide?",
          role: "AI",
        },
      ],
    },
  ],
  //add url images for each tutor
  tutorsGlobal: [
    // {
    //   name: "math",
    //   id: "1",
    //   image:
    //     "https://storage.vivago.ai/image/p_f88e26d0-7863-11ef-ae35-f271045b19aa.jpg?width=512",
    //   KNOWLEDGE: [
    //     { name: "calculo", id: "1" },
    //     { name: "algebra", id: "2" },
    //     { name: "trigonometria", id: "3" },
    //   ],
    // },
    // {
    //   name: "algebra",
    //   id: "2",
    //   image:
    //     "https://storage.vivago.ai/image/p_66b91a20-7864-11ef-84d5-829606c855ef.jpg?width=512",
    //   KNOWLEDGE: [
    //     { name: "calculo", id: "1" },
    //     { name: "algebra", id: "2" },
    //     { name: "trigonometria", id: "3" },
    //   ],
    // },
    // {
    //   name: "geometry",
    //   id: "3",
    //   image:
    //     "https://storage.vivago.ai/image/p_bb09040a-7864-11ef-8803-aac38811e8c2.jpg?width=512",
    //   KNOWLEDGE: [
    //     { name: "calculo", id: "1" },
    //     { name: "algebra", id: "2" },
    //     { name: "trigonometria", id: "3" },
    //   ],
    // },
    // {
    //   name: "statistics",
    //   id: "4",
    //   image:
    //     "https://storage.vivago.ai/image/p_6d4c55d8-7863-11ef-9826-ee9908222d46.jpg?width=512",
    //   KNOWLEDGE: [
    //     { name: "calculo", id: "1" },
    //     { name: "algebra", id: "2" },
    //     { name: "trigonometria", id: "3" },
    //   ],
    // },
  ],
};

const MessagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    // add new message
    newMessage(state, action) {
      //payload={message}
      //message= {
      //   content:
      //     "I've tried breaking it down into steps, but I'm still not getting the hang of it. Could you give me a step-by-step guide?",
      //   role: "teacher",
      // },

      // WRITE THIS AGAIN
      const { id, message } = action.payload;
      console.log(message);
      console.log({ id });
      const foundIndex = state.messagesGlobal.findIndex(
        (message) => message._id === id
      );

      console.log({ foundIndex });
      state.messagesGlobal[foundIndex].messageAll.push(message);
    },

    newKnowledge(state, action) {
      const { knowledge, tutorID, id } = action.payload;

      console.log({ id, tutorID });
      //WE SHOULD RECEIVE THE knowledgeID

      // findIndex tutor
      const findIndex = state.tutorsGlobal.findIndex(
        (tutor) => tutor._id === tutorID
      );
      // find knowledge index

      if (findIndex !== -1) {
        console.log({ findIndex });
        const knowIndex = state.tutorsGlobal[findIndex].KNOWLEDGE.findIndex(
          (know, indexIN) => know._id === id
        );
        //update

        state.tutorsGlobal[findIndex].KNOWLEDGE[knowIndex] = {
          name: knowledge,
          _id: id,
        };
      } else {
        console.log({ name: knowledge });
        console.log({ findIndex });
        console.log("Tutor not found");
      }

      //_______
      // const knowIndex = state.tutorsGlobal[findIndex].KNOWLEDGE.findIndex(
      //   (know, indexIN) => indexIN === index
      // );
      // //update
      // state.tutorsGlobal[findIndex].KNOWLEDGE[knowIndex] = { name: knowledge };
      // console.log({ name: knowledge });
    },

    // add new tutors
    newTutor(state, action) {
      const { name, tutorID, image, id_1, id_2, id_3 } = action.payload;
      /*
      tutor={name}
      
      */
      // const usedImages = state.tutorsGlobal.map((tutor) => tutor.image);

      // const BackImageNotEqual = () => {
      //   for (let i = 0; i < tutorImages.length; i++) {
      //     if (!usedImages.includes(tutorImages[i])) {
      //       return tutorImages[i];
      //     }
      //   }
      //   // let randomIndex = Math.floor(Math.random() * tutorImages.length);
      //   // while (tutorImages[randomIndex] === state.tutorsGlobal[findIndex].image) {
      //   //   randomIndex = Math.floor(Math.random() * tutorImages.length);
      //   // }
      //   // return tutorImages[randomIndex];
      // };
      // const id = crypto.randomUUID();
      //state.tutorsGlobal.length + 1;

      state.tutorsGlobal.push({
        name,
        _id: tutorID,
        KNOWLEDGE: [
          { name: "add knowledge", _id: id_1 },
          { name: "add knowledge", _id: id_2 },
          { name: "add knowledge", _id: id_3 },
        ],
        image,
      });

      state.messagesGlobal.push({
        _id: tutorID,
        messageAll: [],
      });
    },

    //DELETE TUTOR

    deleteTutor(state, action) {
      const { _id } = action.payload;
      const findIndex = state.tutorsGlobal.findIndex(
        (tutor) => tutor._id === _id
      );

      console.log({ findIndex, _id });
      if (findIndex !== -1) {
        state.tutorsGlobal.splice(findIndex, 1);
        state.messagesGlobal.splice(findIndex, 1);
      }
    },
    getTutors(state, action) {
      state.tutorsGlobal = [...action.payload.tutors];
    },
    getMessages(state, action) {
      const { messages } = action.payload;

      state.messagesGlobal.push(messages);
    },
    getOneTutor(state, action) {
      const { tutor, _id } = action.payload;

      const existsInState = state.tutorsGlobal.some(
        (tutor) => tutor._id === _id
      );
      if (!existsInState) {
        state.tutorsGlobal.push(tutor);
      }
    },

    // deleteAllState(state, action) {
    //   state.messagesGlobal = [];
    //   state.tutorsGlobal = [];
    // },
  },
});

export const {
  newMessage,
  newTutor,
  newKnowledge,
  deleteTutor,
  getTutors,
  getMessages,
  getOneTutor,
  deleteAllState,
} = MessagesSlice.actions;

export const MessagesReducer = MessagesSlice.reducer;

//   newKnowledge(state, action) {
//       const { index, knowledge, tutorID } = action.payload;

//       // findIndex tutor
//       const findIndex = state.tutorsGlobal.findIndex(
//         (tutor) => tutor.id === Number(tutorID)
//       );
//  // find knowledge index
//       const knowIndex = state.tutorsGlobal[findIndex].KNOWLEDGE.findIndex(
//         (know, indexIN) => indexIN === index
//       );
// //update
//       state.tutorsGlobal[findIndex].KNOWLEDGE[knowIndex] = { name: knowledge };
//     },
