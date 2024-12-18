import "react-native-gesture-handler"; // Add this at the very top
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

// Import Screens
import HomeScreen from "./screens/HomeScreen";
import MarketScreen from "./screens/MarketScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProfileMenuScreen from "./screens/ProfileMenuScreen";
import EditProfileScreen from "./screens/EditProfileScreen"; // Import EditProfileScreen
import VerificationScreen from "./screens/VerificationScreen"; // Import VerificationScreen
import AgentAssistScreen from "./screens/AgentAssistScreen"; // Import the new AgentAssistScreen

// Initialize Navigators
const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

// Profile Stack Navigator
function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={{ headerShown: false }} // Hide the default header
      />
      <ProfileStack.Screen
        name="ProfileMenu"
        component={ProfileMenuScreen}
        options={{ title: "" }} // Set an empty string to remove the "Menu" title
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfileScreen} // Add Edit Profile Screen
        options={{ title: "Edit Profile", headerBackTitle: "Back" }} // Customize header
      />
      <ProfileStack.Screen
        name="Verification"
        component={VerificationScreen} // Add the Verification Screen
        options={{ title: "Verification", headerBackTitle: "Back" }} // Customize header
      />
      <ProfileStack.Screen
        name="AgentAssist" // Add the new Agent Assist Screen
        component={AgentAssistScreen}
        options={{ title: "Agent Assist Program", headerBackTitle: "Back" }}
      />
    </ProfileStack.Navigator>
  );
}

// Main App Function
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;

            if (route.name === "Home") {
              iconSource = focused
                ? require("./assets/images/home.png")
                : require("./assets/images/home1.png");
            } else if (route.name === "Marketplace") {
              iconSource = focused
                ? require("./assets/images/product.png")
                : require("./assets/images/product1.png");
            } else if (route.name === "Profile") {
              iconSource = focused
                ? require("./assets/images/profile.png")
                : require("./assets/images/profile1.png");
            }

            return (
              <Image
                source={iconSource}
                style={{
                  width: focused ? 30 : 25,
                  height: focused ? 30 : 25,
                  tintColor: focused ? "#34A853" : "#666",
                }}
              />
            );
          },
          tabBarActiveTintColor: "#34A853",
          tabBarInactiveTintColor: "#666",
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 55,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Marketplace"
          component={MarketScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackNavigator} // Use the stack navigator here
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
