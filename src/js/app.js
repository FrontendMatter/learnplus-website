(function() {
  'use strict';

  // Disable Popper transforms - Conflicts with dropdown CSS effects
  Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false
      
  // Self Initialize DOM Factory Components
  domFactory.handler.autoInit()

  // Connect button(s) to drawer(s)
  var sidebarToggle = document.querySelectorAll('[data-toggle="sidebar"]')
  sidebarToggle = Array.prototype.slice.call(sidebarToggle)

  sidebarToggle.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      var selector = e.currentTarget.getAttribute('data-target') || '#default-drawer'
      var drawer = document.querySelector(selector)
      if (drawer) {
        drawer.mdkDrawer.toggle()
      }
    })
  })

  // SIDEBAR COLLAPSE MENUS
  $('.sidebar .collapse').on('show.bs.collapse', function (e) {
    $(this).closest('.sidebar-menu').find('.open').find('.collapse').collapse('hide');
    $(this).closest('li').addClass('open');
  });
  $('.sidebar .collapse').on('hidden.bs.collapse', function (e) {
    $(this).closest('li').removeClass('open');
  });

  const scrollbarElements = document.querySelectorAll('[data-perfect-scrollbar]')
  scrollbarElements.forEach(element => {
    const ps = new PerfectScrollbar(element)
    Object.defineProperty(element, 'PerfectScrollbar', {
      configurable: true,
      writable: false,
      value: ps
    })
  })

  $('.sidebar .collapse').on('show.bs.collapse hide.bs.collapse shown.bs.collapse hidden.bs.collapse', function() {
    const ps = $(this).closest('[data-perfect-scrollbar]')
    if (ps) {
      ps.get(0).PerfectScrollbar.update()
    }
  })

  $('[data-toggle="tooltip"]').tooltip()

  $('.dropdown, .dropup').on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu')
      .css('visibility', 'visible')
  })
  .on('hide.bs.dropdown', function () {
    $(this).find('.dropdown-menu')
      .one('transitionend', function() {
        $(this).css('visibility', 'hidden')
      })
  })

  // PRELOADER
  window.addEventListener('load', function() {
    $('.preloader').fadeOut()
    domFactory.handler.upgradeAll()
  })

  ///////////////////////////////////
  // Custom JavaScript can go here //
  ///////////////////////////////////

})()
