import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./src/components/Ui/IconButton";

import AllMovements from "./src/screens/AllMovements";
import RecentMovements from "./src/screens/RecentMovements";
import ManageMovement from "./src/screens/ManageMovement";
import Home from "./src/screens/Home";

import MovementsContextProvider from "./src/store/movements-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

// #DECDC5 #F0E9E3 #C8B0A4 #BB8D76 #7D5846

const MovementsOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "#7D5846" },
        headerTintColor: "#F0E9E3",
        tabBarStyle: { backgroundColor: "#7D5846" },
        tabBarActiveTintColor: "#DECDC5",
        headerRight: ({ tintColor }) => (
          <IconButton
            name="add"
            size={26}
            color={tintColor}
            onPress={() => navigation.navigate("Manage")}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: "Today",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Recent"
        component={RecentMovements}
        options={{
          title: "This week Tables",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="All"
        component={AllMovements}
        options={{
          title: "All Tables",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <MovementsContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#7D5846" },
              headerTintColor: "#F0E9E3",
              tabBarStyle: { backgroundColor: "#F0E9E3" },
            }}
          >
            <Stack.Screen
              name="Overview"
              component={MovementsOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Manage" component={ManageMovement} />
          </Stack.Navigator>
        </NavigationContainer>
      </MovementsContextProvider>
    </>
  );
}
