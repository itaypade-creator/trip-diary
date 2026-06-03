import React from 'react';
import { I18nManager } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from '@/navigation/RootNavigator';

// RiskMind is a Hebrew-first, RTL app. Force RTL layout direction.
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

/**
 * App root.
 * Skeleton only — wires the navigator. No business logic here.
 */
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RootNavigator />
    </>
  );
}
