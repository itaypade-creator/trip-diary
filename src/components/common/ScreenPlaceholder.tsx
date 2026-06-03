import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fontSizes, spacing } from '@/theme';

type Props = {
  title: string;
  note?: string;
};

/**
 * Temporary placeholder used by skeleton screens so the navigation flow
 * is runnable before real UI exists. Replace per-screen as we build.
 */
export default function ScreenPlaceholder({ title, note }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {note ? <Text style={styles.note}>{note}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  title: {
    color: colors.heading,
    fontSize: fontSizes.xl,
    fontWeight: '700',
    textAlign: 'center',
  },
  note: {
    color: colors.textMuted,
    fontSize: fontSizes.sm,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
});
