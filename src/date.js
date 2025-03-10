const WEEK_DAYS = [
	"Понедельник",
	"Вторник",
	"Среда",
	"Четверг",
	"Пятница",
	"Суббота",
	"Воскресенье",
];

const isLeapYear = (millis) => {
	const year = new Date(millis).getFullYear();

	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const getWeekDay = (millis) => {
	const index = new Date(millis).getDay();

	return WEEK_DAYS[index];
};

const getAge = (millis) => {
	const diff = Date.now() - millis;

	return new Date(diff).getFullYear() - 1970;
};

export const printDateInfo = (millis) => {
	const isLeapYearLabel = isLeapYear(millis) ? "Да" : "Нет";

	console.log(`День недели ............... ${getWeekDay(millis)}`);
	console.log(`Високосный ли год? ........ ${isLeapYearLabel}`);
	console.log(`Ваш возраст ............... ${getAge(millis)}`);
};
