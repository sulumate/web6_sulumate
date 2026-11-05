$(document).ready(function () {
  console.log("jQuery is ready!");

  // Task 1: select by ID, class and tag.
  $("#label-entry").on("click", function () {
    $("#entry-title").text("Common polypody");
    $(".entry-note").html("Botanical name: <em>Polypodium vulgare</em>.");
    $("small").text("Catalogued").css("color", "#356645");
  });

  $("#apply-color").on("click", function () {
    const color = $("#color-input").val().trim();

    if (!CSS.supports("color", color)) {
      $("#color-error").text("Enter a CSS color, for example red or #2563eb.");
      return;
    }

    $("#color-paragraph").css("color", color);
    $("#color-error").text("");
  });

  // Tasks 2–4: visibility, fading and sliding.
  $("#hide-note").on("click", function () {
    $("#field-note").hide();
  });
  $("#show-note").on("click", function () {
    $("#field-note").show();
  });
  $("#toggle-note").on("click", function () {
    $("#field-note").toggle();
  });

  $("#fade-out").on("click", function () {
    $("#fade-image").stop(true, true).fadeOut(350);
  });
  $("#fade-in").on("click", function () {
    $("#fade-image").stop(true, true).fadeIn(350);
  });
  $("#fade-toggle").on("click", function () {
    $("#fade-image").stop(true, true).fadeToggle(350);
  });

  $("#slide-up").on("click", function () {
    $("#slide-panel").stop(true, true).slideUp(300);
  });
  $("#slide-down").on("click", function () {
    $("#slide-panel").stop(true, true).slideDown(300);
  });
  $("#slide-toggle").on("click", function () {
    $("#slide-panel").stop(true, true).slideToggle(300);
  });

  // Task 5: add plain text to either end of the list.
  $("#append-item, #prepend-item").on("click", function () {
    const name = $("#item-name").val().trim();
    if (name === "") return;

    const item = $("<li>").text(name);
    if (this.id === "append-item") {
      $("#specimens").append(item);
    } else {
      $("#specimens").prepend(item);
    }
  });

  $("#remove-item").on("click", function () {
    $("#specimens li").last().remove();
  });

  // Task 6: change the image and link independently.
  $("#change-image").on("click", function () {
    const image = $("#specimen-image");
    if (image.attr("src") === "assets/fern.svg") {
      image.attr({ src: "assets/poppy.svg", alt: "Common poppy" });
    } else {
      image.attr({ src: "assets/fern.svg", alt: "Common polypody fern" });
    }
  });

  $("#change-link").on("click", function () {
    const link = $("#reference");
    if (link.attr("href") === "https://en.wikipedia.org/wiki/Fern") {
      link.attr("href", "https://en.wikipedia.org/wiki/Papaver_rhoeas").text("Read about poppies");
    } else {
      link.attr("href", "https://en.wikipedia.org/wiki/Fern").text("Read about ferns");
    }
  });

  // Task 7: update both values while the user types.
  $("#collector-form").on("submit", function (event) {
    event.preventDefault();
  });
  $("#collector-form input").on("input", function () {
    $("#preview-name").text($("#collector-name").val() || "—");
    $("#preview-email").text($("#collector-email").val() || "—");
  });

  // Tasks 8–10: restart each demonstration from the same position.
  const start = { left: 12, top: 12, width: 38, height: 38, opacity: 1 };

  $("#run-basic").on("click", function () {
    $("#basic-box").stop(true).css(start)
      .animate({ left: "56%", width: 68, height: 68 }, 650);
  });

  $("#run-sequence").on("click", function () {
    $("#sequence-box").stop(true).css(start)
      .animate({ left: "60%" }, 350)
      .animate({ top: 92 }, 350)
      .animate({ width: 20, height: 20 }, 300)
      .animate(start, 500);
  });

  $("#run-combined").on("click", function () {
    $("#combined-box").stop(true).css(start)
      .animate({ left: "52%", top: 58, width: 64, height: 64, opacity: 0.45 }, 800);
  });

  // Task 11: close the open panel, then open the selected panel.
  $(".guide-button").on("click", function () {
    const button = $(this);
    const wasOpen = button.attr("aria-expanded") === "true";
    const panel = $("#" + button.attr("aria-controls"));

    $(".guide-button").attr("aria-expanded", "false");
    $(".guide-panel").not(panel).stop(true, true).slideUp(220);
    if (wasOpen) {
      panel.stop(true, true).slideUp(220);
    } else {
      button.attr("aria-expanded", "true");
      panel.stop(true, true).slideDown(220);
    }
  });
});
