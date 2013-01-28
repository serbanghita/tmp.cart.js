'use strict';

var GLOBAL = {

	entryLink: {
		'PRODS': '4555573,4555574',
		'QTY': '1,1',
		'LANG': null,
		'CURRENCY': null,
		'DOTEST': null,
		'REF': null,
		'AFFILIATE': null,
		'COUPON': null,
		'LICENSE': null,
		'PAY_TYPE': null,
		'SRC': null,
		'AFFSRC': null,
		'LANGUAGES': null,
		'CHK_BCKUP': null,
		'CHK_CROSS': null,
		'UPSELL': null,
		'CHK_GIFT': null,
		'CART': 1,
		'CHK_DIS': null,
		'OPTIONS': null,
		'CART_ID': null,
		'ORDERSTYLE': null,
		'NO_UPSELL': null,
		'DCURRENCY': null,
		'PHASH': null,
		'PLNKEXP': null,
		'PLNKID': null,
		'CARD': 2,
		'CLEAN_CART': 'all',
		'WS_ORDER': null,
		'BACK_REF': null,
		'CUSTOMERID': null,
		'LAYOUT_TYPE': 'MOBILE',
		'AV_CUSTOMERID': null
	},	

	// Labels and text 
	text: {

		AUTO_RENEWAL_DETAILS: "Details",
		AUTO_RENEWAL_PRODUCTS: "Enable auto-renewal for this order",
		AUTO_RENEWAL_TOOLTIP: "<p>By enabling automatic billing, your subscription will be automatically renewed before it expires, avoiding usage interruptions in a highly secure environment.</p><p>You can disable the auto-renewal option at any time.</p>",
		
		// ...
		fname: 'First name',
		lname: 'Last name',
		billingcountry: 'Country',
		please_select: "Please select",
		// ...
		
		Checkout: 'Checkout'

	},

	requestTime: '1846400976181',

	cartId: 'de5151e971f4cf9b634fa2a58e8434cf',
	sessionId: 'd1d1995ede686683fa6a6aa4881f9062', // wtf?
	templateId: 2286,
	affiliateId: 0,

	vendor: {
		code: 'SCSERBOE',
		logo: '../images/merchant/1fd09c5f59a8ff35d499c0ee25a1d47e/logo-software112.png',
		url: 'http://serban-iulian.ro',
	},

	visitor: {
		country: 'ro',
		countryLabel: 'Romania',
		ip: '10.5.5.32',
		deviceIsMobile: false,
		deviceIsTablet: false
	},

	language: 'en', // Current language.
	languages: {

		cs: 'Česky',
		da: 'Dansk',
		de: 'Deutsch',
		en: 'English',
		es: 'Español',
		fr: 'Français',
		it: 'Italiano',
		nl: 'Nederlands',
		no: 'Norsk',
		pl: 'Polski',
		pt: 'Português',
		fi: 'Suomi',
		sv: 'Svenska',
		ru: 'Русский',
		ar: 'العربية',
		zh: '中文',
		ja: '日本語'								

	},

	currency: {

		billing: 'EUR', // Current billing currency.
		display: 'EUR' // Current display currency.

	},

	currencies: {

		billing: {
			EUR: 'EUR - Euro',
			GBP: 'GBP - Great Britain Pound',
			USD: 'USD - United States Dollar'
		},

		display: {

			AUD: 'AUD - Australian Dollar', // Label should have the original format (eg. 'Euro').
			EUR: 'EUR - Euro',
			GBP: 'GBP - Great Britain Pound',
			JPY: 'JPY - Japanese Yen',
			RON: 'RON - Romanian Leu',
			USD: 'USD - United States Dollar'

		}
										
	},

	canHaveCoupon: true,
	hasBackupCD: true,
	hasDIS: true,
	hasGift: true,
	hasRenewal: true,
	hasCrossSell: true,
	isTrialOrder: true,
	isTestOrder: false,
	isUpgradeOrder: false,

	products: {

		4555573: {

			index: 0,
			name: "Product 2011",
			nameTranslated: "Product 2011",
			shortDescription: "<p> test1</p>",
			imgs: {
				60: '../images/merchant/1fd09c5f59a8ff35d499c0ee25a1d47e/products/60px_French-200.jpg',
				80: '../images/merchant/1fd09c5f59a8ff35d499c0ee25a1d47e/products/80px_French-200.jpg',
				100: '../images/merchant/1fd09c5f59a8ff35d499c0ee25a1d47e/products/100px_French-200.jpg',
				150: '../images/merchant/1fd09c5f59a8ff35d499c0ee25a1d47e/products/150px_French-200.jpg'
			},
			qty: 1,
			price: 446.4,
			priceInDisplayedCurrency: 446.4,
			priceFull: 446.4,
			priceWithTax: 540.14,
			discount: 0,
			discountInDisplayedCurrency: 0,
			tax: 93.74,
			taxInDisplayedCurrency: 93.74,
			hasPhisicalDelivery: false,
			deliverable: 'NO_DELIVERY', // BY_AVANGATE, BY_VENDOR, NO_DELIVERY
			type: 'REGULAR', // REGULAR, BUNDLE, DISCOUNT, DOWNLOAD_INSURANCE, MEDIA, SHIPPING
			PurchaseType: 'REGULAR' // Per product? REGULAR, UPGRADE, TRIAL, RENEWAL

		},

		4555574: {
			// ...
		}	

	},

	totals: {

		tax: 1312.50,
		subtotal: 6250.01,
		total: 7562.51

	},

	country: 237,
	countries: {

		1: { 'label': 'Afghanistan' },
		2: { 'label': 'Albania' },
		3: { 'label': 'Algeria' },
		4: { 'label': 'American Samoa' },
		5: { 'label': 'Andorra' },
		6: { 'label': 'Angola' },
		7: { 'label': 'Anguilla' },
		8: { 'label': 'Antarctica' },
		237: { 'label': 'Romania', 'taxzone': 'EU' }

	},

	state: null,
	states: {

		39: {
			0: 'Alberta',
			1: 'British Columbia',
			2: 'Manitoba',
			3: 'New Brunswick',
			4: 'Newfoundland and Labrador',
			5: 'Northwest Territories',
			6: 'Nova Scotia',
			7: 'Nunavut',
			8: 'Ontario',
			9: 'Prince Edward Island',
			10: 'Quebec',
			11: 'Saskatchewan',
			12: 'Yukon Territory'			
		},

		73: {

			0: "Ain",
			1: "Aisne",
			2: "Allier",
			3: "Alpes-de-Haute-Provence",
			4: "Alpes-Maritimes"
			// ...			

		}

		// ...

	},

	paymentMethod: 1,
	paymentMethods: {

		// 'online' - country doesn't matter.
		// 'recurring' - terminal has 'HasRenewal' true
		1: { 
			'label': 'Visa/MasterCard/Eurocard', 
			'currencies': ['EUR', 'USD', 'RON'], 
			'online': true,
			'recurring': true
		},
		8: { 
			'label': 'PayPal', 
			'currencies': ['EUR', 'USD'],
			'terminal': 'PAYPAL_EXPRESS',
			'recurring': true
		},
		14: { 
			'label': 'Discover/Novus', 
			'currencies': ['EUR', 'USD', 'RON'], 
			'online': true,
			'recurring': true
		}		

	},

	// Labels should have the original format (eg. 'January').
	months: {

		'01': '01 (January)',
		'02': '02 (February)',
		'03': '03 (March)',
		'04': '04 (April)',
		'05': '05 (May)',
		'06': '06 (June)',
		'07': '07 (July)',
		'08': '08 (August)',
		'09': '09 (September)',
		'10': '10 (October)',
		'11': '11 (November)',
		'12': '12 (December)'

	},

	years: {

		2012: '2012',
		2013: '2013',
		2014: '2014',
		2015: '2015',
		2016: '2016',
		2017: '2017',
		2018: '2018',
		2019: '2019',
		2020: '2020',
		2021: '2021',
		2022: '2022'

	},

	formFields: {

		'language': 'en',
		'display_currency': 'RON',

		'qty0': 1,
		'prod0': 4555597,
		'qty1': 1,
		'prod1': 4555598,
		'qty2': 1,
		'prod2': 4555599,
		'qty3': 1,
		'prod3': 4555601,
		'coupon': null,		
		
		'fname': null,
		'lname': null,
		'address': null,
		'address2': null,
		'city': null,
		'zipcode': null,
		'billingcountry': 237,
		'state': null,
		'state2': null,
		'company': null,
		'regnumber': null,
		'fiscalcode': null,
		'bank': null,
		'bankaccount': null,
		'phone': null,
		'fax': null,
		'email': null,
		're_email': null,
		'samedelivery': 'Yes',

		'payment': 1,
		'billing_currency': 'RON',
		'ccnumber': null,
		'ccexpmonth': null,
		'ccexpyear': null,
		'cvv2': null,
		'nameoncard': null,

		'custom[1853]': null,
		'custom_4555597[1854]': null,
		'custom_4555597[1855]': null,

		'cCare': 0,
		'cCareName': 0,		

		'action': null, // language, currency
		'Update': true, // Updates the current cart.
		'Submit': true // Pushes the data into the next page.

	}

};