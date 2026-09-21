import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import colors from '../constants/colors';
import typography from '../constants/typography';
import spacing from '../constants/spacing';

import {Project} from '../data/projects';

type ProjectCardProps = {
  project: Project;
  onPress: () => void;
};

function ProjectCard({
  project,
  onPress,
}: ProjectCardProps): React.JSX.Element {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.65}>
      
      <View style={styles.topRow}>
        <Text style={styles.category}>
          {project.category.toUpperCase()}
        </Text>

        <Text style={styles.number}>
          {project.status}
        </Text>
      </View>

      <View style={styles.titleRow}>
        <Text style={styles.title}>
          {project.title}
        </Text>

        <View style={styles.arrowCircle}>
          <Text style={styles.arrow}>↗</Text>
        </View>
      </View>

      <Text style={styles.description}>
        {project.description}
      </Text>

      <View style={styles.technologyContainer}>
        {project.technologies.map(technology => (
          <Text
            key={technology}
            style={styles.technology}>
            {technology}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  category: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: colors.textMuted,
  },

  number: {
    fontSize: typography.small,
    color: colors.textMuted,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },

  title: {
    flex: 1,
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '600',
    letterSpacing: -0.5,
    color: colors.textPrimary,
    paddingRight: spacing.md,
  },

  arrowCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  arrow: {
    fontSize: 18,
    color: colors.textPrimary,
  },

  description: {
    marginTop: spacing.md,
    fontSize: typography.body,
    lineHeight: 23,
    color: colors.textSecondary,
  },

  technologyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.lg,
    gap: spacing.md,
  },

  technology: {
    fontSize: typography.caption,
    color: colors.textMuted,
  },
});

export default ProjectCard;