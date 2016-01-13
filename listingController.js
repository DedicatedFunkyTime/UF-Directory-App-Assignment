angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
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
    	$scope.detailedInfo = $scope.listings[$scope.listings.indexOf(listing)];
    };
  }
]);
