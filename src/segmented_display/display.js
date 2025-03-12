export default class Display {
	cells;

	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.cells = Array.from({ length: height }, () => Array(width));
	}

	drawLine(x1, y1, x2, y2) {
		let x = x1;
		let y = y1;
		let xi = x1 < x2 ? 1 : -1;
		let yi = y1 < y2 ? 1 : -1;

		while (true) {
			if (this.cells[y] === undefined) break;

			this.cells[y][x] = "*";

			if (x === x2 && y === y2) break;
			if (x !== x2) x += xi;
			if (y !== y2) y += yi;
		}
	}

	update() {
		for (let i = 0; i < this.height; i++) {
			for (let j = 0; j < this.width; j++) {
				if (this.cells[i][j] !== undefined) {
					process.stdout.write(this.cells[i][j]);

					continue;
				}

				process.stdout.write(" ");
			}

			process.stdout.write("\n");
		}
	}
}
