import { getTechnology, setTechnology } from "./database.js"

const technology = getTechnology()

// document.addEventListener(
//     "change",
//     (changeEvent) => {
        
//         if (changeEvent.target.id === "technology") {
//             const setTechnology = changeEvent.target.value 
//             console.log(setTechnology)
//         }
//     }
// )

document.addEventListener(
    "change",
    (changeEvent) => {

        if (changeEvent.target.id === "technology") {

    
            // const technologyID = changeEvent.target.value 
               
            setTechnology(parseInt(changeEvent.target.value))

            // window.alert(`Customer has chosen the ${technologyID}`)
        }
    }
  
)





export const tech = () => {
    let html = `<select id="technology">
    <option value="0">Select a technology package...</option>`

    // This is how you have been converting objects to <li> elements
    const techItems = technology.map(technology => {
        return `<option value="${technology.id}">${technology.name}</option>`
    })

    html += techItems.join("")
    html += "</select>"
    return html
}

