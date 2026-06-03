import React from 'react';
import ScreenPlaceholder from '@/components/common/ScreenPlaceholder';
import { strings } from '@/i18n';

// CLAUDE.md 7.2 — first-run only. Disclaimer + המשך / דלג.
export default function IntroScreen() {
  return <ScreenPlaceholder title={strings.screens.intro} />;
}
