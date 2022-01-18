import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counter";
import personReducer from "./reducers/person";

const reducer = combineReducers({
  count: counterReducer,
  person: personReducer
});
const store = createStore(reducer);
export default store;
