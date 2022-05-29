const BASE_URL = `https://api.coinpaprika.com/v1`;

async function fetchCoins() {
    return fetch(`${BASE_URL}/coins`)
        .then((response) => response.json())
}

async function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`)
        .then((response) => response.json())
}

async function fetchCoinTickers(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`)
        .then((response) => response.json())
}

async function fetchCoinHistory(coinId: string) {
    const endDate = Math.floor(Date.now() / 1000); // 초단위로 계산
    const startDate = endDate - 60*60*24 *7

    return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`)
        .then((response) => response.json())
}

export { fetchCoins, fetchCoinInfo, fetchCoinTickers, fetchCoinHistory }