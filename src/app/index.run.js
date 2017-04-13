(function() {
  'use strict';

  angular
    .module('angularYoProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
