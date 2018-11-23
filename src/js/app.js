import 'ui-learnplus-bootstrap/js/app'
import 'ui-learnplus-bootstrap/js/preloader'
import 'ui-learnplus-bootstrap/js/dropdown'

(function() {
  'use strict';

  ///////////////////////////////////
  // Custom JavaScript can go here //
  ///////////////////////////////////
  
  $('[data-toggle="tab"]').on('hide.bs.tab', function (e) {
    $(e.target).removeClass('active')
  })

})()