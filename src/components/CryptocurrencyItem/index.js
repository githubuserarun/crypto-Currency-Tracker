import './index.css'

const CryptocurrencyItem = props => {
  const {currenciesDetails} = props

  const {currencyLogo, currencyName, euroValue, usdValue} = currenciesDetails

  return (
    <li className="currency-details-container">
      <div className="currency-logo-name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-details-container">
        <p className="money-details">{usdValue}</p>
        <p className="money-details">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
