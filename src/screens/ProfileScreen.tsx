import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import colors from '../constants/colors';
import typography from '../constants/typography';
import spacing from '../constants/spacing';

import {profile} from '../data/profile';
import certifications from '../data/certifications';
import achievements from '../data/achievements';
import links from '../data/links';

import {ProfileStackParamList} from '../navigation/ProfileStackNavigator';

function ProfileScreen(): React.JSX.Element {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<ProfileStackParamList>
    >();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>

      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.headerLabel}>
          PROFILE
        </Text>

        <Text style={styles.headerNumber}>
          04
        </Text>
      </View>

      {/* Identity */}

      <View style={styles.identity}>

        <View style={styles.identityText}>
          <Text style={styles.name}>
            Ibrahim{'\n'}
            Poonawala
          </Text>

          <Text style={styles.role}>
            {profile.role}
          </Text>

          <Text style={styles.location}>
            {profile.location}
          </Text>
        </View>

        <Image
          source={require('../assets/profile.jpeg')}
          style={styles.profileImage}
          resizeMode="cover"
        />

      </View>

      {/* About */}

      <View style={styles.section}>

        <Text style={styles.sectionLabel}>
          ABOUT
        </Text>

        <Text style={styles.about}>
          {profile.about}
        </Text>

      </View>

      {/* Expertise */}

      <View style={styles.section}>

        <Text style={styles.sectionLabel}>
          EXPERTISE
        </Text>

        {profile.skills.map((category, index) => (
          <View
            key={category.title}
            style={styles.expertiseRow}>

            <Text style={styles.expertiseNumber}>
              {String(index + 1).padStart(2, '0')}
            </Text>

            <View style={styles.expertiseContent}>

              <Text style={styles.expertiseTitle}>
                {category.title.toUpperCase()}
              </Text>

              <Text style={styles.expertiseSkills}>
                {category.skills.join('  ·  ')}
              </Text>

            </View>

          </View>
        ))}

      </View>

      {/* Education */}

      <View style={styles.section}>

        <Text style={styles.sectionLabel}>
          EDUCATION
        </Text>

        {profile.education.map(item => (
          <View
            key={item.id}
            style={styles.education}>

            <Text style={styles.educationInstitution}>
              {item.institution}
            </Text>

            <Text style={styles.educationDegree}>
              {item.degree}
            </Text>

            <Text style={styles.educationDuration}>
              {item.duration}
            </Text>

            <Text style={styles.educationDescription}>
              {item.description}
            </Text>

          </View>
        ))}

      </View>

      {/* Languages */}

      <View style={styles.section}>

        <Text style={styles.sectionLabel}>
          LANGUAGES
        </Text>

        <Text style={styles.languages}>
          {profile.spokenLanguages.join('  ·  ')}
        </Text>

      </View>

      {/* Certifications */}

      <View style={styles.section}>

        <View style={styles.sectionHeadingRow}>
          <Text style={styles.sectionLabel}>
            CERTIFICATIONS
          </Text>

          <Text style={styles.sectionCount}>
            {String(certifications.length).padStart(2, '0')}
          </Text>
        </View>

        {certifications.map((certification, index) => (
          <View
            key={certification.id}
            style={styles.listRow}>

            <Text style={styles.listNumber}>
              {String(index + 1).padStart(2, '0')}
            </Text>

            <View style={styles.listContent}>

              <Text style={styles.listTitle}>
                {certification.title}
              </Text>

              <Text style={styles.listMeta}>
                {certification.issuer}
                {certification.year
                  ? `  ·  ${certification.year}`
                  : ''}
              </Text>

            </View>

          </View>
        ))}

      </View>

      {/* Achievements */}

      <View style={styles.section}>

        <View style={styles.sectionHeadingRow}>
          <Text style={styles.sectionLabel}>
            ACHIEVEMENTS
          </Text>

          <Text style={styles.sectionCount}>
            {String(achievements.length).padStart(2, '0')}
          </Text>
        </View>

        {achievements.map((achievement, index) => (
          <View
            key={achievement.id}
            style={styles.listRow}>

            <Text style={styles.listNumber}>
              {String(index + 1).padStart(2, '0')}
            </Text>

            <View style={styles.listContent}>

              <Text style={styles.listTitle}>
                {achievement.title}
              </Text>

              <Text style={styles.listMeta}>
                {achievement.description}
              </Text>

            </View>

          </View>
        ))}

      </View>

      {/* Connect */}

      <View style={styles.section}>

        <Text style={styles.sectionLabel}>
          CONNECT
        </Text>

        <TouchableOpacity
          style={styles.primaryAction}
          activeOpacity={0.65}
          onPress={() => navigation.navigate('Contact')}>

          <Text style={styles.primaryActionText}>
            GET IN TOUCH
          </Text>

          <Text style={styles.primaryActionArrow}>
            ↗
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
         style={styles.connectRow}
         activeOpacity={0.65}
         onPress={() => Linking.openURL(links.portfolio)}>

         <Text style={styles.connectTitle}>
           PORTFOLIO
         </Text>

         <Text style={styles.connectArrow}>
            ↗
         </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.connectRow}
          activeOpacity={0.65}
          onPress={() => Linking.openURL(links.github)}>

          <Text style={styles.connectTitle}>
            GITHUB
          </Text>

          <Text style={styles.connectArrow}>
            ↗
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.connectRow}
          activeOpacity={0.65}
          onPress={() => Linking.openURL(links.linkedin)}>

          <Text style={styles.connectTitle}>
            LINKEDIN
          </Text>

          <Text style={styles.connectArrow}>
            ↗
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.connectRow}
          activeOpacity={0.65}
          onPress={() => Linking.openURL(links.email)}>

          <Text style={styles.connectTitle}>
            EMAIL
          </Text>

          <Text style={styles.connectArrow}>
            ↗
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resumeAction}
          activeOpacity={0.65}
          onPress={() => navigation.navigate('Resume')}>

          <Text style={styles.resumeText}>
            VIEW RESUME
          </Text>

          <Text style={styles.resumeArrow}>
            ↗
          </Text>

        </TouchableOpacity>

      </View>

      {/* Footer */}

      <View style={styles.footer}>

        <Text style={styles.footerBrand}>
          DEVJOURNEY
        </Text>

        <Text style={styles.footerText}>
          Built with React Native · TypeScript
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

  headerLabel: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 2,
    color: colors.textMuted,
  },

  headerNumber: {
    fontSize: typography.small,
    color: colors.textMuted,
  },

  identity: {
    marginTop: spacing.huge,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  identityText: {
    flex: 1,
    paddingRight: spacing.md,
  },

  name: {
    fontSize: 42,
    lineHeight: 44,
    fontWeight: '700',
    letterSpacing: -1.5,
    color: colors.textPrimary,
  },

  role: {
    marginTop: spacing.lg,
    fontSize: typography.body,
    lineHeight: 22,
    fontWeight: '500',
    color: colors.textSecondary,
  },

  location: {
    marginTop: spacing.xs,
    fontSize: typography.small,
    color: colors.textMuted,
  },

  profileImage: {
    width: 104,
    height: 130,
    borderRadius: 52,
    marginLeft: spacing.sm,
  },

  section: {
    marginTop: spacing.huge,
  },

  sectionHeadingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionLabel: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.8,
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },

  sectionCount: {
    fontSize: typography.small,
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },

  about: {
    fontSize: 17,
    lineHeight: 28,
    color: colors.textSecondary,
  },

  expertiseRow: {
    flexDirection: 'row',
    paddingVertical: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  expertiseNumber: {
    width: 38,
    fontSize: typography.small,
    color: colors.textMuted,
  },

  expertiseContent: {
    flex: 1,
  },

  expertiseTitle: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: colors.textPrimary,
  },

  expertiseSkills: {
    marginTop: spacing.sm,
    fontSize: typography.body,
    lineHeight: 23,
    color: colors.textSecondary,
  },

  education: {
    paddingVertical: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  educationInstitution: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: colors.textMuted,
  },

  educationDegree: {
    marginTop: spacing.sm,
    fontSize: 21,
    lineHeight: 27,
    fontWeight: '600',
    color: colors.textPrimary,
  },

  educationDuration: {
    marginTop: spacing.xs,
    fontSize: typography.small,
    color: colors.textSecondary,
  },

  educationDescription: {
    marginTop: spacing.md,
    fontSize: typography.body,
    lineHeight: 23,
    color: colors.textSecondary,
  },

  languages: {
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    fontSize: typography.body,
    lineHeight: 25,
    color: colors.textPrimary,
  },

  listRow: {
    flexDirection: 'row',
    paddingVertical: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  listNumber: {
    width: 38,
    fontSize: typography.small,
    color: colors.textMuted,
  },

  listContent: {
    flex: 1,
  },

  listTitle: {
    fontSize: typography.body,
    lineHeight: 22,
    fontWeight: '600',
    color: colors.textPrimary,
  },

  listMeta: {
    marginTop: spacing.xs,
    fontSize: typography.small,
    lineHeight: 19,
    color: colors.textSecondary,
  },

  primaryAction: {
    height: 58,
    borderRadius: 14,
    backgroundColor: colors.textPrimary,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },

  primaryActionText: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: colors.background,
  },

  primaryActionArrow: {
    fontSize: 20,
    color: colors.background,
  },

  connectRow: {
    minHeight: 58,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  connectTitle: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: colors.textPrimary,
  },

  connectArrow: {
    fontSize: 19,
    color: colors.textSecondary,
  },

  resumeAction: {
    marginTop: spacing.xl,
    minHeight: 58,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  resumeText: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: colors.textPrimary,
  },

  resumeArrow: {
    fontSize: 20,
    color: colors.textPrimary,
  },

  footer: {
    marginTop: spacing.huge,
    paddingTop: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  footerBrand: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 2.5,
    color: colors.textPrimary,
  },

  footerText: {
    marginTop: spacing.sm,
    fontSize: typography.small,
    color: colors.textMuted,
  },
});

export default ProfileScreen;