export const CarouselReducer = (
  state = [
    {
      carouselImage: "logo192.png",
      carouselTitle: "First Slide",
      carouselDesc: "this is first slide",
    },
    {
      carouselImage: "logo192.png",
      carouselTitle: "First Slide",
      carouselDesc: "this is first slide",
    },
  ],
  action
) => {
  if (action.type === "ADD_CAROUSEL") {
    return [...state, action.payload];
  } else return state;
};
