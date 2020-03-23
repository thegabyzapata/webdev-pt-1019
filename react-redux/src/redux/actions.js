// Action Creator: A function that returns an action
//      note: an action is just a plain object with a "type" key
export const operation = value => {
  return {
    type: "OPERATION",
    value
  };
};

export const addLeaderAction = leaderName => {
  return {
    type: "ADD_LEADER",
    leaderName
  };
};
