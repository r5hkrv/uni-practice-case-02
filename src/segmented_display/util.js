import Segments, { Numbers } from "./segments.js";

export const parseNumber = (value) => {
	switch (value) {
		case 0:
			return Numbers.Zero;
		case 1:
			return Numbers.One;
		case 2:
			return Numbers.Two;
		case 3:
			return Numbers.Three;
		case 4:
			return Numbers.Four;
		case 5:
			return Numbers.Five;
		case 6:
			return Numbers.Six;
		case 7:
			return Numbers.Seven;
		case 8:
			return Numbers.Eight;
		case 9:
			return Numbers.Nine;
		default:
			return Segments.Builder().build();
	}
};
