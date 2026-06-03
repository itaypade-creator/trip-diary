import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Warning } from '@/types';
import { colors, fontSizes, spacing, radius } from '@/theme';

type Props = {
  warning: Warning;
  isPremium: boolean;
  onWhyPress?: () => void; // free tier: opens Paywall
};

/**
 * Renders a single warning. CLAUDE.md section 9.
 * Free: short text + "למה?" (opens Paywall). Premium: full explanation.
 *
 * SKELETON: minimal layout, "למה?" wiring TBD.
 */
export default function WarningCard({ warning, isPremium }: Props) {
  const accent =
    warning.level === 'red' ? colors.warningRed : colors.warningYellow;

  return (
    <View style={[styles.card, { borderColor: accent }]}>
      <Text style={[styles.short, { color: accent }]}>{warning.short}</Text>
      {isPremium && warning.full ? (
        <Text style={styles.full}>{warning.full}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: radius.md,
    padding: spacing.md,
    marginVertical: spacing.xs,
    backgroundColor: colors.card,
  },
  short: {
    fontSize: fontSizes.md,
    fontWeight: '600',
  },
  full: {
    color: colors.textMuted,
    fontSize: fontSizes.sm,
    marginTop: spacing.xs,
  },
});
