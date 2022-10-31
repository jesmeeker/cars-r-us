import { getTechnology, setPaint } from "./database.js"

const technology = getTechnology()

document.addEventListener(
    "change",
    (changeEvent) => {
        
        if (changeEvent.target.id === "technology") {
            const setTechnology = changeEvent.target.value 
            console.log(setTechnology)
        }
    }
)



export const tech = () => {
    let html = `<select id="technology">
    <option value="0">Prompt to select resource...</option>`

    // This is how you have been converting objects to <li> elements
    const techItems = technology.map(technology => {
        return `<option value="${technology.id}">${technology.name}</option>`
    })

    html += techItems.join("")
    html += "</select>"
    return html
}

