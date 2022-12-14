// const initialState = [
//     { name: "Sameer", add: "Nanded", profession: "Software Engineer" },
//     { name: "Sohel", add: "Mumbai", profession: "Sr. Software Engineer" },
//     { name: "Shaikh", add: "Hydrabad", profession: "Front-End Engineer" },
// ];

export const FirstReducer = (state = [], action) => {
    // console.log(action)
    if (action.type === "ADD_USER") {
        return [...state, action.payload];
    }
    else return state;
};