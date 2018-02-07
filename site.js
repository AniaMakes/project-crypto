let debug = 1;

prepPage();

function prepPage () {
	createFiatCurrencySelector();
	createCryptoCurrencySelector();
}

function createFiatCurrencySelector () {
	let fiatSelector = document.createElement('select');
	fiatSelector.setAttribute('id', 'fiat-currencies');

	let fiatCurrencies = {
		'AED' : 'United Arab Emirates dirham',
		'ARS' : 'Argentine peso',
		'AUD' : 'Australian dollar',
		'BAM' : 'Bosnia and Herzegovina convertible mark',
		'BGN' : 'Bulgarian lev',
		'BRL' : 'Brazilian real',
		'CAD' : 'Canadian dollar',
		'CHF' : 'Swiss franc',
		'CLP' : 'Chilean peso',
		'CNY' : 'Chinese yuan',
		'COP' : 'Colombian peso',
		'CZK' : 'Czech koruna',
		'DKK' : 'Danish krone',
		'DOP' : 'Dominican peso',
		'EUR' : 'Euro',
		'GBP' : 'Pound sterling',
		'HKD' : 'Hong Kong dollar',
		'HRK' : 'Croatian kuna',
		'HUF' : 'Hungarian forint',
		'IDR' : 'Indonesian rupiah',
		'ILS' : 'Israeli new shekel',
		'INR' : 'Indian rupee',
		'IRR' : 'Iranian rial',
		'JPY' : 'Japanese yen',
		'KES' : 'Kenyan shilling',
		'KRW' : 'South Korean won',
		'MXN' : 'Mexican peso',
		'MXV' : 'Mexican Unidad de Inversion',
		'MYR' : 'Malaysian ringgit',
		'NGN' : 'Nigerian naira',
		'NOK' : 'Norwegian krone',
		'NZD' : 'New Zealand dollar',
		'PAB' : 'Panamanian balboa',
		'PEN' : 'Peruvian Sol',
		'PKR' : 'Pakistani rupee',
		'PLN' : 'Polish złoty',
		'RON' : 'Romanian leu',
		'RUB' : 'Russian ruble',
		'SAR' : 'Saudi riyal',
		'SEK' : 'Swedish krona',
		'SGD' : 'Singapore dollar',
		'THB' : 'Thai baht',
		'TRY' : 'Turkish lira',
		'UAH' : 'Ukrainian hryvnia',
		'UGX' : 'Ugandan shilling',
		'USD' : 'United States dollar',
		'VEF' : 'Venezuelan bolívar',
		'VND' : 'Vietnamese đồng',
		'XAF' : 'Central African CFA franc',
		'XAG' : 'Silver',
		'XAU' : 'Gold',
		'XBA' : 'European Composite Unit',
		'XBB' : 'European Monetary Unit',
		'XBC' : 'European Unit of Account 9',
		'ZAR' : 'South African rand',
		'ZMW' : 'Zambian kwacha'
	};

	Object.keys(fiatCurrencies).forEach( currency  => {
		let currencyItem = document.createElement('option');
		currencyItem.setAttribute('value', currency);
		currencyItem.textContent = `${fiatCurrencies[currency]} (${currency})`;

		fiatSelector.appendChild(currencyItem);
	})

	document.getElementById('fiat-currency-list-container').appendChild(fiatSelector);
}

function createCryptoCurrencySelector () {
	fetch('https://min-api.cryptocompare.com/data/all/coinlist')
		.then( response => {
			if (!response.ok) {
				throw new Error('Request response was not OK');
			}
			return getJSON(response);
		}).then( data => {
			extractTopTenCryptoCurrencies(data.Data);
		}).catch( error => {
			// Needs improvement (messages for different errors)
			console.log('Error fetching! ', error.message)
		});
}

function extractTopTenCryptoCurrencies(allCryptoCurrencies) {
	let topTen = [];
	let collected = 0;
	let keyCollection = Object.keys(allCryptoCurrencies);
	let bitcoinIndex = keyCollection.indexOf('BTC');

	for (let i = bitcoinIndex; i < bitcoinIndex + 10; i++) {
		topTen.push(allCryptoCurrencies[keyCollection[i]]);
	};

	let cryptoSelector = document.createElement('select');
	cryptoSelector.setAttribute('id', 'crypto-currencies');

	topTen.forEach( (currency, index)  => {
		let currencyItem = document.createElement('option');
		currencyItem.setAttribute('value', topTen[index].Symbol);
		currencyItem.textContent = topTen[index].CoinName;

		cryptoSelector.appendChild(currencyItem);
	});

	document.getElementById('crypto-currency-list-container').appendChild(cryptoSelector);
}

function getJSON (response) {
	let contentType = response.headers.get("content-type");
	if( contentType && contentType.includes("application/json")) {
		return response.json();
	} else {
		throw new TypeError('Response was not JSON');
	}
}

function processSearchPair (){
	let formLocator = document.getElementById("currency-form");
	formLocator.addEventListener("submit", getExchangeRate);
}

processSearchPair();

function getExchangeRate (event){
	event.preventDefault();

	let fiatCurrencyChosen = document.getElementById("fiat-currencies");
	let cryptoCurrencyChosen = document.getElementById("crypto-currencies");
	console.log(fiatCurrencyChosen[fiatCurrencyChosen.selectedIndex].value);
	console.log(cryptoCurrencyChosen[cryptoCurrencyChosen.selectedIndex].value);


}