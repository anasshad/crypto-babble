import React from "react";
import HistoricalPrices from "./components/HistoricalPrices";
import LivePrices from "./components/LivePrices";

import Chat from "./containers/Chat.container";
import HistoricalPricesContainer from "./containers/HistoricalPrices.container";
import LivePricesContainer from "./containers/LivePrices.container";

const App = () => (
  <div>
    <Chat />
    <div style={{ height: "300px" }}>
      <LivePricesContainer />
    </div>
    <HistoricalPricesContainer />
  </div>
);

export default App;
