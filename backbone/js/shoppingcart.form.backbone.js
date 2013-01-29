var SC = {

	start: function() {

		var checkout = new SC.CheckboutFormModel();
		var checkoutView = new SC.CheckoutFormView({ model: checkout });

		checkoutView.render();
		//checkout.setFirstName('Serban');
		//checkout.setLastName('Ghita');		

	}

}


SC.CheckboutFormModel = Backbone.Model.extend({

	defaults: {
				fname: 'Aaa',
				lname: 'Bbb',
				billingcountry: GLOBAL.country,
				state: GLOBAL.state,
				allCountries: GLOBAL.countries,
				allStates: GLOBAL.states[GLOBAL.country]
			},
	
	setFirstName: function(fieldValue){

		this.set('fname', fieldValue);

	},

	setLastName: function(fieldValue){

		this.set('lname', fieldValue);

	},

	setCountryId: function(fieldValue){

		this.set('billingcountry', fieldValue);

	},

	setAllStates: function(){

		this.set('allStates', GLOBAL.states[this.get('billingcountry')]);

	}

});

SC.CheckoutFormView = Backbone.View.extend({

	el: '.page',

	events: {

		'change #billingcountry': 'changeCountry'

	},

	initialize: function(){

		this.template = _.template($('#CheckoutFormTemplate').html());

		_.bindAll(this, 'render');
		this.model.on('change', this.render);


	},

	render: function(){

		console.log( 'rendering' );

		this.$el.html(
						this.template( this.model.attributes ) // this.model.toJSON()
					);

		return this;

	},

	// Custom methods
	changeCountry: function(e){

		console.log('changeCountry()');
		this.changeState();

	},

	changeState: function(e){

		console.log('changeState()');

	}

});


$(document).ready(function(){

	SC.start();

});