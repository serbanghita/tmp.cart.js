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

		},

		test: 'Serban'

	},

	initialize: function(){

		console.log('model: initialize()');

	},

	setField: function(fieldName, fieldValue){

		//this.attributes.fields[fieldName] = fieldValue;
		this.get('fields')[fieldName] = fieldValue;

	},

	setLabel: function(labelName, labelValue){

		//this.attributes.labels[labelName] = labelValue;
		this.get('labels')[labelName] = labelValue;

	},

	validate: function(attributes){

		console.log('validate()');

		if(!attributes.fields.fname){

			return GLOBAL.text.fname;

		}

		if(!attributes.fields.lname){

			return GLOBAL.text.lname;

		}

		if(attributes.fields.billingcountry <= 0){

			return GLOBAL.text.billingcountry;

		}

		if(!attributes.test){

			return 'Its working man!';

		}

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
		// Trigger errors.
		this.model.on('error', function(model, error){
			//console.log(error);
			console.log('There is an error!');
		});
		this.model.bind('change', this.render, this);

		this.model.setLabel('fname', 'Your name biatch!');	
		this.model.setField('fname', 'WTF');
		console.log(this.model.get('test'));
		this.model.set('test', '');
		
		this.render();	

	}

});