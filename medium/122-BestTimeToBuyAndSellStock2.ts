function maxProfit(prices: number[]): number {
  // set the profit as zero
  // if there is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0 (given in explaination)
  let profit = 0;

  // intuition: we only buy stocks when graph is going up, not going down
  // if the graph is higher tomorrow, stock appreciated in value
  // sell at higher value, make profit
  for (let i = 1; i < prices.length; i++) {
    // every time price increased
    // sell the stock to register profit (greedy approach)
    if (prices[i - 1] < prices[i]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}
