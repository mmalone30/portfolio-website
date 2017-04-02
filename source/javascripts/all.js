//Smooth state transitions

$(function(){
  'use strict';
  var $page = $('#main'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        onStart: {
          duration: 800, // Duration of our animation
          scroll: true,
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');
            // Inject the new content
            $container.html($newContent);
            $('html, body').animate({ scrollTop: 0 }, 0);
          }
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');
});

// $(function() {
//   $('#main').smoothState();
// });
