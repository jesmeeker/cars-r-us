import { getOrders, getPaintColors, getBodyStyle, getInteriors, getTechnology, getWheels } from "./database.js"

// const order = addCustomOrder()


export const buildOrderListItem = (order) => {
    const paints = getPaintColors()
    const interiors = getInteriors()
    const technologies = getTechnology()
    const wheels = getWheels()
    const bodyStyles = getBodyStyle()

    // Remember that the function you pass to find() must return true/false
    const foundPaint = paints.find(
        (paint) => {
        return paint.id === order.paintColorId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
        return interior.id === order.interiorId
        }
    )

    const foundTech = technologies.find(
        (technology) => {
        return technology.id === order.technologyId
        }
    )

    const foundWheel = wheels.find(
        (wheel) => {
        return wheel.id === order.wheelId
        }
    )

    const foundBodyStyle = bodyStyles.find(
        (bodyStyle) => {
            return bodyStyle.id === order.bodyStyleId
        }
    )
        
    const totalCost = (foundPaint.price + foundInterior.price + foundTech.price + foundWheel.price) * foundBodyStyle.multiplier

            const costString = totalCost.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
    
    return `<li>
        Order #-${order.id}: ${foundPaint.name} ${foundBodyStyle.name} with ${foundWheel.name} wheels, ${foundInterior.name} interior, and the ${foundTech.name} for a total cost of ${costString}.
    </li>`

    // return `<li>
    //     Order #${order.id} was placed on ${order.timestamp}
    // </li>`
}

export const Orders = () => {
    const orders = getOrders()
    
    document.addEventListener("click", event => {
        getOrders()})

        let html = "<ul>"
        
        const listItems = orders.map(buildOrderListItem)
        
        html += listItems.join("")
        html += "</ul>"
        
        return html
}





