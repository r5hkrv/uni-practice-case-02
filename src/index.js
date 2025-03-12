import readline from "readline";
import { stdin, stdout } from "process";

import { parseMonth, printDateInfo } from "./date.js";

const rl = readline.createInterface({ input: stdin, output: stdout });

const closeOnError = () => {
	console.log("Что-то тут не так! Попробуйте еще раз...");

	rl.close();
};

rl.question("Введите день вашего рождения: ", (ans) => {
	const day = ans;
	const dayN = parseInt(ans);

	if (dayN !== dayN) {
		closeOnError();

		return;
	} else if (dayN < 1 || dayN > 31) {
		console.log("Пожалуйста, вводите значения от 1 до 31");
		rl.close();

		return;
	}

	rl.question("Введите месяц вашего рождения: ", (ans) => {
		let month = ans;
		const monthN = parseInt(ans);
		const monthIndex = monthN !== monthN ? parseMonth(ans) : -1;

		if (monthIndex !== -1) {
			month = `${monthIndex + 1}`;
		} else if (monthN !== monthN) {
			closeOnError();

			return;
		} else if (monthN < 1 || monthN > 12) {
			console.log("Пожалуйста, вводите значения от 1 до 12");
			rl.close();

			return;
		}

		rl.question("Введите год вашего рождения: ", (ans) => {
			const year = ans;
			const yearN = parseInt(ans);
			const currYear = new Date(Date.now()).getFullYear();

			if (yearN !== yearN) {
				closeOnError();

				return;
			} else if (yearN < 100 || yearN > currYear - 1) {
				console.log("Пожалуйста, вводите значения от 100 до 2024");
				rl.close();

				return;
			}

			printDateInfo(day, month, year);

			rl.close();
		});
	});
});
