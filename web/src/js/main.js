function displayNavbarMenu() {
  const navbarBurger = document.querySelectorAll(".navbar-burger")[0];

  navbarBurger.addEventListener("click", () => {
    const navbarMenu = document.getElementById("navbarMenu");

    navbarBurger.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });
}

// Function calls:
displayNavbarMenu();
