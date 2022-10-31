import { getPaintColors, setPaint } from "./database.js"

const paints = getPaintColors()

document.addEventListener(
    "change",
    (changeEvent) => {
        
        if (changeEvent.target.id === "paint") {
            const setPaint = changeEvent.target.value 
            console.log(setPaint)
        }
    }
)



export const paint = () => {
    let html = `<select id="paint">
    <option value="0">Prompt to select resource...</option>`

    // This is how you have been converting objects to <li> elements
    const paintItems = paints.map(paints => {
        return `<option value="${paints.id}">${paints.name}</option>`
    })

    html += paintItems.join("")
    html += "</select>"
    return html
}

