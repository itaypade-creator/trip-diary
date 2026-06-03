import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import type { TabParamList } from './types';
import HomeScreen from '@/screens/HomeScreen';
import CalculateScreen from '@/screens/CalculateScreen';
import LearnScreen from '@/screens/LearnScreen';
import MoreScreen from '@/screens/MoreScreen';
import { strings } from '@/i18n';

const Tab = createBottomTabNavigator<TabParamList>();

/**
 * Bottom tab bar: בית · חישוב · לימוד · עוד (CLAUDE.md section 7.3).
 * Skeleton — icons and premium gating to be added.
 */
export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: strings.tabs.home }}
      />
      <Tab.Screen
        name="Calculate"
        component={CalculateScreen}
        options={{ title: strings.tabs.calculate }}
      />
      <Tab.Screen
        name="Learn"
        component={LearnScreen}
        options={{ title: strings.tabs.learn }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{ title: strings.tabs.more }}
      />
    </Tab.Navigator>
  );
}
