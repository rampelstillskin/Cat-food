const	mobileNav = document.querySelector(".main-page__mobile-nav__list"),
			mobileNavButton = document.querySelector(".mobile-nav__button"),
			mobileNavButtonClose = mobileNavButton.querySelector(".mobile-nav__burger");

mobileNavButton.addEventListener("click", () => {
	mobileNav.classList.toggle("main-page__mobile-nav__show");
	mobileNavButtonClose.classList.toggle("mobile-nav__burger-close");
});

const mobileNavClose = () => {
	mobileNav.classList.add("main-page__mobile-nav__show");
}

mobileNavClose();