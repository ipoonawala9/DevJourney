import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../constants/colors';
import typography from '../constants/typography';
import spacing from '../constants/spacing';

type CertificationCardProps = {
  title: string;
  issuer: string;
  year: string;
  description: string;
};

function CertificationCard({
  title,
  issuer,
  year,
  description,
}: CertificationCardProps): React.JSX.Element {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.badge}>CERTIFICATE</Text>
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.issuer}>{issuer}</Text>

      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  year: {
    fontSize: typography.caption,
    fontWeight: '700',
    color: colors.primary,
  },

  badge: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    color: colors.textMuted,
  },

  title: {
    marginTop: spacing.md,
    fontSize: typography.heading,
    fontWeight: '700',
    color: colors.textPrimary,
  },

  issuer: {
    marginTop: spacing.xs,
    fontSize: typography.body,
    fontWeight: '600',
    color: colors.primaryLight,
  },

  description: {
    marginTop: spacing.sm,
    fontSize: typography.body,
    lineHeight: 22,
    color: colors.textSecondary,
  },
});

export default CertificationCard;