
// import { DiamondSizes } from "./DiamondSizes.js"
// import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./orders.js"
import { interior } from "./interior.js"
import { wheel } from "./wheels.js"
import { tech } from "./technology.js"
import { paint } from "./paint.js"
import { addCustomOrder } from "./database.js"


document.addEventListener(
    "click",
    (event) => {

    if (event.target.id === "orderButton") {
        addCustomOrder()

        }
    }
)

export const CarsRUs = () => {

    return `
        <h1>Cars 'R Us</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paint Colors</h2>${paint()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>${interior()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>${tech()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>${wheel()}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>${Orders()}
        </article>
    `
}

