function maxProfit(prices: number[]): number {
  // // set max profit to 0, because that is the minimum profit someone can register
  // let maxProfit = 0;

  // // imagine that the stock purchased on first day is of minimum purchase value
  // let minimumPurchasePrice = prices[0];

  // for(let sellingPrice of prices){
  //     // keep computing profit for every selling price at current minimum purchase price
  //     // update maxProfit when the new profit exceeds its previous value
  //     maxProfit = Math.max(maxProfit, sellingPrice - minimumPurchasePrice);

  //     // also make sure that if we encounter a smaller selling price than current minimum purchase price
  //     // we could have purchased the stock at this price also, to maximise our profit
  //     // idea is that we purchase stocks when they are down in order to register a profit later
  //     minimumPurchasePrice = Math.min(minimumPurchasePrice, sellingPrice)
  // }

  // return maxProfit

  // ================= alternate approach based on same intuition =========================================
  // set buyday and sellday as index of prices
  let buyDay = 0,
    sellDay = 1;

  // set maxprofit as 0, because it is the minimum profit we can register and also if length of prices was one, it satisfies this case as well
  let maxProfit = 0;

  while (sellDay < prices.length) {
    if (prices[buyDay] < prices[sellDay]) {
      // everytime if the price at sellday is larger, try to maximise our profit
      let profit = prices[sellDay] - prices[buyDay];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      // if the price at sellday is smaller, we now can utilize this as a new buyday because we found a smaller price to buy the stock, it can possibly maximise the profit
      buyDay = sellDay;
    }
    // keep increasing the sellday regardless
    sellDay++;
  }

  return maxProfit;
}
