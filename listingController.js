angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.currentAddress = "Please Select Building";
    $scope.newListing = {"name":"","code":"","address":""};
    $scope.sortType = 'code';
	$scope.iframeURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAAvTy5D3B_nzoS1ezbnkg0wG7cCBXM5ms&q=University+of+Florida";

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
		if("address" in listing){
			var address = listing["address"];
			var baseURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAAvTy5D3B_nzoS1ezbnkg0wG7cCBXM5ms&q=";
			$scope.currentAddress = address;
			address = address.replace(/\s/g,'+');
			$scope.iframeURL = baseURL.concat(address);
			console.log("address exists!");
		}else{
			$scope.currentAddress = "No address available";
			$scope.iframeURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAAvTy5D3B_nzoS1ezbnkg0wG7cCBXM5ms&q=Gainesvile,+FL";
			console.log("address does not exist!");
		}
    };
  }
]);
