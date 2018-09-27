module.exports = function getZerosCount(number) {
	let count = 0;

	const fivesDetector = (num) => {
		if (num % 5 == 0) {count++};
		num = num / 5;
		if (num % 5 == 0 ) {fivesDetector(num)};
	};

	for (let i = 5; i <= number; i += 5) {
		fivesDetector(i);
	}
	return count;
};
