$(function () {
  $(".layer_popup").draggable({
    containment: ".layer",
  });
});

$(function () {
  $("#startDate").datepicker({
    minDate: +1,
    maxDate: "+1M",
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

$(function () {
  if ($.cookie("popup") == "none") {
    $("#notice_wrap").hide();
  }
  var $expChk = $("#expiresChk");
  $(".closeBtn").on("click", closePop);

  function closePop() {
    var expirtyDate = new Date();
    expirtyDate.setTime(expirtyDate.getTime() + 10 * 60 * 1000);
    if ($expChk.is(":checked")) {
      $.cookie("popup", "none", { expires: expirtyDate, path: "/" });
    }
    $("#notice_wrap").fadeOut("fast");
  }
});
$(function () {
  $("#notice_wrap").draggable();
});

$(function () {
  $.fn.open = function (eventType, message) {
    var ts = $(this);
    $.each(ts, function (i, o) {
      $(o).on(eventType, function () {
        document.getElementById("plugpa").innerHTML = message;
      });
    });
  };
  $(".btn1").open("mouseover", "welcome");
  $(".btn2").open("click", "hello");
});
