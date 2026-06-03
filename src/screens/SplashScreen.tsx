import React from 'react';
import ScreenPlaceholder from '@/components/common/ScreenPlaceholder';
import { strings } from '@/i18n';

// CLAUDE.md 7.1 — logo, auto-advance after 2s + tap to skip.
export default function SplashScreen() {
  return <ScreenPlaceholder title={strings.brand.name} note={strings.brand.slogan} />;
}
