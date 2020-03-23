import { createStore } from "redux";

let initialState = {
  vueltas: 33,
  lideres: ["Gio"]
};

const reducer = (state = initialState, action) => {
  console.log("Executing Reducer");
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "OPERATION":
      return { ...state, vueltas: state.vueltas + action.value };
    case "ADD_LEADER":
      return { ...state, lideres: [...state.lideres, action.leaderName] };
  }
  return state;
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
