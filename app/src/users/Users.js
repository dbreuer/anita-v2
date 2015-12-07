(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('users', [ 'ngMaterial', 'timer' ])
  .config( function( $mdIconProvider ){
    $mdIconProvider.iconSet("avatar", 'assets/svg/avatars.svg', 128);
  })
      .directive('weather', weatherDirective);

  function weatherDirective() {
    return {
      restrict: 'AE',
      repalce: true,
      link: function(){

      }
    }
  }

})();
