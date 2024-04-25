export const scroll = (e, width) => {
	if (width <= 1024) {
		e.target.addEventListener('wheel', function (event) {
			event.preventDefault(); // Отменяем стандартное поведение колесика
			this.scrollLeft += event.deltaY; // Прокручиваем блок влево или вправо в зависимости от направления колеса
		});
	}
};
