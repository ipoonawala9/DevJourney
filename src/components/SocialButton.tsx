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

type SocialButtonProps = {
  title: string;
  onPress: () => void;
  primary?: boolean;
};

function SocialButton({
  title,
  onPress,
  primary = false,
}: SocialButtonProps): React.JSX.Element {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        primary && styles.primaryButton,
      ]}
      onPress={onPress}
      activeOpacity={0.65}>

      <Text
        style={[
          styles.text,
          primary && styles.primaryText,
        ]}>
        {title}
      </Text>

      <View
        style={[
          styles.arrowContainer,
          primary && styles.primaryArrowContainer,
        ]}>
        <Text
          style={[
            styles.arrow,
            primary && styles.primaryArrow,
          ]}>
          ↗
        </Text>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 58,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  primaryButton: {
    backgroundColor: colors.textPrimary,
    borderBottomWidth: 0,
    paddingHorizontal: spacing.lg,
    borderRadius: 14,
    marginBottom: spacing.sm,
  },

  text: {
    fontSize: typography.body,
    fontWeight: '600',
    color: colors.textPrimary,
  },

  primaryText: {
    color: colors.background,
  },

  arrowContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  primaryArrowContainer: {
    backgroundColor: colors.background,
    borderRadius: 15,
  },

  arrow: {
    fontSize: 16,
    color: colors.textSecondary,
  },

  primaryArrow: {
    color: colors.textPrimary,
  },
});

export default SocialButton;