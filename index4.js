
/* --------- ДЗ --------- */

/*
Проанализировав временной промежуток начиная  с 1800 и до 2020 года
найти и вывести в консоль:
		Год первого полета человека в космос и количество итераций
		которое потребовалось для поиска.
		Количество високосных годов принадлежащих данному отрезку
		и количество итераций которое потребовалось для поиска.
*/


/* ------ ОТВЕТ НА ДЗ С ПОМОЩЬЮ DEEPSEEK ------
сам никак не смог разобраться, и все еще не очень понимаю
откуда мы все это берем и записываем именно в таком виде
 */




// Функция для проверки, является ли год високосным
function isLeapYear(year) {
		return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Поиск года первого полета человека в космос (1961 год)
function findFirstSpaceFlightYear(startYear, endYear) {
		let iterations = 0; // Счетчик итераций
		for (let year = startYear; year <= endYear; year++) {
				iterations++; // Увеличиваем счетчик итераций
				if (year === 1961) {
						return { year: year, iterations: iterations };
				}
		}
		return { year: null, iterations: iterations }; // Если год не найден
}

// Подсчет количества високосных годов в промежутке
function countLeapYears(startYear, endYear) {
		let leapYearCount = 0; // Счетчик високосных годов
		let iterations = 0; // Счетчик итераций
		for (let year = startYear; year <= endYear; year++) {
				iterations++; // Увеличиваем счетчик итераций
				if (isLeapYear(year)) {
						leapYearCount++; // Увеличиваем счетчик високосных годов
				}
		}
		return { leapYearCount: leapYearCount, iterations: iterations };
}

// Основной код
const startYear = 1800;
const endYear = 2020;

// Поиск года первого полета в космос
const spaceFlightResult = findFirstSpaceFlightYear(startYear, endYear);
console.log(`Год первого полета человека в космос: ${spaceFlightResult.year}`);
console.log(`Количество итераций для поиска: ${spaceFlightResult.iterations}`);

// Подсчет високосных годов
const leapYearResult = countLeapYears(startYear, endYear);
console.log(`Количество високосных годов с ${startYear} по ${endYear}: ${leapYearResult.leapYearCount}`);
console.log(`Количество итераций для подсчета високосных годов: ${leapYearResult.iterations}`);