import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../constants/colors';
import typography from '../constants/typography';
import spacing from '../constants/spacing';

type SkillSectionProps = {
  title: string;
  skills: string[];
};

function SkillSection({
  title,
  skills,
}: SkillSectionProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>

      <View style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <View key={skill} style={styles.skillRow}>
            <Text style={styles.index}>
              {String(index + 1).padStart(2, '0')}
            </Text>

            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
  },

  title: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.8,
    color: colors.textMuted,
    marginBottom: spacing.md,
  },

  skillsContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 46,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  index: {
    width: 38,
    fontSize: typography.small,
    color: colors.textMuted,
    fontVariant: ['tabular-nums'],
  },

  skillText: {
    fontSize: typography.body,
    fontWeight: '500',
    color: colors.textPrimary,
  },
});

export default SkillSection;