import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from './types';
import TabNavigator from './TabNavigator';
import SplashScreen from '@/screens/SplashScreen';
import IntroScreen from '@/screens/IntroScreen';
import PreTradeSummaryScreen from '@/screens/PreTradeSummaryScreen';
import SettingsScreen from '@/screens/SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Root stack: Splash -> Intro (first run) -> Tabs.
 * Pre-Trade Summary and Settings are pushed on top of the tabs.
 * Skeleton — gating (first-run, premium) not implemented yet.
 */
export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="PreTradeSummary" component={PreTradeSummaryScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
