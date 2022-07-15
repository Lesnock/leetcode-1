/**
 *	LeetCode #1 Challange: Two Sum
 *	Given an array of integers nums and an integer target, 
 *	return indices of the two numbers such that they add up to target.
 *  You may assume that each input would have exactly one solution, 
 *  and you may not use the same element twice.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * */
export function twoSum(nums, target) {
	for (const [index, num] of nums.entries()) {
		const pair = target - num
		const pairIndex = nums.findIndex((_num, i) => i != index && _num == pair)
		if (pairIndex > -1) {
			return [index, pairIndex]
		}
	}
}

