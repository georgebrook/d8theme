/**
 * Theme Main JS.
 */
(($, Drupal) => {
  Drupal.behaviors.themeMain = {
    attach(context) {
      this.themeFunction(context);
    },

    themeFunction(context) {
      console.log(context);
    },
  };
})(jQuery, Drupal);
