let debug = 1;
showCurrencyList();

function loadCurrencyLists () {
	let currencyLists = {};

	if (localStorage.cryptoCurrency) {
		if (debug) console.log('Loading cryptocurrency list from localStorage');
	} else {
		if (debug) console.log('Loading cryptocurrency list from file');

		scriptLoader('cryptoCurrencies.js');
		localStorage.setItem('cryptoCurrencyData', cryptoCurrencyData);
	}

	if (localStorage.fiatCurrency) {
		if (debug) console.log('Loading fiat currency list from localStorage');
	} else {
		if (debug) console.log('Loading fiat currency list from file');

		scriptLoader('fiatCurrencies.js');
		localStorage.setItem('fiatCurrencyData', fiatCurrencyData);
	}

	currencyLists.cryptoCurrencies = JSON.parse(localStorage.cryptoCurrencyData);
	currencyLists.fiatCurrencies = JSON.parse(localStorage.fiatCurrencyData);

	return currencyLists;
}

function currencyListLoader (list) {
	if (localStorage[list]) {
		if (debug) console.log(`Loading ${list} list from localStorage`);
	} else {
		if (debug) console.log(`Loading ${list} list from file`);

		scriptLoader(`${list}.js`);
		localStorage.setItem(`${list}Data`, cryptoCurrencyData);
	}
}

function scriptLoader (script) {
	let head = document.getElementsByTagName('head')[0];
	let loader = document.createElement('script');
	loader.type = 'text/javascript';
	loader.src = script;
	head.appendChild(loader);
}

function showCurrencyList () {
	let cryptoList = document.createElement('ul');

	let currencyLists = loadCurrencyLists();
	// let cryptoCurrencies = currencyLists.cryptoCurrencies;

	// Object.keys(cryptoCurrencies).forEach((currency) => {
	// 	let currencyItem = document.createElement('li');

	// 	currencyItem.textContent = cryptoCurrencies[currency].nameAndSymbol;
	// 	cryptoList.appendChild(currencyItem);
	// })

	// document.getElementById('currency-list-container').appendChild(cryptoList);
}
