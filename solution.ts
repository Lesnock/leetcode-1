/**
 *	LeetCode #1 Challenge: Two Sum
 *	Given an array of integers nums and an integer target, 
 *	return indices of the two numbers such that they add up to target.
 *  You may assume that each input would have exactly one solution, 
 *  and you may not use the same element twice.
 * */
export function twoSum(nums: number[], target: number) {
	for (const [index, num] of nums.entries()) {
		const pair = target - num
		const pairIndex = nums.findIndex(finder(index, pair))
		if (pairIndex > -1) {
			return [index, pairIndex]
		}
	}
}

function finder(currentIndex: number, pairSearch: number) {
	return function finder(num: number, index: number) {
		return index != currentIndex && num == pairSearch
	}
}
