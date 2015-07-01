
Template.layout.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.layout.events({
  // "click #foo": function(event, template){
  //
  // }
});

Template.layout.rendered = function(){
  $(".button-collapse").sideNav();
}
