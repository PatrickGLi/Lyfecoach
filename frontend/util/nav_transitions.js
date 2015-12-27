var NavTransitions = {
  addNavTransitions: function() {
    this.$navbar = $(".navbar-default .navbar-nav > li > a");
    this.$logo = $("#logo");
    this.$browseLink = $("#browse-link");

    this.$navbar.hover(
      function() {
        $(this).css("color", "#bdbdbd"); },
      function() {
        $(this).css("color", "white"); });

    this.$logo.hover(
      function() {
        $(this).css("color", "#bdbdbd"); },
      function() {
        $(this).css("color", "white"); });

    this.$browseLink.hover(
      function() {
        $(this).css("color", "#bdbdbd"); },
      function() {
        $(this).css("color", "white"); });

    this.$navbar.css('transition', 'color, 0.7s');
    this.$logo.css('transition', 'color, 0.7s');
    this.$browseLink.css('transition', 'color, 0.7s');
  },

  removeNavTransitions: function() {
    this.$logo.unbind('mouseenter mouseleave');
    this.$navbar.unbind('mouseenter mouseleave');
    this.$browseLink.unbind('mouseenter mouseleave');

    this.$navbar.css('transition', 'color, 0s');
    this.$logo.css('transition', 'color, 0s');
    this.$browseLink.css('transition', 'color, 0s');
  }

};

module.exports = NavTransitions;
