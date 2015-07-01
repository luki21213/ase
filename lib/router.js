Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  // use the template named ApplicationLayout for our layout
  this.layout('layout');

  // render the Post template into the "main" region
  // {{> yield}}
  this.render('mainTemplate');

  // render the PostAside template into the yield region named "aside"
  // {{> yield "aside"}}
  this.render('sideBar', {to: 'aside'});

  // render the PostFooter template into the yield region named "footer"
  // {{> yield "footer"}}
  // this.render('topBar', {to: 'top'});
});
