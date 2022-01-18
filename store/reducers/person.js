function person(state = { sex: "男", age: 18 }, action) {
  switch (action.type) {
    case "UPDATEAGE":
      return { age: state.age + 1, ...state };
    default:
      return state;
  }
}

export default person;
