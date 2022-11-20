$(document).ready(function () {
  // catalog-menu main-menu
  $(".catalog-menu__btn").click(function (e) {
    e.preventDefault();
    $(".catalog-menu__burger").toggleClass("catalog-menu__burger--active");
    $(".catalog-menu__popup-menu").toggleClass(
      "catalog-menu__popup-menu--active"
    );
    $("body").toggleClass("body-lock");
  });

  // logo
  $(".logo").clone().appendTo(".header__top-panel-container");

  // catalog-menu top-menu
  $(".header__burger").click(function (e) {
    e.preventDefault();
    $(".header__burger").toggleClass("header__burger--active");
    $(".header__menu").toggleClass("header__menu--active");
    $("body").toggleClass("body-mobile-lock");
  });

  // banner
  $(".banner__slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  });

  // categories
  $(".categories__slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  // input type number
  // Уменьшаем на 1
  $(document).on("click", ".input-number__minus", function () {
    let total = $(this).next();
    if (total.val() > 1) {
      total.val(+total.val() - 1);
    }
  });

  // Увеличиваем на 1
  $(document).on("click", ".input-number__plus", function () {
    let total = $(this).prev();
    total.val(+total.val() + 1);
  });

  // Запрещаем ввод текста
  document.querySelectorAll(".input-number__input").forEach(function (el) {
    el.addEventListener("keydown", function (event) {
      // Разрешаем: backspace, delete, tab
      if (
        event.keyCode == 46 ||
        event.keyCode == 8 ||
        event.keyCode == 9 ||
        // Ctrl+A
        (event.keyCode == 65 && event.ctrlKey === true) ||
        // ← →
        (event.keyCode >= 35 && event.keyCode <= 39)
      ) {
        return;
      } else {
        // Только цифры
        if (
          (event.keyCode < 48 || event.keyCode > 57) &&
          (event.keyCode < 96 || event.keyCode > 105)
        ) {
          event.preventDefault();
        }
      }
    });
  });

  // product-item__favorites-btn
  $(".product-item__favorites-btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("product-item__favorites-btn--active");
  });

  // product-item__compare-btn
  $(".product-item__compare-btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("product-item__compare-btn--active");
  });

  // bestsellers__slider
  $(".bestsellers__slider").slick({
    // arrows: false,
    // dots: true,
    // infinite: false,
    // speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      ,
      {
        breakpoint: 405,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // product-item__compare-btn
  $(".like-btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("like-btn--active");
  });

  // js-range-slider
  var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 100,
    max = 2000,
    from = 100,
    to = 2000;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: from,
    to: to,
    hide_min_max: true,
    hide_from_to: true,
    // postfix: " ₽",
    onStart: updateInputs,
    onChange: updateInputs,
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val,
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val,
    });
  });

  // main-catalog filter
  $(".main-catalog__filter-mob-btn").click(function (e) {
    e.preventDefault();
    $(".main-catalog__filter").toggleClass("main-catalog__filter--active");
    $(".main-catalog__filter-mob-btn").toggleClass(
      "main-catalog__filter-mob-btn--active"
    );
    $("body").toggleClass("body-filter-lock");
  });

  // main-catalog view-2
  // main-catalog__view-1-btn
  $(".main-catalog__view-1-btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("main-catalog__view-1-btn--active");
    $(".main-catalog__view-2-btn").toggleClass(
      "main-catalog__view-2-btn--active"
    );
    $(".main-catalog__items-container").toggleClass(
      "main-catalog__items-container--view-2"
    );
  });
  // main-catalog__view-2-btn
  $(".main-catalog__view-2-btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("main-catalog__view-2-btn--active");
    $(".main-catalog__view-1-btn").toggleClass(
      "main-catalog__view-1-btn--active"
    );
    $(".main-catalog__items-container").toggleClass(
      "main-catalog__items-container--view-2"
    );
  });

  // end
});

//tabs
$(document).ready(function () {
  $(".tabs__accordion")
    .children("li")
    .first()
    .children("a")
    .addClass("active")
    .next()
    .addClass("open")
    .show();
  $(".tabs__accordion").on("click", "li > a", function (event) {
    if (!$(this).hasClass("active")) {
      event.preventDefault();
      $(".tabs__accordion .open").removeClass("open").hide();
      $(this).next().toggleClass("open").toggle();
      $(".tabs__accordion").find(".active").removeClass("active");
      $(this).addClass("active");
    } else {
      event.preventDefault();
    }
  });
});

// tabs
$(document).ready(function () {
  //main-product slider
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });

  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    // dots: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
  });
});

// main-comparison
function setEqualHeight(columns) {
  var tallestcolumn = 0;
  columns.each(function () {
    currentHeight = $(this).height();
    if (currentHeight > tallestcolumn) {
      tallestcolumn = currentHeight;
    }
  });
  columns.height(tallestcolumn);
}

$(document).ready(function () {
  setEqualHeight($(".main-comparison__value-1"));
  setEqualHeight($(".main-comparison__value-2"));
  setEqualHeight($(".main-comparison__value-3"));
  setEqualHeight($(".main-comparison__value-4"));
  setEqualHeight($(".main-comparison__value-5"));
  setEqualHeight($(".main-comparison__value-6"));
  setEqualHeight($(".main-comparison__value-7"));
});

// faq
$(document).ready(function () {
  $(".accordeon__content")
    .hide()
    .prev()
    .click(function () {
      $(".accordeon__content").not(this).slideUp();
      $(this).next().not(":visible").slideDown();
    });
});
