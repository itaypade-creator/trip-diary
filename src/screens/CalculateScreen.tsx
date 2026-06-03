import React from 'react';
import ScreenPlaceholder from '@/components/common/ScreenPlaceholder';
import { strings } from '@/i18n';

// CLAUDE.md 7.4 — the free heart of the app. Inputs, outputs, warnings.
export default function CalculateScreen() {
  return <ScreenPlaceholder title={strings.screens.calculate} />;
}
