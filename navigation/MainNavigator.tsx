import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//COMPONENTES
import HomeScreens from "../Screens/HomeScreens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "../Screens/Screen1";
import Screen2 from "../Screens/Screen2";
import Screens3 from "../Screens/Screens3";
import Screens4 from "../Screens/Screens4";



const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreens} />
            <Stack.Screen name="Tabs" component={MyTap} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTap() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Screen" component={Screen1} />
            <Tab.Screen name="Screen2" component={Screen2}/>
            <Tab.Screen name="Screens3" component={Screens3}/>
            <Tab.Screen name="Screens4" component={Screens4}/>
        </Tab.Navigator>
    );
}


export default function NavegadorPrincipal() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}