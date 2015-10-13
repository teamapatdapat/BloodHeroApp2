// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })


  .state('tab.donitors', {
    url: '/donitors',
    views: {
      'tab-home': {
        templateUrl: 'templates/donitors.html',
        controller: 'HomeCtrl'
      }
    }
  })
   .state('tab.checklist', {
    url: '/checklist',
    views: {
      'tab-home': {
        templateUrl: 'templates/checklist.html',
        controller: 'HomeCtrl'
      }
    }
  })

   .state('tab.finddonor', {
    url: '/finddonor',
    views: {
      'tab-home': {
        templateUrl: 'templates/finddonor.html',
        controller: 'HomeCtrl'
      }
    }
  })
   .state('tab.RCdetails', {
    url: '/RCdetails',
    views: {
      'tab-home': {
        templateUrl: 'templates/RCdetails.html',
        controller: 'HomeCtrl'
      }
    }
  })
   .state('tab.NMMCdetails', {
    url: '/NMMCdetails',
    views: {
      'tab-home': {
        templateUrl: 'templates/NMMCdetails.html',
        controller: 'HomeCtrl'
      }
    }
  })
   .state('tab.people', {
    url: '/people',
    views: {
      'tab-home': {
        templateUrl: 'templates/people.html',
        controller: 'HomeCtrl'
      }
    }
  })
   .state('tab.bloodbank', {
    url: '/bloodbank',
    views: {
      'tab-home': {
        templateUrl: 'templates/bloodbank.html',
        controller: 'HomeCtrl'
      }
    }
  })


  

  .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'templates/tab-settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })

  .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-settings': {
          templateUrl: 'templates/profile.html',
          controller: 'SettingsCtrl'
        }
      }
    })

  .state('tab.about', {
      url: '/about',
      views: {
        'tab-settings': {
          templateUrl: 'templates/about.html',
          controller: 'SettingsCtrl'
        }
      }
    })

  .state('tab.contact', {
      url: '/contact',
      views: {
        'tab-settings': {
          templateUrl: 'templates/contact.html',
          controller: 'SettingsCtrl'
        }
      }
    })

  .state('tab.help', {
      url: '/help',
      views: {
        'tab-settings': {
          templateUrl: 'templates/help.html',
          controller: 'SettingsCtrl'
        }
      }
    })

  .state('tab.logout', {
      url: '/logout',
      views: {
        'tab-settings': {
          templateUrl: 'templates/logout.html',
          controller: 'SettingsCtrl'
        }
      }
    })


    .state('tab.setting-detail', {
      url: '/settings/:settingId',
      views: {
        'tab-settings': {
          templateUrl: 'templates/setting-detail.html',
          controller: 'SettingDetailCtrl'
        }
      }
    })

  .state('tab.newsfeed', {
    url: '/newsfeed',
    views: {
      'tab-newsfeed': {
        templateUrl: 'templates/tab-newsfeed.html',
        controller: 'NewsfeedCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/newsfeed');

});
