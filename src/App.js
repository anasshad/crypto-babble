import React from "react";
import HistoricalPrices from "./components/HistoricalPrices";
import LivePrices from "./components/LivePrices";
import Chat from "./components/Chat";

import HistoricalPricesContainer from "./containers/HistoricalPrices.container";
import LivePricesContainer from "./containers/LivePrices.container";

const App = () => (
  <div>
    <Chat />
    <LivePricesContainer />
    <HistoricalPricesContainer />
  </div>
);

export default App;
