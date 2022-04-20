/**
 * Generates basic initials
 * @param text A string or string array which will be used to generate the initials
 * @param delimeter An optional delimeter to split the string
 * @returns The generated initials or null
 */
export function getInitials(text: string, delimiter?: string): string | null 
export function getInitials(text: string[]): string | null
export function getInitials(text: string | string[], delimiter = " "): string | null {
	try {
		if(!text){
			return null
		}

		// If text is string split by delimeter, otherwise use array
		const splitText = typeof text === "string" ? text.split(delimiter) : text;

		// If multiple strings, use the start of the first and last (e.g. Mitchell Jake Sutton = MS)
		if(splitText.length > 1){
			return `${splitText[0][0]}${splitText[splitText.length - 1][0]}`
		}

		// If no array items, return null
		if(splitText.length === 0){
			return null
		}

		// Otherwise assume 1 word and return first character
		return splitText[0][0];
	} catch {
		console.error("Invalid value provided to getInitials function")
		return null
	}
}
