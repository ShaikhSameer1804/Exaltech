export const CourseReducer = (
  state = [
    {
      courseImg:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fhtml-logo&psig=AOvVaw14cNNKgM8COPtrsrArk5O7&ust=1671095114395000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCQqcfg-PsCFQAAAAAdAAAAABAD",
      courseTitle: "HTML",
      courseDesc: "Hyper Text Markup Language",
    },
  ],
  kuchbhi
) => {
  if (kuchbhi.type === "ADD_COURSES") {
    return [...state, kuchbhi.meriMarzi];
  } else return state;
};
