"use strict";

/**
 * Theme Main JS.
 */
(function ($, Drupal) {
  Drupal.behaviors.themeMain = {
    attach: function attach(context) {
      this.themeFunction(context);
    },
    themeFunction: function themeFunction(context) {
      console.log(context);
    }
  };
})(jQuery, Drupal);