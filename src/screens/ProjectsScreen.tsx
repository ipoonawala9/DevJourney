import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import {useNavigation} from '@react-navigation/native';

import colors from '../constants/colors';
import typography from '../constants/typography';
import spacing from '../constants/spacing';

import projects from '../data/projects';

import {
  ProjectsStackParamList,
} from '../navigation/ProjectsStackNavigator';

function ProjectsScreen(): React.JSX.Element {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<ProjectsStackParamList>
    >();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.label}>
          WORK
        </Text>

        <Text style={styles.count}>
          {String(projects.length).padStart(2, '0')}
        </Text>
      </View>

      <Text style={styles.title}>
        Things I've built,{'\n'}
        explored & shipped.
      </Text>

      <Text style={styles.subtitle}>
        A collection of applications, experiments
        and projects from my development journey.
      </Text>

      {/* Projects */}
      <View style={styles.projects}>
        {projects.map((project, index) => (
          <TouchableOpacity
            key={project.id}
            style={styles.project}
            activeOpacity={0.65}
            onPress={() =>
              navigation.navigate('ProjectDetails', {
                projectId: project.id,
              })
            }>

            <View style={styles.projectMeta}>
              <Text style={styles.number}>
                {String(index + 1).padStart(2, '0')}
              </Text>

              <Text style={styles.category}>
                {project.category.toUpperCase()}
              </Text>

              <Text style={styles.status}>
                {project.status}
              </Text>
            </View>

            <View style={styles.titleRow}>
              <Text style={styles.projectTitle}>
                {project.title}
              </Text>

              <View style={styles.arrowContainer}>
                <Text style={styles.arrow}>
                  ↗
                </Text>
              </View>
            </View>

            <Text style={styles.description}>
              {project.description}
            </Text>

            <Text style={styles.technologies}>
              {project.technologies.join('  ·  ')}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom statement */}
      <View style={styles.footer}>
        <Text style={styles.footerLabel}>
          MORE TO COME
        </Text>

        <Text style={styles.footerText}>
          The journey is still being built.
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

  title: {
    marginTop: spacing.xl,
    fontSize: 38,
    lineHeight: 42,
    fontWeight: '700',
    letterSpacing: -1.3,
    color: colors.textPrimary,
  },

  subtitle: {
    marginTop: spacing.lg,
    maxWidth: 340,
    fontSize: typography.body,
    lineHeight: 24,
    color: colors.textSecondary,
  },

  projects: {
    marginTop: spacing.huge,
  },

  project: {
    paddingVertical: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  projectMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  number: {
    width: 34,
    fontSize: typography.small,
    color: colors.textMuted,
  },

  category: {
    flex: 1,
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: colors.textMuted,
  },

  status: {
    fontSize: typography.small,
    color: colors.success,
  },

  titleRow: {
    marginTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  projectTitle: {
    flex: 1,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '600',
    letterSpacing: -0.7,
    color: colors.textPrimary,
  },

  arrowContainer: {
    width: 38,
    height: 38,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.md,
  },

  arrow: {
    fontSize: 18,
    color: colors.textPrimary,
  },

  description: {
    marginTop: spacing.md,
    maxWidth: 340,
    fontSize: typography.body,
    lineHeight: 23,
    color: colors.textSecondary,
  },

  technologies: {
    marginTop: spacing.lg,
    fontSize: typography.small,
    lineHeight: 18,
    color: colors.textMuted,
  },

  footer: {
    marginTop: spacing.xxl,
    paddingTop: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  footerLabel: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: colors.textMuted,
  },

  footerText: {
    marginTop: spacing.sm,
    fontSize: typography.body,
    color: colors.textSecondary,
  },
});

export default ProjectsScreen;