angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.currentAddress = undefined;
    $scope.iframeURL= undefined;
    $scope.newListing = {"name":"","code":"","address":""};
    $scope.sortType = 'code';
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.addListing = function() {
      console.log($scope.newListing);
      Listings.push($scope.newListing);
      $scope.newListing = {"name":"","code":"","address":""};
      $scope.listings = Listings;
    };
    $scope.deleteListing = function(listing) {
    	$scope.listings.splice($scope.listings.indexOf(listing),1);
    };
    $scope.showDetails = function(listing) {
    	//var listing = $scope.listings[$scope.listings.indexOf(listing)];
    	var baseURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAAvTy5D3B_nzoS1ezbnkg0wG7cCBXM5ms&q=";
    	var address = listing["address"];
    	$scope.currentAddress = address;
    	address = address.replace(/\s/g,'+');
    	$scope.iframeURL = baseURL.concat(address);
    };
  }
]);
