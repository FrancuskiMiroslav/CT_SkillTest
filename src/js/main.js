document.addEventListener('DOMContentLoaded', function () {
	// tabs
	const tabListBtn = document.querySelectorAll('.tabccordion__list-btn');
	const tabs = document.querySelectorAll('.tabccordion__container');

	tabListBtn.forEach((tab) => {
		tab.addEventListener('click', (e) => {
			const tabNav = tab.parentElement;
			const tabsContainer = tabNav.parentElement.parentElement;
			const tabNumber = tab.dataset.forTab;
			const tabToActivate = tabsContainer.querySelector(
				`.tabccordion__tab[data-tab="${tabNumber}"]`
			);

			tabListBtn.forEach((btn) => {
				btn.classList.remove('active');
			});

			tabsContainer.querySelectorAll('.tabccordion__tab').forEach((tab) => {
				tab.classList.remove('active');
			});

			tab.classList.add('active');

			tabToActivate.classList.add('active');
			tabToActivate.classList.add(`tab${tabNumber}`);
		});
	});

	tabs.forEach((tab) => {
		tab.querySelector('.tabccordion__list-btn').click();
	});

	// accordion
	const accordionBtn = document.querySelectorAll('.accordion-btn');

	accordionBtn.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const clickedAccordionBtn = e.currentTarget;
			const tabCordionBody = clickedAccordionBtn.nextElementSibling;
			const clickedAcordionTab = clickedAccordionBtn.parentElement;
			const tabNumber = clickedAcordionTab.dataset.tab;
			const tabsContainer = clickedAcordionTab.parentElement;
			const tabToActivate = tabsContainer.querySelector(
				`.tabccordion__tab[data-tab="${tabNumber}"]`
			);

			console.log(tabsContainer);

			clickedAccordionBtn.classList.toggle('open');
			tabCordionBody.classList.toggle('open');

			tabToActivate.classList.add('active');
			tabToActivate.classList.add(`tab${tabNumber}`);
		});
	});
});

$(document).ready(function () {
	$('.carousel__container').slick({
		dots: true,
		arrows: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
});
