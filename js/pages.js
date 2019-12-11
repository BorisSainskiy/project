$(() => {
  let pages = document.body.querySelectorAll(".pages span");
  let prev = $(".prev");
  let next = $(".next");

  prev.on("click", function() {
    for (let i = 0; i <= pages.length - 1; i++) {
      if ($(this).attr("data-arrow") == pages[i].getAttribute("data-arrow")) {
        let num = parseInt(pages[i].textContent);
        num -= 1;
        if (num < 1) {
          num = 1;
        }
        pages[i].textContent = num;
      }
    }
  });

  next.on("click", function() {
    for (let i = 0; i <= pages.length - 1; i++) {
      if ($(this).attr("data-arrow") == pages[i].getAttribute("data-arrow")) {
        let num = parseInt(pages[i].textContent);
        num += 1;
        if (num > 3) {
          num = 3;
        }
        pages[i].textContent = num;
      }
    }
  });
});
