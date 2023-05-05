const MobileNav = () => {
  const menuButton = document.querySelector(".menu__sandwitch");
  const mobileNav = document.querySelector(".nav__mobile");
  const mobileLinks = document.querySelectorAll(".mobile-nav__icons");
  const contactButton = document.querySelector(".mobile-contact");

  let isMobileNavOpen = false;

  menuButton.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "block";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });

  contactButton.addEventListener("click", () => {
    isMobileNavOpen = false;
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};

export default MobileNav;
