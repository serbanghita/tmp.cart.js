// Override the default template tags to [% ... %].
_.templateSettings.interpolate = /\[%([\s\S]+?)%\]/g;

// Declare the main ShoppingCart object.
var ShoppingCart = {

	start: function(){

		var view = new ShoppingCart.CheckoutFormView();

	}

};

ShoppingCart.CheckoutFormCollection = Backbone.Collection.extend({});

ShoppingCart.CheckoutFormModel = Backbone.Model.extend({

	defaults: {

		fields: {

			fname: 'Serban',
			lname: 'Ghita',
			billingcountry: 111

		},

		labels: {

			fname: 'First name',
			lname: 'Last name',
			billingcountry: 'Country',
			Checkout: 'Checkout'

		}

	},

	initialize: function(){

		console.log('model: initialize()');

	},

	setFields: function(fields){


	},

	setLabels: function(labels){


	}

});

ShoppingCart.CheckoutFormView = Backbone.View.extend({

	el: '#CheckoutFormView',

	//template: _.template($('#CheckoutFormTemplate').html()),

	events: {

		'change #billingcountry': 'handleBillingCountry'

	},

	handleBillingCountry: function(e){

		console.log('handleBillingCountry()');


	},

	render: function(){

		console.log('render()');
		this.$el.html(this.template({model: this.model.toJSON()}));

		return this;

	},

	initialize: function(){

		console.log('initialize()');
		this.template = _.template($('#CheckoutFormTemplate').html());
		this.model = new ShoppingCart.CheckoutFormModel();
		this.model.bind('change', this.render, this);
		this.render();

	}

});