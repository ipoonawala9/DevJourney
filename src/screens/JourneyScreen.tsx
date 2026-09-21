import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TimelineItem from '../components/TimelineItem';

import colors from '../constants/colors';
import typography from '../constants/typography';
import spacing from '../constants/spacing';

import journey from '../data/journey';

function JourneyScreen(): React.JSX.Element {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>

      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.label}>
          JOURNEY
        </Text>

        <Text style={styles.count}>
          {String(journey.length).padStart(2, '0')}
        </Text>
      </View>

      {/* Introduction */}

      <View style={styles.introduction}>

        <Text style={styles.title}>
          Learning by{'\n'}
          building.
        </Text>

        <Text style={styles.subtitle}>
          From learning the fundamentals to building
          applications and understanding how software
          works beyond the screen.
        </Text>

      </View>

      {/* Timeline */}

      <View style={styles.timeline}>

        {journey.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={index === journey.length - 1}
          />
        ))}

      </View>

      {/* Current */}

      <View style={styles.current}>

        <View style={styles.currentHeader}>

          <View style={styles.currentIndicator} />

          <Text style={styles.currentLabel}>
            NOW
          </Text>

        </View>

        <Text style={styles.currentTitle}>
  Building production-ready
  applications.
</Text>

<Text style={styles.currentDescription}>
  Currently exploring cross-platform mobile
  development, immersive applications,
  backend systems and deployment workflows.
</Text>

        <View style={styles.currentDivider} />

        <Text style={styles.currentStack}>
          JAVA  ·  SPRING BOOT  ·  REACT NATIVE
          {'\n'}
          POSTGRESQL  ·  DOCKER  ·  GIT
        </Text>

      </View>

      {/* Closing */}

      <View style={styles.closing}>

        <Text style={styles.closingTitle}>
          Still learning.
        </Text>

        <Text style={styles.closingTitle}>
          Still building.
        </Text>

        <Text style={styles.closingCaption}>
          The journey continues.
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: 110,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  label: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 2,
    color: colors.textMuted,
  },

  count: {
    fontSize: typography.small,
    color: colors.textMuted,
  },

  introduction: {
    marginTop: spacing.xl,
  },

  title: {
    fontSize: 42,
    lineHeight: 45,
    fontWeight: '700',
    letterSpacing: -1.5,
    color: colors.textPrimary,
  },

  subtitle: {
    marginTop: spacing.lg,
    maxWidth: 340,
    fontSize: typography.body,
    lineHeight: 24,
    color: colors.textSecondary,
  },

  timeline: {
    marginTop: spacing.huge,
  },

  current: {
    marginTop: spacing.md,
    paddingTop: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  currentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  currentIndicator: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.success,
    marginRight: spacing.sm,
  },

  currentLabel: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.8,
    color: colors.success,
  },

  currentTitle: {
    marginTop: spacing.lg,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600',
    letterSpacing: -0.6,
    color: colors.textPrimary,
  },

  currentDescription: {
    marginTop: spacing.md,
    fontSize: typography.body,
    lineHeight: 24,
    color: colors.textSecondary,
  },

  currentDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginTop: spacing.xl,
  },

  currentStack: {
    marginTop: spacing.md,
    fontSize: typography.small,
    lineHeight: 21,
    letterSpacing: 0.7,
    color: colors.textMuted,
  },

  closing: {
    marginTop: spacing.huge,
    paddingTop: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  closingTitle: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '600',
    letterSpacing: -0.7,
    color: colors.textPrimary,
  },

  closingCaption: {
    marginTop: spacing.lg,
    fontSize: typography.small,
    color: colors.textMuted,
  },
});

export default JourneyScreen;