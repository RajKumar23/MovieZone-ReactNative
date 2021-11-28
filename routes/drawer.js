import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";

const RootNavigationDrawer = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    About: {
        screen: AboutStack
    }
})

export default createAppContainer(RootNavigationDrawer)