import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

// document.addEventListener(
//     "change",
//     (changeEvent) => {
        
//         if (changeEvent.target.id === "wheels") {
//             const setWheels = changeEvent.target.value 
//             console.log(setWheels)
//         }
//     }
// )

document.addEventListener(
    "change",
    (changeEvent) => {

        if (changeEvent.target.id === "wheels") {

            setWheels(parseInt(changeEvent.target.value))

            // const wheelsID = changeEvent.target.value 
               
                
            // window.alert(`Customer has chosen ${wheelsID} wheels.`)
        }
    }
  
)



export const wheel = () => {
    let html = `<select id="wheels">
    <option value="0">Select your wheels...</option>`

    // This is how you have been converting objects to <li> elements
    const wheelItems = wheels.map(wheels => {
        return `<option value="${wheels.id}">${wheels.name}</option>`
    })

    html += wheelItems.join("")
    html += "</select>"
    return html
}

