export default class Segments {
	#lines;

	constructor() {
		this.#lines = [];
	}

	add(x1, y1, x2, y2) {
		this.#lines.push([x1, y1, x2, y2]);

		return this;
	}

	draw(display, x = 0, y = 0) {
		this.#lines.forEach(([x1, y1, x2, y2]) => {
			display.drawLine(x + x1, y + y1, x + x2, y + y2);
		});
	}

	static Builder() {
		return new SegmentsBuilder();
	}
}

class SegmentsBuilder {
	segments;

	constructor() {
		this.segments = new Segments();
	}

	top() {
		this.segments.add(1, 0, 2, 0);

		return this;
	}

	topLeft() {
		this.segments.add(0, 1, 0, 2);

		return this;
	}

	topRight() {
		this.segments.add(3, 1, 3, 2);

		return this;
	}

	middle() {
		this.segments.add(1, 3, 2, 3);

		return this;
	}

	bottomLeft() {
		this.segments.add(0, 4, 0, 5);

		return this;
	}

	bottomRight() {
		this.segments.add(3, 4, 3, 5);

		return this;
	}

	bottom() {
		this.segments.add(1, 6, 2, 6);

		return this;
	}

	build() {
		return this.segments;
	}

	static Builder() {
		return new SegmentsBuilder();
	}
}

export const Numbers = {
	Zero: Segments.Builder()
		.top()
		.topLeft()
		.topRight()
		.bottomLeft()
		.bottomRight()
		.bottom()
		.build(),
	One: Segments.Builder().topRight().bottomRight().build(),
	Two: Segments.Builder()
		.top()
		.topRight()
		.middle()
		.bottomLeft()
		.bottom()
		.build(),
	Three: Segments.Builder()
		.top()
		.topRight()
		.middle()
		.bottomRight()
		.bottom()
		.build(),
	Four: Segments.Builder()
		.topLeft()
		.topRight()
		.middle()
		.bottomRight()
		.build(),
	Five: Segments.Builder()
		.top()
		.topLeft()
		.middle()
		.bottomRight()
		.bottom()
		.build(),
	Six: Segments.Builder()
		.top()
		.topLeft()
		.middle()
		.bottomLeft()
		.bottomRight()
		.bottom()
		.build(),
	Seven: Segments.Builder().top().topRight().bottomRight().build(),
	Eight: Segments.Builder()
		.top()
		.topLeft()
		.topRight()
		.middle()
		.bottomLeft()
		.bottomRight()
		.bottom()
		.build(),
	Nine: Segments.Builder()
		.top()
		.topLeft()
		.topRight()
		.middle()
		.bottomRight()
		.bottom()
		.build(),
};
