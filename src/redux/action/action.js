// For add Item to Cart

export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

// For delete Item from Cart

export const delCart = (product) => {
    return{
        type: "DELITEM",
        payload: product
    }
}