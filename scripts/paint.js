import { getPaintColors, setPaint } from "./database.js"

const paints = getPaintColors()

// document.addEventListener(
//     "change",
//     (changeEvent) => {
        
//         if (changeEvent.target.id === "paint") {
//             const setPaint = changeEvent.target.value 
//             console.log(setPaint)
//         }
//     }
// )

document.addEventListener(
    "change",
    (changeEvent) => {

        if (changeEvent.target.id === "paint") {
            const chosenOption = changeEvent.target.value
            console.log("Chosen Option")
            console.log(chosenOption)
            setPaint(parseInt(changeEvent.target.value))
        //     console.log("ID:")
        //     console.log(changeEvent.target.id)
        //     console.log(changeEvent.target.value)
        // }
    }
}
)
  


// document.addEventListener(
//     "click",
//     (event) => {

//     if (event.target.id === "orderButton") {
//         addCustomOrder()

//         }
//     }
// )



export const paint = () => {
    let html = `<select id="paint">
    <option value="0">Select a paint color...</option>`

    // This is how you have been converting objects to <li> elements
    const paintItems = paints.map(paints => {
        return `<option value="${paints.id}">${paints.name}</option>`
    })

    html += paintItems.join("")
    html += "</select>"
    return html
}

