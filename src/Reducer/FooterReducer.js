export const FooterReducer = (
  state = [
    {
      fcardImage:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJava_%2528programming_language%2529&psig=AOvVaw21OVH7R0pIK4Cxoy9tPnN_&ust=1671103314801000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIi_-Y3_-PsCFQAAAAAdAAAAABAI",
      fcardTitle: "Java",
      fcardDesc:
        "Java is a programming language and computing platform first released by Sun Microsystems in 1995.",
    },
  ],
  action
) => {
  if (action.type === "ADD_FOOTER_CARD") {
    return [...state, action.paylaod];
  } else return state;
};
