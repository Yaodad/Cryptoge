const CryptoCoins = () => 
'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en'

const SingleCoin = (id) =>
`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&developer_data=false`;

const HistoricalChart = (id) =>
`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`;

export {
    CryptoCoins,
    SingleCoin,
    HistoricalChart
}