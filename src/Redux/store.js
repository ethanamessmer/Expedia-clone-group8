import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { FlightReducer } from "./AdminFlights/reducer";
import { HotelReducer } from "./AdminHotel/reducer";
import { LoginReducer } from "./Authantication/auth.reducer";
import { StayReducer } from "./StayReducer/reducer";
import { UsersReducer } from "./AdminUsers/reducer";

const rootReducer = combineReducers({
  FlightReducer,
  HotelReducer,
  UsersReducer,
  LoginReducer,
  StayReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
