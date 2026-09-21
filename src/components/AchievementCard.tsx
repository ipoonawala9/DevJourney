import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../constants/colors';
import typography from '../constants/typography';
import spacing from '../constants/spacing';

type AchievementCardProps = {
  title: string;
  description: string;
  year: string;
};

function AchievementCard({
  title,
  description,
  year,
}: AchievementCardProps): React.JSX.Element {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <Text style={styles.iconText}>★</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.year}>{year}</Text>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },

  icon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },

  iconText: {
    fontSize: 18,
    color: colors.primary,
  },

  content: {
    flex: 1,
  },

  year: {
    fontSize: typography.caption,
    fontWeight: '700',
    color: colors.primary,
  },

  title: {
    marginTop: spacing.xs,
    fontSize: typography.body,
    fontWeight: '700',
    color: colors.textPrimary,
  },

  description: {
    marginTop: spacing.xs,
    fontSize: typography.caption,
    lineHeight: 20,
    color: colors.textSecondary,
  },
});

export default AchievementCard;