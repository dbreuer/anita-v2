(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('users', [ 'ngMaterial', 'timer', 'weatherModule' ])
  .config( function( $mdIconProvider ){
    $mdIconProvider.iconSet("avatar", 'assets/svg/avatars.svg', 128);
  })
      .config(function($sceProvider) {
          // Completely disable SCE.  For demonstration purposes only!
          // Do not use in new projects.
          $sceProvider.enabled(false);
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
