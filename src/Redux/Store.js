import { legacy_createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { FirstReducer } from "../Redux/FirstReducer";
import { FormOneReducer } from "../AllForms/AllReducers/FormOneReducer";
import { FormTwoReducer } from "../AllForms/AllReducers/FormTwoReducer";
import { FormThreeReducer } from "../AllForms/AllReducers/FormThreeReducer";
import { NavigationReducer } from "../Reducer/NavigationReducer";
import { CarouselReducer } from "../Reducer/CarouselReducer";
import { CourseReducer } from "../Reducer/CourseReducer";
import { FooterReducer } from "../Reducer/FooterReducer";

export const configureStore = () => {
  return legacy_createStore(
    combineReducers({
      FormOneReducer,
      FormTwoReducer,
      FormThreeReducer,
      NavigationReducer,
      CarouselReducer,
      CourseReducer,
      FooterReducer,
    }),
    composeWithDevTools()
  );
};
