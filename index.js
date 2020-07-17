$(window).on("load", function () {
    "use strict";
    $(".loader").fadeOut(800);
    $('.side-menu').removeClass('opacity-0');
});

jQuery($=> {
    "use strict";
    let $window = $(window);
    let body = $("body");
    let $root = $("html, body");
    $(body).append('<a href="#" class="back-top"><i class="fa fa-angle-up"></i></a>');
        let amountScrolled = 700;
        let backBtn = $("a.back-top");
        $window.on("scroll", function () {
            if ($window.scrollTop() > amountScrolled) {
                backBtn.addClass("back-top-visible");
            } else {
                backBtn.removeClass("back-top-visible");
            }
        });
        backBtn.on("click", function () {
            $root.animate({
                scrollTop: 0
            }, 700);
            return false;
        });
        $("a.pagescroll").on("click", function (event) {
            event.preventDefault();
            let action = $(this.hash).offset().top;
            if($(this).hasClass('scrollupto')){
                action-=45;
            }
            $("html,body").animate({
                scrollTop: action
            }, 1200);
        });
});

// TIMER

// Set the date we're counting down to
var countDownDate = new Date("June 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = `
  <div class="time p-2">
    <p class="letter">DAYS</p>
    <p class="number p-3 d-flex align-content-center justify-content-center">${days}</p>
  </div>

  <div class="time p-2">
    <p class="letter">HOURS</p>
    <p class="number p-3 d-flex align-content-center justify-content-center">${hours}</p>
  </div>

  <div class="time p-2">
    <p class="letter">MINUTES</p>
    <p class="number p-3 d-flex align-content-center justify-content-center">${minutes}</p>
  </div>

  <div class="time p-2">
    <p class="letter">SECONDS</p>
    <p class="number p-3 d-flex align-content-center justify-content-center">${seconds}</p>
  </div>
  `;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
AOS.init();
new WOW().init();