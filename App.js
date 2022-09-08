import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen';
import DashboardScreen from './screens/DashboardScreen/DashboardScreen';
import MensApparel from './screens/ProductsScreen/MensApparel';



export default function App() {
const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{headerShown: false}}/>
            <Stack.Screen name="MensApparel" component={MensApparel}  options={{title: "Mens Products"}}/>
            <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{title: "Dashboard"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
