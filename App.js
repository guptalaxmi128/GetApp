import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import Main from "./screens/Main";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import GetOtp from "./components/getotp/GetOtp";
import TabNavigator from "./navigation/TabNavigator";
import AllCourses from "./components/AllCourses";
import Notification from "./components/notification/Notification";
import Account from "./components/accountInfo/Account";
import EditProfile from "./components/editProfile/EditProfile";
import HelpCenter from "./components/helpCenter/HelpCenter";
import Wallet from "./components/wallet/Wallet";

const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="GetOtp"
          component={GetOtp}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="AllCourses"
          component={AllCourses}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="HelpCenter"
          component={HelpCenter}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Wallet"
          component={Wallet}
          options={{ headerShown: false }}
        />
        </Stack.Navigator>
        </NavigationContainer>
  );
}


