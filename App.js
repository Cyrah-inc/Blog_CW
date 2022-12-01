import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BaseCode from "./src/screens/BaseCode";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/Context/BlogContext";
import IndexHeader from "./src/headers/IndexHeader";
import CreateScreen from "./src/screens/CreateScreen";
import EditHeader from "./src/headers/EditHeader";
import ShowScreen from "./src/screens/ShowScreen";
import EditScreen from "./src/screens/EditScreen.js";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName="Index">
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation }) => ({
            headerRight: () => <IndexHeader navigation={navigation} />,
          })}
        />
        <Stack.Screen name="BaseCode" component={BaseCode} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({ navigation, route }) => ({
            headerRight: () => <EditHeader navigation={navigation} route ={route}/>,
          })}
        />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//Context wraps everything. thus you wra[p the app.js inside it
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};




