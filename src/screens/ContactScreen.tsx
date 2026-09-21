import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import colors from '../constants/colors';
import typography from '../constants/typography';
import spacing from '../constants/spacing';

function ContactScreen(): React.JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
  if (!name.trim() || !email.trim() || !message.trim()) {
    Alert.alert(
      'Missing Information',
      'Please fill in all fields before sending.',
    );
    return;
  }

  const subject = encodeURIComponent(
    `DevJourney Contact from ${name}`,
  );

  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`,
  );

  const mailUrl =
    `mailto:poonawalaibrahim9@gmail.com` +
    `?subject=${subject}&body=${body}`;

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=poonawalaibrahim9@gmail.com` +
    `&su=${subject}` +
    `&body=${body}`;

  try {
    const supported = await Linking.canOpenURL(mailUrl);

    if (supported) {
      await Linking.openURL(mailUrl);
    } else {
      await Linking.openURL(gmailUrl);
    }
  } catch (error) {
    Alert.alert(
      'Unable to Open Email',
      'Please try contacting me directly through the email address shown below.',
    );
  }
};

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : undefined
      }>

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>

        {/* Header */}

        <View style={styles.header}>

          <Text style={styles.headerLabel}>
            CONTACT
          </Text>

          <Text style={styles.headerNumber}>
            05
          </Text>

        </View>

        {/* Introduction */}

        <View style={styles.introduction}>

          <Text style={styles.title}>
            Let's build{'\n'}
            something together.
          </Text>

          <Text style={styles.subtitle}>
            Have a project idea, opportunity or just
            want to say hello?
          </Text>

        </View>

        {/* Form */}

        <View style={styles.form}>

          {/* Name */}

          <View style={styles.field}>

            <Text style={styles.label}>
              NAME
            </Text>

            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Your name"
              placeholderTextColor={colors.textMuted}
              selectionColor={colors.textPrimary}
            />

          </View>

          {/* Email */}

          <View style={styles.field}>

            <Text style={styles.label}>
              EMAIL
            </Text>

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="your@email.com"
              placeholderTextColor={colors.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              selectionColor={colors.textPrimary}
            />

          </View>

          {/* Message */}

          <View style={styles.field}>

            <Text style={styles.label}>
              MESSAGE
            </Text>

            <TextInput
              style={[
                styles.input,
                styles.messageInput,
              ]}
              value={message}
              onChangeText={setMessage}
              placeholder="Write your message..."
              placeholderTextColor={colors.textMuted}
              multiline
              textAlignVertical="top"
              selectionColor={colors.textPrimary}
            />

          </View>

          {/* Submit */}

          <TouchableOpacity
            style={styles.submit}
            onPress={handleSubmit}
            activeOpacity={0.7}>

            <Text style={styles.submitText}>
              SEND MESSAGE
            </Text>

            <Text style={styles.submitArrow}>
              ↗
            </Text>

          </TouchableOpacity>

        </View>

        {/* Direct Email */}

        <View style={styles.directContact}>

          <Text style={styles.directLabel}>
            PREFER EMAIL?
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
           onPress={async () => {
  const mailUrl = 'mailto:poonawalaibrahim9@gmail.com';

  const gmailUrl =
    'https://mail.google.com/mail/?view=cm&fs=1' +
    '&to=poonawalaibrahim9@gmail.com';

  try {
    const supported = await Linking.canOpenURL(mailUrl);

    if (supported) {
      await Linking.openURL(mailUrl);
    } else {
      await Linking.openURL(gmailUrl);
    }
  } catch (error) {
    Alert.alert(
      'Unable to Open Email',
      'Please use the email address shown above.',
    );
  }
}}>

            <Text style={styles.email}>
              poonawalaibrahim9@gmail.com
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </KeyboardAvoidingView>
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

  introduction: {
    marginTop: spacing.xl,
  },

  title: {
    fontSize: 40,
    lineHeight: 43,
    fontWeight: '700',
    letterSpacing: -1.4,
    color: colors.textPrimary,
  },

  subtitle: {
    marginTop: spacing.lg,
    maxWidth: 340,
    fontSize: typography.body,
    lineHeight: 24,
    color: colors.textSecondary,
  },

  form: {
    marginTop: spacing.huge,
  },

  field: {
    marginBottom: spacing.xl,
  },

  label: {
    marginBottom: spacing.sm,
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: colors.textMuted,
  },

  input: {
    minHeight: 48,
    paddingHorizontal: 0,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    color: colors.textPrimary,
    fontSize: 16,
  },

  messageInput: {
    minHeight: 120,
    paddingTop: spacing.sm,
  },

  submit: {
    minHeight: 58,
    marginTop: spacing.sm,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.textPrimary,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  submitText: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: colors.background,
  },

  submitArrow: {
    fontSize: 20,
    color: colors.background,
  },

  directContact: {
    marginTop: spacing.huge,
    paddingTop: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  directLabel: {
    fontSize: typography.small,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: colors.textMuted,
  },

  email: {
    marginTop: spacing.sm,
    fontSize: typography.body,
    color: colors.textPrimary,
  },
});

export default ContactScreen;