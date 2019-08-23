/**
 * Theme Main JS.
 */
(($, Drupal, settings) => {
  Drupal.behaviors.themeMain = {
    attach: context => {
      this.themeFunction(context, settings);
    },

    themeFunction: context => context + Drupal + settings,
  };
})(jQuery, Drupal, drupalSettings);
