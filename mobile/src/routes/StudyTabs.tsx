import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeacheList from "../pages/TeacheList";
import Favorites from "../pages/Favorites";
import { Ionicons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: { elevation: 0, shadowOpacity: 0, height: 64 },
        tabStyle: {
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#FAFAFC",
        activeBackgroundColor: "#EBEBF5",
        inactiveTintColor: "#C1BCCC",
        activeTintColor: "#32264D",
      }}
    >
      <Screen
        name="TeacheList"
        component={TeacheList}
        options={{
          tabBarLabel: "Proffis",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-easel"
                size={size}
                color={focused ? "#8257E5" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-heart"
                size={size}
                color={focused ? "#8257E5" : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;
