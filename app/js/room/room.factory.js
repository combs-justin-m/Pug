;(function (){

  'use strict';

   angular.module('app')

    .factory("Room", ['$firebaseObject',
      function($firebaseObject) {

        return function(username) {
          // var randomRoomId = Math.round(Math.random() * 100000000);
          var ref = new Firebase("https://radiant-heat-3085.firebaseio.com/room/");
          var roomRef = ref.child(username);

          return $firebaseObject(roomRef);
      };
  }]);

}());
