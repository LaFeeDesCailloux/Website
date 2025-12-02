let mobile: boolean = window.innerWidth < 900

function random(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function generateBlobs(): void {
	if (!mobile) {
		const blobs = document.getElementsByClassName("blob") as HTMLCollectionOf<HTMLElement>
		for (const blob of blobs) {
			const percentage1 = random(25, 75)
			const percentage2 = random(25, 75)
			const percentage3 = random(25, 75)
			const percentage4 = random(25, 75)
			blob.style.borderRadius = `
				${percentage1}% ${100 - percentage1}% ${100 - percentage2}%
				${percentage2}% / ${percentage3}% ${percentage4}%
				${100 - percentage4}% ${100 - percentage3}%
			`
		}
	}
}

export function toggleBlobs(): void {
	if (window.innerWidth <= 900 && !mobile) {
		mobile = true
		const blobs = document.getElementsByClassName("blob") as HTMLCollectionOf<HTMLElement>
		for (const blob of blobs) {
			blob.style.borderRadius = "12px"
		}
	} else if (window.innerWidth > 900 && mobile) {
		mobile = false
		generateBlobs()
	}
}
