$(() => {
  $(".catalog").on("click", () => {
    $(".nav-catalog").attr("id", "burger");
  });

  $(".cross").on("click", () => {
    $(".nav-catalog").attr("id", " ");
  });
});
