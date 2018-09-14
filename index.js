// DOM manipulation : selecting elements and handling events
// 1. select the element you want on the page with a query selector
// the query selector has to be attached to an object
const calcGrowth = (pVal, cVal) => (cVal - pVal) / pVal * 100

document.querySelector('.investment__btn').addEventListener('click', () => {
  console.log(`It's working`)

  // 1.Get input from UI
  const btcUsdBought = document.querySelector('.price__input--bought').value
  const btcUsdCurrent = document.querySelector('.price__input--now').value
  const btc = document.querySelector('.investment__btc').value

  // 2. Calculate Profits
  const invested = btc * btcUsdBought
  const current = btc * btcUsdCurrent
  const profit = current - invested
  const growth = calcGrowth(invested, current)

  // 3. Display results

  const resultField = document.querySelector('.result')
  let msg = ''
  if (profit > 0) {
    msg = `You made profit of $${profit} (${growth}%).`
    resultField.style.color = '#00FF00'
  } else if (profit < 0) {
    msg = `You made a loss`
    resultField.style.color = '#FF0000'
  } else {
    msg = 'You Broke Even'
  }
  resultField.textContent = msg
})
