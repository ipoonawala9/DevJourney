import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import colors from '../constants/colors';
import typography from '../constants/typography';
import spacing from '../constants/spacing';

import {JourneyItem as JourneyItemType} from '../data/journey';

type TimelineItemProps = {
  item: JourneyItemType;
  isLast: boolean;
};

function TimelineItem({
  item,
  isLast,
}: TimelineItemProps): React.JSX.Element {
  return (
    <View style={styles.container}>

      <View style={styles.timeline}>

        <View style={styles.dot} />

        {!isLast && (
          <View style={styles.line} />
        )}

      </View>

      <View style={styles.content}>

        <Text style={styles.year}>
          {item.year}
        </Text>

        <Text style={styles.title}>
          {item.title}
        </Text>

        <Text style={styles.description}>
          {item.description}
        </Text>

        <Text style={styles.technologies}>
          {item.technologies.join('  ·  ')}
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  timeline: {
    width: 24,
    alignItems: 'center',
  },

  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: colors.textPrimary,
    marginTop: 7,
  },

  line: {
    width: 1,
    flex: 1,
    backgroundColor: colors.border,
    marginTop: spacing.sm,
  },

  content: {
    flex: 1,
    paddingLeft: spacing.lg,
    paddingBottom: spacing.huge,
  },

  year: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.8,
    color: colors.textMuted,
  },

  title: {
    marginTop: spacing.sm,
    fontSize: 27,
    lineHeight: 33,
    fontWeight: '600',
    letterSpacing: -0.6,
    color: colors.textPrimary,
  },

  description: {
    marginTop: spacing.md,
    fontSize: typography.body,
    lineHeight: 24,
    color: colors.textSecondary,
  },

  technologies: {
    marginTop: spacing.lg,
    fontSize: typography.small,
    lineHeight: 19,
    color: colors.textMuted,
  },
});

export default TimelineItem;