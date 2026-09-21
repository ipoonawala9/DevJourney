import React from 'react';
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import colors from '../constants/colors';
import typography from '../constants/typography';
import spacing from '../constants/spacing';

import projects from '../data/projects';

type ProjectDetailsScreenProps = {
  route: {
    params: {
      projectId: string;
    };
  };
};

function ProjectDetailsScreen({
  route,
}: ProjectDetailsScreenProps): React.JSX.Element {
  const navigation = useNavigation();

  const {projectId} = route.params;

  const project = projects.find(
    item => item.id === projectId,
  );

  if (!project) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>
          Project not found
        </Text>

        <Text style={styles.errorText}>
          The requested project could not be found.
        </Text>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.errorButton}>
          <Text style={styles.errorButtonText}>
            GO BACK
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* Custom Header */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          activeOpacity={0.65}>

          <Text style={styles.backArrow}>
            ‹
          </Text>

          <Text style={styles.backText}>
            WORK
          </Text>

        </TouchableOpacity>

        <Text style={styles.headerCount}>
          {project.id.toUpperCase()}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>

        {/* Hero */}

        <View style={styles.hero}>

          <View style={styles.metaRow}>

            <Text style={styles.category}>
              {project.category.toUpperCase()}
            </Text>

            <View style={styles.statusContainer}>
              <View style={styles.statusDot} />

              <Text style={styles.status}>
                {project.status}
              </Text>
            </View>

          </View>

          <Text style={styles.title}>
            {project.title}
          </Text>

          <Text style={styles.description}>
            {project.description}
          </Text>

        </View>

        {/* About */}

        <View style={styles.section}>

          <Text style={styles.sectionLabel}>
            01 / OVERVIEW
          </Text>

          <Text style={styles.body}>
            {project.longDescription}
          </Text>

        </View>

        {/* Technologies */}

        <View style={styles.section}>

          <Text style={styles.sectionLabel}>
            02 / BUILT WITH
          </Text>

          <View style={styles.technologyList}>
            {project.technologies.map(
              (technology, index) => (
                <View
                  key={technology}
                  style={styles.technologyRow}>

                  <Text style={styles.technologyNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </Text>

                  <Text style={styles.technologyText}>
                    {technology}
                  </Text>

                </View>
              ),
            )}
          </View>

        </View>

        {/* Features */}

        <View style={styles.section}>

          <Text style={styles.sectionLabel}>
            03 / KEY FEATURES
          </Text>

          <View style={styles.featureList}>

            {project.features.map(
              (feature, index) => (
                <View
                  key={feature}
                  style={styles.featureRow}>

                  <Text style={styles.featureNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </Text>

                  <Text style={styles.featureText}>
                    {feature}
                  </Text>

                </View>
              ),
            )}

          </View>

        </View>

        {/* Links */}

<View style={styles.section}>

  <Text style={styles.sectionLabel}>
    04 / PROJECT
  </Text>

  <View style={styles.links}>

    <TouchableOpacity
      style={styles.linkRow}
      activeOpacity={0.65}
      onPress={() => {
        if (project.githubUrl) {
          Linking.openURL(project.githubUrl);
        } else {
          Alert.alert(
            'Source Code',
            'The GitHub repository link will be added soon.',
          );
        }
      }}>

      <Text style={styles.linkTitle}>
        SOURCE CODE
      </Text>

      <Text style={styles.linkArrow}>
        ↗
      </Text>

    </TouchableOpacity>

    <TouchableOpacity
      style={styles.linkRow}
      activeOpacity={0.65}
      onPress={() => {
        if (project.liveUrl) {
          Linking.openURL(project.liveUrl);
        } else {
          Alert.alert(
            'Live Demo',
            'The live demo link will be added soon.',
          );
        }
      }}>

      <Text style={styles.linkTitle}>
        LIVE DEMO
      </Text>

      <Text style={styles.linkArrow}>
        ↗
      </Text>

    </TouchableOpacity>

  </View>

</View>


        {/* End */}

        <View style={styles.end}>

          <Text style={styles.endNumber}>
            END
          </Text>

          <Text style={styles.endText}>
            Thanks for taking a look.
          </Text>

        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    height: 58,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 44,
  },

  backArrow: {
    fontSize: 32,
    lineHeight: 34,
    fontWeight: '300',
    color: colors.textPrimary,
    marginRight: spacing.sm,
  },

  backText: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: colors.textSecondary,
  },

  headerCount: {
    fontSize: typography.small,
    color: colors.textMuted,
  },

  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: 110,
  },

  hero: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  category: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: colors.textMuted,
    flex: 1,
  },

  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.success,
    marginRight: spacing.sm,
  },

  status: {
    fontSize: typography.small,
    color: colors.success,
  },

  title: {
    marginTop: spacing.xl,
    fontSize: 44,
    lineHeight: 47,
    fontWeight: '700',
    letterSpacing: -1.5,
    color: colors.textPrimary,
  },

  description: {
    marginTop: spacing.lg,
    fontSize: 17,
    lineHeight: 26,
    color: colors.textSecondary,
  },

  section: {
    paddingTop: spacing.huge,
  },

  sectionLabel: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },

  body: {
    fontSize: 17,
    lineHeight: 28,
    color: colors.textSecondary,
  },

  technologyList: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  technologyRow: {
    minHeight: 52,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },

  technologyNumber: {
    width: 38,
    fontSize: typography.small,
    color: colors.textMuted,
  },

  technologyText: {
    fontSize: typography.body,
    fontWeight: '500',
    color: colors.textPrimary,
  },

  featureList: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  featureRow: {
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  featureNumber: {
    width: 38,
    fontSize: typography.small,
    color: colors.textMuted,
  },

  featureText: {
    flex: 1,
    fontSize: typography.body,
    lineHeight: 23,
    color: colors.textSecondary,
  },

  links: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  linkRow: {
    minHeight: 64,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  linkTitle: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: colors.textPrimary,
  },

  linkArrow: {
    fontSize: 20,
    color: colors.textPrimary,
  },

  end: {
    marginTop: spacing.huge,
    paddingTop: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  endNumber: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: colors.textMuted,
  },

  endText: {
    marginTop: spacing.sm,
    fontSize: typography.body,
    color: colors.textSecondary,
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.lg,
    backgroundColor: colors.background,
  },

  errorTitle: {
    fontSize: typography.heading,
    fontWeight: '700',
    color: colors.textPrimary,
  },

  errorText: {
    marginTop: spacing.sm,
    fontSize: typography.body,
    color: colors.textSecondary,
  },

  errorButton: {
    marginTop: spacing.xl,
    height: 52,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  errorButtonText: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: colors.textPrimary,
  },
});

export default ProjectDetailsScreen;