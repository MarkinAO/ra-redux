import { CHANGE_PRICE } from "./actions"

const changePrice = (price) => {
    return {
        type: CHANGE_PRICE,
        payload: price
    }
}

export default changePrice