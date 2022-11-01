import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

// document.addEventListener(
//     "change",
//     (changeEvent) => {
        
//         if (changeEvent.target.id === "interior") {
//             const setInterior = changeEvent.target.value 
//             console.log(setInterior)
//         }
//     }
// )

document.addEventListener(
    "change",
    (changeEvent) => {

        if (changeEvent.target.id === "interior") {

            setInterior(parseInt(changeEvent.target.value))

            // const interiorID = changeEvent.target.value 
               
                
            // window.alert(`Customer has chosen ${interiorID} interior.`)
        }
    }
  
)


export const interior = () => {
    let html = `<select id="interior">
    <option value="0">Select an interior option...</option>`

    // This is how you have been converting objects to <li> elements
    const interiorItems = interiors.map(interiors => {
        return `<option value="${interiors.id}">${interiors.name}</option>`
    })

    html += interiorItems.join("")
    html += "</select>"
    return html
}

