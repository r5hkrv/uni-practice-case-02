import readline from "readline";
import { stdin, stdout } from "process";

import { printDateInfo } from "./date.js";

const rl = readline.createInterface({ input: stdin, output: stdout });

rl.question("Введите день вашего рождения: ", (day) => {
	rl.question("Введите месяц (номер месяца) вашего рождения: ", (month) => {
		rl.question("Введите год вашего рождения: ", (year) => {
			printDateInfo(Date.parse(`${year}-${month}-${day}`));

			rl.close();
		});
	});
});
