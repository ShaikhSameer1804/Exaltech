export const ecommerceReducer = (state = { allProducts: [], cart: [], selectedItem: {} },
    action
) => {
    if (action.type === "ALL_PRODUCTS") {
        return { ...state, allProducts: action.data };
    }
    if (action.type === "ADD_TO_CART") {
        return { ...state, cart: [...state.cart, action.data] };
    }
    if (action.type === "SELECTED_ITEM") {
        return { ...state, selectedItem: action.data };
    }
    return state;
}
