import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import DailyPic from "./screens/DailyPic";
import SpaceCraft from "./screens/SpaceCraft";
import StarMap from "./screens/StarMap";

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Home"} screenOptions={{
          headerShown: false
        }} >
          <Stack.Screen name={"Home"} component={Home} />
          <Stack.Screen name={"DailyPic"} component={DailyPic} />
          <Stack.Screen name={"StarMap"} component={StarMap} />
          <Stack.Screen name={"SpaceCrafts"} component={SpaceCraft} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}