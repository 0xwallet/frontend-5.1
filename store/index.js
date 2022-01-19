import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counter";
import personReducer from "./reducers/person";
import globalReducer from './reducers/global'

const reducer = combineReducers({
  count: counterReducer,
  person: personReducer,
  lng: globalReducer
});
const store = createStore(reducer);
export default store;
