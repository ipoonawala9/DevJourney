import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import colors from '../constants/colors';
import typography from '../constants/typography';
import spacing from '../constants/spacing';

import projects from '../data/projects';
import {RootTabParamList} from '../navigation/types';

function HomeScreen(): React.JSX.Element {
  const navigation =
    useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  const featuredProjects = projects.slice(0, 3);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.brand}>DEVJOURNEY</Text>

        <Text style={styles.year}>2026</Text>
      </View>

      {/* Hero */}
      <View style={styles.hero}>
        <View style={styles.heroTop}>
          <View style={styles.heroCopy}>
            <Text style={styles.eyebrow}>
              FULL STACK DEVELOPER
            </Text>

            <Text style={styles.name}>
              Ibrahim{'\n'}Poonawala
            </Text>
          </View>

          <Image
            source={require('../assets/profile.jpeg')}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.intro}>
          Building useful digital products across
          web and mobile while learning, experimenting
          and growing.
        </Text>

        <TouchableOpacity
          style={styles.exploreButton}
          activeOpacity={0.65}
          onPress={() => navigation.navigate('Projects')}>

          <Text style={styles.exploreText}>
            EXPLORE MY WORK
          </Text>

          <Text style={styles.exploreArrow}>
            ↗
          </Text>
        </TouchableOpacity>
      </View>

      {/* Status */}
      <View style={styles.statusSection}>
        <View style={styles.statusDot} />

        <Text style={styles.statusText}>
          CURRENTLY BUILDING WITH
        </Text>

        <Text style={styles.statusTechnologies}>
          Java · Spring Boot · React Native · PostgreSQL
        </Text>
      </View>

      {/* Selected work */}
      <View style={styles.workSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionLabel}>
            SELECTED WORK
          </Text>

          <Text style={styles.sectionCount}>
            {String(featuredProjects.length).padStart(2, '0')}
          </Text>
        </View>

        {featuredProjects.map((project, index) => (
          <TouchableOpacity
            key={project.id}
            style={styles.projectRow}
            activeOpacity={0.65}
            onPress={() => navigation.navigate('Projects')}>

            <Text style={styles.projectNumber}>
              {String(index + 1).padStart(2, '0')}
            </Text>

            <View style={styles.projectInfo}>
              <Text style={styles.projectTitle}>
                {project.title}
              </Text>

              <Text style={styles.projectDescription}>
                {project.description}
              </Text>

              <Text style={styles.projectTech}>
                {project.technologies.join(' · ')}
              </Text>
            </View>

            <Text style={styles.projectArrow}>
              ↗
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Closing statement */}
      <View style={styles.closing}>
        <Text style={styles.closingText}>
          Still learning.{'\n'}
          Still building.
        </Text>

        <TouchableOpacity
          activeOpacity={0.65}
          onPress={() => navigation.navigate('Journey')}>

          <Text style={styles.journeyLink}>
            FOLLOW THE JOURNEY  ↗
          </Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  brand: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 3,
    color: colors.textPrimary,
  },

  year: {
    fontSize: typography.small,
    color: colors.textMuted,
    letterSpacing: 1,
  },

  hero: {
    marginTop: spacing.huge,
  },

  heroTop: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  heroCopy: {
    flex: 1,
  },

  eyebrow: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.8,
    color: colors.textMuted,
    marginBottom: spacing.md,
  },

  name: {
    fontSize: 46,
    lineHeight: 49,
    fontWeight: '700',
    letterSpacing: -1.8,
    color: colors.textPrimary,
  },

  profileImage: {
    width: 104,
    height: 132,
    borderRadius: 52,
    marginLeft: spacing.md,
  },

  intro: {
    marginTop: spacing.xl,
    maxWidth: 340,
    fontSize: 17,
    lineHeight: 27,
    color: colors.textSecondary,
  },

  exploreButton: {
    marginTop: spacing.xl,
    height: 56,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  exploreText: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: colors.textPrimary,
  },

  exploreArrow: {
    fontSize: 20,
    color: colors.textPrimary,
  },

  statusSection: {
    marginTop: spacing.huge,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.success,
    marginBottom: spacing.sm,
  },

  statusText: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: colors.textMuted,
  },

  statusTechnologies: {
    marginTop: spacing.sm,
    fontSize: typography.body,
    lineHeight: 23,
    color: colors.textPrimary,
  },

  workSection: {
    marginTop: spacing.huge,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  sectionLabel: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.8,
    color: colors.textMuted,
  },

  sectionCount: {
    fontSize: typography.small,
    color: colors.textMuted,
  },

  projectRow: {
    minHeight: 142,
    paddingVertical: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  projectNumber: {
    width: 34,
    paddingTop: 3,
    fontSize: typography.small,
    color: colors.textMuted,
  },

  projectInfo: {
    flex: 1,
    paddingRight: spacing.md,
  },

  projectTitle: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: -0.4,
    color: colors.textPrimary,
  },

  projectDescription: {
    marginTop: spacing.xs,
    fontSize: typography.body,
    lineHeight: 21,
    color: colors.textSecondary,
  },

  projectTech: {
    marginTop: spacing.md,
    fontSize: typography.small,
    lineHeight: 18,
    color: colors.textMuted,
  },

  projectArrow: {
    fontSize: 20,
    color: colors.textPrimary,
    paddingTop: 1,
  },

  closing: {
    marginTop: spacing.huge,
    paddingTop: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  closingText: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '600',
    letterSpacing: -0.8,
    color: colors.textPrimary,
  },

  journeyLink: {
    marginTop: spacing.lg,
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: colors.textSecondary,
  },
});

export default HomeScreen;