import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PillboxScreen from './screens/PillboxScreen';
import JournalScreen from './screens/JournalScreen';
import SettingsScreen from './screens/SettingsScreen';
import HelpScreen from './screens/HelpScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="My Pillbox" 
          component={PillboxScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="medicine-box" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Journal" component={JournalScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Help" component={HelpScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App; 