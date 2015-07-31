angular.module('starter.controllers', [])
    .controller('AppController', function($scope, $rootScope){
        $rootScope.showSearchBar = function(){
            $('.ion-google-place-container').show();
        };
    })
.controller('DashCtrl', function($scope, Area, $ionicFilterBar) {
        var self = this;
        self.showFilterBar = function () {
            filterBarInstance = $ionicFilterBar.show({
                items: vm.items,
                update: function (filteredItems) {
                    vm.items = filteredItems;
                },
                filterProperties: 'description'
            });
        };



        $scope.areas = Area.query();
    })

.controller('ChatsCtrl', function($scope, Chats) {
        debugger;
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('AreaDetailCtrl', function($scope, $stateParams, Area) {
    $scope.$on('mapInitialized', function(event, map) {

    });
      $scope.area = Area.get({areaId: $stateParams.areaId});
    }
);
