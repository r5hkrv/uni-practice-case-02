import readline from "readline";
import { stdin, stdout } from "process";

import { parseMonth, printDateInfo } from "./date.js";

const rl = readline.createInterface({ input: stdin, output: stdout });

const closeOnError = () => {
	console.log("Что-то тут не так! Попробуйте еще раз...");

	rl.close();
};

rl.question("Введите день вашего рождения: ", (ans) => {
	const day = parseInt(ans);

	if (day !== day || day < 1 || day > 31) {
		closeOnError();

		return;
	}

	rl.question("Введите месяц вашего рождения: ", (ans) => {
		const monthNum = parseInt(ans);
		const monthIndex = monthNum !== monthNum ? parseMonth(ans) : -1;
		let month;

		if (monthNum >= 1 && monthNum <= 12) month = monthNum;
		if (monthIndex !== -1) month = monthIndex + 1;

		if (month === undefined) {
			closeOnError();

			return;
		}

		rl.question("Введите год вашего рождения: ", (ans) => {
			const year = parseInt(ans);
			const currYear = new Date(Date.now()).getFullYear();

			if (year !== year) {
				closeOnError();

				return;
			}

			if (year < 100 || year >= currYear) {
				console.log("Пожалуйста, вводите значения от 100 до 2024 лет");
				rl.close();

				return;
			}

			printDateInfo(Date.parse(`${year}-${month}-${day}`));

			rl.close();
		});
	});
});
