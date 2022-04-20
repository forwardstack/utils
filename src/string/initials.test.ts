import { getInitials } from "./initials";

describe("getInitials", () => {
	describe("text type is string", () => {
		describe("and is empty", () => {
			it("returns null", () => {
				expect(getInitials("")).toBe(null)
			})
		})

		describe("and has 1 word", () => {
			it("returns single char", () => {
				expect(getInitials("First")).toBe("F")
			})		})

		describe("and has more than 2 words", () => {
			const testData = [
				["First Last", "FL"],
				["First Middle Last", "FL"],
				["First Second Third Fourth Fifth Last", "FL"]
			]
			it.each(testData)("accepts %s and returns %s", (input, expected) => {
				expect(getInitials(input)).toBe(expected)
			})		
		})
	})
})