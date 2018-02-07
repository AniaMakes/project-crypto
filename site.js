let debug = 1;

prepPage();

function prepPage () {
	let fiatSelector = document.createElement('select');
	fiatSelector.setAttribute('id', 'fiat-currencies');

	let currencyLists = loadCurrencyLists();
	let fiatCurrencies = currencyLists.fiatCurrencies;

	Object.keys(fiatCurrencies).forEach((currency) => {
		let currencyItem = document.createElement('option');
		currencyItem.setAttribute('value', currency);
		currencyItem.textContent = `${fiatCurrencies[currency]} (${currency})`;

		fiatSelector.appendChild(currencyItem);
	})

	document.getElementById('currency-list-container').appendChild(fiatSelector);
}

function loadCurrencyLists () {
	let currencyLists = {};

	currencyLists.fiatCurrencies = {
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

	return currencyLists;
}