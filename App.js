import Main from './src/components/Main.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CurrencyDetail from './src/components/CurrencyDetail.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Currencies" component={Main} />
        <Stack.Screen name="Currency Detail" component={CurrencyDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
