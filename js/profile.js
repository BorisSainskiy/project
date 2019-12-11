$(() => {
  let profile = $("#profile");
  let modal = $("#modal");
  let modalJs = document.getElementById("modal");
  let crossAdmin = $(".admin-cross");
  profile.on("click", () => {
    modal.attr("style", "display: block");
  });

  crossAdmin.on("click", () => {
    modal.attr("style", "display: none");
  });

  window.onclick = event => {
    if (event.target == modalJs) {
      modalJs.style.display = "none";
    }
  };
});
