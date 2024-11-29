

const tradesForm = document.querySelector("#tradesForm");
const tradesContainer = document.querySelector("#trades");

tradesForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const symbolInput = tradesForm.elements.symbol;
  const timeframeInput = tradesForm.elements.timeframe;
  const directionInput = tradesForm.elements.direction;
  const sharesInput = tradesForm.elements.shares;
  const entryPriceInput = tradesForm.elements.entryPrice;
  const stopPriceInput = tradesForm.elements.stopPrice;
  const exitPriceInput = tradesForm.elements.exitPrice;
  const profitLossInput = tradesForm.elements.profitLoss;

  addTrade(symbolInput.value, timeframeInput.value, directionInput.value, sharesInput.value, entryPriceInput.value, stopPriceInput.value, exitPriceInput.value, profitLossInput.value);
    symbolInput.value = "";
    timeframeInput.value = "";
    directionInput.value = "";
    sharesInput.value = "";
    entryPriceInput.value = "";
    stopPriceInput.value = "";
    exitPriceInput.value = "";
    profitLossInput.value = "";

});

const addTrade = (symbol, timeframe, direction, shares, entryPrice, stopPrice, exitPrice, profitLoss) => {
  const newTrade = document.createElement("li");
  const boldTag = document.createElement("b");
    boldTag.append(symbol);
    boldTag.append(timeframe);
    boldTag.append(direction);
    boldTag.append(shares);
    boldTag.append(entryPrice);
    boldTag.append(stopPrice);
    boldTag.append(exitPrice);
    boldTag.append(profitLoss);
    newTrade.append(boldTag);
    tradesContainer.append(newTrade);
    console.log(newTrade);
}

/* const tradesForm = document.querySelector("#tradesForm");
const tradesContainer = document.querySelector("#trades");

tradesForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const symbolInput = tradesForm.elements.symbol;
  const timeframeInput = tradesForm.elements.timeframe;

  addSymbol(symbolInput.value);
    symbolInput.value = "";

  addTimeframe(timeframeInput.value);
    timeframeInput.value = "";

});

const addSymbol = (symbol) => {
  const newSymbol= document.createElement("li");
  const boldTag = document.createElement("b");
    boldTag.append(symbol);  
    newSymbol.append(`Symbol: `)
    newSymbol.append(boldTag);
    tradesContainer.append(newSymbol);
    console.log(newSymbol);
}

const addTimeframe = (timeframe) => {
  const newTimeframe= document.createElement("li");
  const boldTag = document.createElement("b");
    boldTag.append(timeframe);  
    newTimeframe.append(`Timeframe: `)
    newTimeframe.append(boldTag);
    tradesContainer.append(newTimeframe);
    console.log(newTimeframe);
} */


/* const symbol = document.querySelector("#stock-symbol");

symbol.addEventListener("mouseover", function () {
  alert("You moused over me!");
});

symbol.addEventListener("mouseout", () => {
  alert("You moused out!");
}); */

/* const trades = [
  {
    stock: "APPL",
    entry: "$178.50",
    shares: "100",
    direction: "Short",
    stop: "$179.00",
    Target: "$177",
    Exit: "$179.00",
    ProfitLoss: "(-)$50.00"
  },
  {
    stock: "C",
    entry: "$63.25",
    shares: "100",
    direction: "Long",
    stop: "$60.72",
    Target: "$70.72",
    Exit: "$68.00",
    ProfitLoss: "$475.00"
  },
  {
    stock: "MTDR",
    entry: "$63.41",
    shares: "100",
    direction: "Short",
    stop: "$66.15",
    Target: "$53.20",
    Exit: "$60.91",
    ProfitLoss: "$250.00"
  }
] */

// For...Of Loop
/* for (let trade of trades) {
  console.log(trade)
} */

