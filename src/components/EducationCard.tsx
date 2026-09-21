import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../constants/colors';
import typography from '../constants/typography';
import spacing from '../constants/spacing';

type EducationCardProps = {
  degree: string;
  institution: string;
  duration: string;
  description: string;
};

function EducationCard({
  degree,
  institution,
  duration,
  description,
}: EducationCardProps): React.JSX.Element {
  return (
    <View style={styles.card}>
      <Text style={styles.duration}>
        {duration}
      </Text>

      <Text style={styles.degree}>
        {degree}
      </Text>

      <Text style={styles.institution}>
        {institution}
      </Text>

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

  duration: {
    fontSize: typography.caption,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 1,
  },

  degree: {
    marginTop: spacing.sm,
    fontSize: typography.heading,
    fontWeight: '700',
    color: colors.textPrimary,
  },

  institution: {
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

export default EducationCard;