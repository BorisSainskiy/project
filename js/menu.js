$(() => {
  $(".catalog").on("click", () => {
    $(".nav-catalog").attr("id", "burger");
    console.log($(".nav-catalog"));
  });

  $(".cross").on("click", () => {
    $(".nav-catalog").attr("id", " ");
  });
});
