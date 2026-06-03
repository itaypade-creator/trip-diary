import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { colors, fontSizes, spacing, radius } from '@/theme';

type Props = {
  visible: boolean;
  onClose: () => void;
};

/**
 * Paywall. CLAUDE.md section 8 — a bottom modal, NOT a full screen.
 * Opens on: locked Premium sections, "למה?" on a warning, Pre-Trade Summary.
 *
 * SKELETON: structure only. Feature list, price, and purchase flow TBD.
 */
export default function PaywallModal({ visible, onClose }: Props) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <Text style={styles.title}>פתח גישה מלאה ל־RiskMind</Text>
          {/* TODO: feature list (✓), one-time price, primary/secondary buttons, legal line */}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    backgroundColor: colors.card,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    padding: spacing.lg,
  },
  title: {
    color: colors.heading,
    fontSize: fontSizes.lg,
    fontWeight: '700',
    textAlign: 'center',
  },
});
