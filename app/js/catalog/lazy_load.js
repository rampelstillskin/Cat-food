$(function() {
	$(".catalog__item")
		.slice(0, 6)
		.css("display", "flex");
	$(".catalog__item-show__button").on("click", function(evt) {
		evt.preventDefault();
		$(".catalog__item:hidden")
			.slice(0, 3)
			.css("display", "flex");
		if ($(".catalog__item:hidden").length === 0) {
			$(".catalog__item-show").css("display", "none");
		}
	});
});
