import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';


export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator,
        navigationOptions: {
            title: 'HOME ACTIVITY',
        },
        headerStyle: {
            background: "blue"
        }
}
},
{
    contentComponent: CustomSideBarMenu
},
{
    initialRouteName: "Home ",
}
)