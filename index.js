const btc = 3.5
const btcUsdBought = 5800

const btcUsdNow = 12000
const invested = btc * btcUsdBought
const current = btc * btcUsdNow

const profit = (c, i) => c - i
const calcGrowth = (pVal, cVal) => (cVal - pVal) / pVal * 100
const growth = calcGrowth(invested, current)

console.log(growth)

let message = ''
if (profit(current, invested) > 0) message = `Profit made`
else if (profit(current, invested) < 0) message = `You made a loss`
else message = `Breaking even`

console.log(message)

// DOM manipulation : selecting elements and handling events
