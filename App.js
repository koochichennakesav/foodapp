import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import ResultShowScreen from "./src/screen/ResultShowScreen";
import SearchScreen from "./src/screen/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Photos: ResultShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Browser Search",
    }
  }
);

export default createAppContainer(navigator);