(function(){

  angular
       .module('users')
       .controller('UserController', [
          'userService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          UserController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function UserController( userService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;

    self.selected     = null;
    self.users        = [ ];
    self.selectUser   = selectUser;
    self.toggleList   = toggleUsersList;
    self.showContactOptions  = showContactOptions;

    // Load all registered users
    self.images = [
        "images/anita-david.jpg",
        "images/anita-david1.jpg",
        "images/anita-david2.jpg",
        "images/anita-david3.jpg",
        "images/anita-david4.jpg",
        "images/anita-david5.jpg",
        "images/anita-david6.jpg",
        "images/santorini.jpg"

    ];
    userService
          .loadAllUsers()
          .then( function( users ) {
            self.users    = [].concat(users);
            self.selected = users[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser ( user ) {
      self.selected = angular.isNumber(user) ? $scope.users[user] : user;
      self.toggleList();
    }

    /**
     * Show the bottom sheet
     */
    function showContactOptions($event) {
        var user = self.selected;

        return $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          templateUrl: './src/users/view/happyBday.html',
          controller: [ '$mdBottomSheet', ContactPanelController],
          controllerAs: "cp",
          bindToController : true,
          targetEvent: $event
        }).then(function(clickedItem) {
          clickedItem && $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function ContactPanelController( $mdBottomSheet ) {
          this.user = user;
          this.actions = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.submitContact = function(action) {
            $mdBottomSheet.hide(action);
          };
        }
    }
      function getRandomIntInclusive(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      this.tiles = buildGridModel({
          icon : "avatar:svg-",
          title: "Svg-",
          background: "",
          type: '',
          time: 0
      });
      function buildGridModel(tileTmpl){
          var it, results = [ ];
          for (var j=0; j<11; j++) {
              it = angular.extend({},tileTmpl);
              it.icon  = it.icon + (j+1);
              it.title = it.title + (j+1);
              it.span  = { row : 1, col : 1 };
              switch(j+1) {
                  case 1:
                      it.background = "red";
                      it.span.row = it.span.col = 2;
                        it.type = 'date';
                      break;
                  case 2: it.background = "green"; it.type = 'image';  it.image = self.images[0];       break;
                  case 3: it.background = "darkBlue"; it.type = 'image';  it.image = self.images[1];    break;
                  case 4:
                      it.background = "blue";
                      it.span.col = 2;
                      it.type = 'timer';
                      it.time = Math.round(+new Date("2015-12-19"));
                      break;
                  case 5:
                      it.background = "yellow";
                      it.span.row = it.span.col = 2;
                      it.weather = 'budapest';
                      break;
                  case 6: it.background = "pink"; it.type = 'image';   it.image = self.images[2];       break;
                  case 7: it.background = "darkBlue"; it.type = 'image'; it.image = self.images[3];     break;
                  case 8: it.background = "purple"; it.type = 'image';   it.image = self.images[4];    break;
                  case 9: it.background = "deepBlue";it.type = 'image'; it.image = self.images[5];     break;
                  case 10: it.background = "lightPurple";it.type = 'image';it.image = self.images[6];  break;
                  case 11: it.background = "yellow"; it.type = 'image'; it.image = self.images[7];     break;
              }
              results.push(it);
          }
          return results;
      }
  }

})();
