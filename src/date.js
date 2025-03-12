import { Display, Segments, parseNumber } from "./segmented_display/index.js";

const MONTHS = [
	"январь",
	"февраль",
	"март",
	"апрель",
	"май",
	"июнь",
	"июль",
	"август",
	"сентябрь",
	"октябрь",
	"ноябрь",
	"декабрь",
];

const WEEK_DAYS = [
	"Понедельник",
	"Вторник",
	"Среда",
	"Четверг",
	"Пятница",
	"Суббота",
	"Воскресенье",
];

export const parseMonth = (val) => {
	const valLower = val.toLowerCase();

	return MONTHS.reduce((prev, curr, i) => {
		let conjCurr = "";

		// Since months are in russian, we need to conjugate them
		if (!curr.endsWith("т")) {
			conjCurr = curr.substring(0, curr.length - 1) + "я";
		} else conjCurr = curr + "а";

		const isMatching = valLower === curr || valLower === conjCurr;

		if (prev === -1 && isMatching) return i;

		return prev;
	}, -1);
};

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

export const printDateInfo = (day, month, year) => {
	const dp = new Display(49, 7);

	if (day.length === 2) {
		parseNumber(parseInt(day.at(0))).draw(dp);
		parseNumber(parseInt(day.at(1))).draw(dp, 5);
	} else {
		parseNumber(0).draw(dp);
		parseNumber(parseInt(day.at(0))).draw(dp, 5);
	}

	Segments.Builder().middle().build().draw(dp, 10);

	if (month.length === 2) {
		parseNumber(parseInt(month.at(0))).draw(dp, 15);
		parseNumber(parseInt(month.at(1))).draw(dp, 20);
	} else {
		parseNumber(0).draw(dp, 15);
		parseNumber(parseInt(month.at(0))).draw(dp, 20);
	}

	Segments.Builder().middle().build().draw(dp, 25);

	if (year.length === 4) {
		parseNumber(parseInt(year.at(0))).draw(dp, 30);
		parseNumber(parseInt(year.at(1))).draw(dp, 35);
		parseNumber(parseInt(year.at(2))).draw(dp, 40);
		parseNumber(parseInt(year.at(3))).draw(dp, 45);
	} else {
		parseNumber(0).draw(dp, 30);
		parseNumber(parseInt(year.at(0))).draw(dp, 35);
		parseNumber(parseInt(year.at(1))).draw(dp, 40);
		parseNumber(parseInt(year.at(2))).draw(dp, 45);
	}

	dp.update();

	const millis = Date.parse(`${year}-${month}-${day}`);
	const isLeapYearLabel = isLeapYear(millis) ? "Да" : "Нет";

	console.log(`День недели ............... ${getWeekDay(millis)}`);
	console.log(`Високосный ли год? ........ ${isLeapYearLabel}`);
	console.log(`Ваш возраст ............... ${getAge(millis)}`);
};
