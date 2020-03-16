let userController = new UserController(
  "form-user-create",
  "form-user-update",
  "table-users"
);

document.getElementById("sidebar-menu").addEventListener("click", () => {
  let menuAtive = document.querySelector(".sidebar-collapse");
  if (!menuAtive) {
    document.querySelector("body").classList.add("sidebar-collapse");
  } else {
    document.querySelector("body").classList.remove("sidebar-collapse");
  }
});
