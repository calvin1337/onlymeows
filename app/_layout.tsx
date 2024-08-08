
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from './(tabs)';
import Settings from './(tabs)/settings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

// https://reactnavigation.org/docs/tab-based-navigation

export default function RootLayout() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="(tabs)/index"
        options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} /> // Custom icon
            ),
            tabBarShowLabel: false
          }}
        component={Index} />

        <Tab.Screen 
        name="(tabs)/settings" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} /> // Custom icon
          ),
          tabBarShowLabel: false
        }}
        component={Settings} />
      </Tab.Navigator>
  );
}


