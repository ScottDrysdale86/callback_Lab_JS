const Cinema = function (films) {
	this.films = films;
};

Cinema.prototype.filmTitles = function () {
	return this.films.map((film) => film.title);
};

Cinema.prototype.findByTitle = function (searchTitle) {
	return this.films.find((film) => film.title === searchTitle);
};

Cinema.prototype.findByGenre = function (genre) {
	return this.films.filter((film) => film.genre === genre);
};

Cinema.prototype.filmFromYear = function (year) {
	return this.films.some((film) => film.year === year);
};

Cinema.prototype.filmOverLength = function (length) {
	return this.films.every((film) => film.length >= length);
};

Cinema.prototype.allFilmRuntime = function () {
	return this.films.reduce(
		(runningTotal, film) => runningTotal + film.length,
		0
	);
};

Cinema.prototype.filmsByProperty = function (property, value) {
	return this.films.filter((film) => film[property] === value);
};

module.exports = Cinema;
