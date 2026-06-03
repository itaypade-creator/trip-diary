import React from 'react';
import ScreenPlaceholder from '@/components/common/ScreenPlaceholder';
import { strings } from '@/i18n';

// CLAUDE.md 7.7 — Premium. Flat list of 5 order types with explanations.
export default function OrderSettingsScreen() {
  return <ScreenPlaceholder title={strings.screens.orderSettings} note="Premium" />;
}
