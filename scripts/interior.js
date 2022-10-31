import { getInteriors, setPaint } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        
        if (changeEvent.target.id === "interior") {
            const setInterior = changeEvent.target.value 
            console.log(setInterior)
        }
    }
)



export const interior = () => {
    let html = `<select id="interior">
    <option value="0">Prompt to select resource...</option>`

    // This is how you have been converting objects to <li> elements
    const interiorItems = interiors.map(interiors => {
        return `<option value="${interiors.id}">${interiors.name}</option>`
    })

    html += interiorItems.join("")
    html += "</select>"
    return html
}

