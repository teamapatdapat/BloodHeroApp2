angular.module('starter.services', [])

.factory('Settings', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var settings = [{
    id: 0,
    name: 'Profile',
//  lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'

  }, {
    id: 1,
    name: 'About',
//  lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Contact',
//    lastText: 'I should buy a boat',
   face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Help',
//    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Log Out',
//   lastText: 'This is wicked good ice cream.',
   face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'

  }];

  return {
    all: function() {
      return settings;
    },
    remove: function(setting) {
      settings.splice(settings.indexOf(setting), 1);
    },
    get: function(settingId) {
      for (var i = 0; i < settings.length; i++) {
        if (settings[i].id === parseInt(settingId)) {
          return settings[i];
        }
      }
      return null;
    }
  };
});
