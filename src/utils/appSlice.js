import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    dummyState: false,
    userNames: [], // to show the users list. It is an array of user names ex:['sudheer','chirag']
    messages: [], // to show the messages entered. It is an array of messages ex:['Hello','chirag']
    userContainer: [], // It is an array of objects like [{sender:'sudheer',receiver:'chirag',messageReceived:[...previousMessages,newlyAddedMessage]},,,]
  },
  //chirag,sudheer, sai krishna
  reducers: {
    dummyAction: (state, action) => {
      state.dummyState = !state.dummyState;
    },
    addUser: (state, action) => {
      state.userNames = [...state.userNames, action.payload];
    },
    addMessage: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
    addMessagestoUser1: (state, action) => {
      console.log(action.payload);
      //   state.userContainer = state.userContainer.map(el = > el[] == action[1] ? );
    },
  },
});

export const { dummyAction, addUser, addMessage, addMessagestoUser1 } =
  appSlice.actions;

export default appSlice.reducer;
