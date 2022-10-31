import { getWheels, setPaint } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        
        if (changeEvent.target.id === "wheels") {
            const setWheels = changeEvent.target.value 
            console.log(setWheels)
        }
    }
)



export const wheel = () => {
    let html = `<select id="wheels">
    <option value="0">Prompt to select resource...</option>`

    // This is how you have been converting objects to <li> elements
    const wheelItems = wheels.map(wheels => {
        return `<option value="${wheels.id}">${wheels.name}</option>`
    })

    html += wheelItems.join("")
    html += "</select>"
    return html
}

