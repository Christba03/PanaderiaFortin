jQuery(document).ready(function( $ ) {

    // Header fixed on scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
    // Initiate the wowjs animation library
  new WOW().init();
  
    $("#about-btn").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#aboutUs").offset().top
      }, 1000);
  });
    
      $("#featured-btn").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#featured").offset().top
      }, 1000);
  });
    });
   
    // Recuadros de receta
    export default function Widget() {
        return (
            <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto">
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">Chocolate Chip Cookies</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">Delicious homemade chocolate chip cookies.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">View Recipe</button>
                </div>
            </div>
        )
    }
