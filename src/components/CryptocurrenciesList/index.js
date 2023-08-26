import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {
    currenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCurrenciesData()
  }

  getCurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachCurrency => ({
      id: eachCurrency.id,
      currencyLogo: eachCurrency.currency_logo,
      currencyName: eachCurrency.currency_name,
      euroValue: eachCurrency.euro_value,
      usdValue: eachCurrency.usd_value,
    }))

    this.setState({currenciesData: formattedData, isLoading: false})
  }

  render() {
    const {currenciesData, isLoading} = this.state

    return (
      <div className="crypto-currency-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="currency-image"
            />
            <ul className="currencies-list-container">
              <li className="currency-table-header">
                <h1 className="table-heading">Coin Type</h1>
                <div className="usd-euro-container">
                  <h1 className="table-heading">USD</h1>
                  <h1 className="table-heading">EURO</h1>
                </div>
              </li>
              {currenciesData.map(eachCurrency => (
                <CryptocurrencyItem
                  key={eachCurrency.id}
                  currenciesDetails={eachCurrency}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
