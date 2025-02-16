import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { COLORS } from '../theme/theme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'create') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        headerShown: false,
      })}>
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Home'
        }}
      />
      <Tabs.Screen 
        name="create" 
        options={{
          title: 'Create Issue'
        }}
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          title: 'Profile'
        }}
      />
    </Tabs>
  );
}
