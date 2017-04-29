(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .directive('topSlide', topSlide);

  /** @ngInject */
  function topSlide() {
    var directive = {
      templateUrl: 'app/components/top-slide/top-slide.html',
      controller: TopSlideController,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;

    /** @ngInject */
    function TopSlideController() {}
  }

})();
