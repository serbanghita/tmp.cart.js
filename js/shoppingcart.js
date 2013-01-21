(function(){

  var ShoppingCart = Ember.Application.create();
  
  ShoppingCart.ApplicationController = Ember.Controller.extend({ });
  
  ShoppingCart.pageHeaderView = Ember.View.create({
    templateName: 'pageHeader',
    vendorName: 'DVDFab'
  });

  ShoppingCart.pageHeaderView.appendTo('.page .header');
  
})(window, undefined);