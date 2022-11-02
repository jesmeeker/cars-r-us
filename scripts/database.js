/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    paintColor: [
        { id: 1, name: "Silver", price: 100},
        { id: 2, name: "Midnight Blue", price: 500},
        { id: 3, name: "Firebrick Red", price: 500},
        { id: 4, name: "Spring Green", price: 1000},
    ],
    interior: [
        { id: 1, name: "Beige Fabric", price: 100},
        { id: 2, name: "Charcoal Fabric", price: 400},
        { id: 3, name: "White Leather", price: 1500},
        { id: 4, name: "Black Leather", price: 1500},
    ],
    technology: [
        { id: 1, name: "Basic Package", description: "basic sound system" , price: 0},
        { id: 2, name: "Navigation Package", description: "includes integrated navigation controls" , price: 1495},
        { id: 3, name: "Visibility Package", description: "includes side and rear cameras" , price: 1995},
        { id: 4, name: "Ultra Package", description: "includes navigation and visibility packages" , price: 3490},
    ],
    wheels: [
        { id: 1, name: "17-inch Pair Radial", price: 0},        
        { id: 2, name: "17-inch Pair Radial Black", price: 500},
        { id: 3, name: "18-inch Pair Spoke Silver", price: 995},
        { id: 4, name: "18-inch Pair Spoke Black", price: 1495},
    ],
    bodyStyle: [
        {id: 1, name: "Car", multiplier: 1},
        {id: 2, name: "SUV", multiplier: 1.5},
        {id: 3, name: "Truck", multiplier: 2.25}
    ],
    customOrders: [
        {id: 1, paintColorId: 2, interiorId: 4, technologyId: 2, wheelId: 4, bodyStyleId: 2, timestamp: 1614659931693}        
    ], 
    orderBuilder: [
        {

        }
    ]
}



export const getPaintColors = () => {
    return database.paintColor.map(paintColor => ({...paintColor}))
}

export const getInteriors = () => {
    return database.interior.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}

export const getBodyStyle = () => {
    return database.bodyStyle.map(bodyStyle => ({...bodyStyle}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrders => ({...customOrders}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const setBodyStyle = (id) => {
    database.orderBuilder.bodyStyleId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
