angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope, Settings) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.settings = Settings.all();
  $scope.remove = function(setting) {
    Settings.remove(setting);
  };
})

.controller('SettingDetailCtrl', function($scope, $stateParams, Settings) {
  $scope.setting = Settings.get($stateParams.settingId);
})

.controller('NewsfeedCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
