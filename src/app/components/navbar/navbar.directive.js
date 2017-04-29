(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .directive('topNavbar', topNavbar);

  /** @ngInject */
  function topNavbar() {
    var directive = {
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {}
  }

})();
