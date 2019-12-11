$(() => {
  $(".catalog").on("click", () => {
    alert("!!");
    $(".nav-catalog").attr("id", "burger");
  });

  $(".cross").on("click", () => {
    $(".nav-catalog").attr("id", " ");
  });
});
