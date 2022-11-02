import { getBodyStyle, setBodyStyle } from "./database.js"

const bodyStyle = getBodyStyle()

document.addEventListener(
    "change",
    (event) => {
        
        if (event.target.name === "bodystyle") {
            setBodyStyle(parseInt(event.target.value))
        }
    }
)

export const BodyStyle = () => {
    let html = `<ul>`

    // This is how you have been converting objects to <li> elements
    const settingItems = bodyStyle.map(bodyStyle => {
        return `<li class="setting">
            <input type="radio" name="bodystyle" value="${bodyStyle.id}"/> ${bodyStyle.name}
        </li>`
    })

    html += settingItems.join("")
    html += "</ul>"
    return html
}
