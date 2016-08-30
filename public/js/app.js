(function(exports){

  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });


  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

app.directive('productPanels', function(){
  return {
    restrict: 'E',
    templateUrl: 'product-panels.html',
    controller: function(){
        this.tab = 1;
        this.selectTab = function(setTab){
          this.tab = setTab;
        };
        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
    },
    controllerAs: 'panel'
  };
});

  var gems = [
  {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'A nice shape.',
    canPurchase: true,
    soldOut: false,
    reviews: [
      {
        stars: 5,
        body: 'Love it!',
        author: 'Alex@hotmail.com'
      },
      {
        stars: 1,
        body: 'Load of crap',
        author: 'Joffrey@hotmail.com'
      }
    ]
  },
  {
    name: 'Pentagram',
    price: 5.95,
    description: 'A nice shape.',
    canPurchase: true,
    soldOut: false,
    reviews: [
      {
        stars: 5,
        body: 'Love it!',
        author: 'Alex'
      },
      {
        stars: 1,
        body: 'Load of crap',
        author: 'Joffrey'
      }
    ]
  }
  ];

})(this);
