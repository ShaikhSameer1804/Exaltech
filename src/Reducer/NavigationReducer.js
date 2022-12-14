export const NavigationReducer = (
  state = [
    { name: "Facebook", link: "https://www.facebook.com/", target: "_blank" },
  ],
  action
) => {
  if (action.type === "ADD_LINK") {
    return [...state, action.data];
  } else return state;
};
