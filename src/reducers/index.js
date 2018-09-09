import HistoricalPrices from "./HistoricalPrices";
import LivePrices from "./LivePrices";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  HistoricalPrices,
  LivePrices
});

export default rootReducer;
