import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import { twoSum } from './solution.js'

Deno.test('Test leetcode #1 challenge examples are working', () => {
	assertEquals(
		twoSum([2,7,11,15], 9), 
		[0, 1]
	)

	assertEquals(
		twoSum([3,2,4], 6), 
		[1, 2]
	)

	assertEquals(
		twoSum([3,3], 6), 
		[0, 1]
	)
})
