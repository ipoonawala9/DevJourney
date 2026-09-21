import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileScreen from '../screens/ProfileScreen';
import ContactScreen from '../screens/ContactScreen';
import ResumeScreen from '../screens/ResumeScreen';

import colors from '../constants/colors';

export type ProfileStackParamList = {
  Profile: undefined;
  Contact: undefined;
  Resume: undefined;
};

const Stack =
  createNativeStackNavigator<ProfileStackParamList>();

function ProfileStackNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },

        headerTintColor: colors.textPrimary,

        headerTitleStyle: {
          fontSize: 17,
          fontWeight: '600',
        },

        headerShadowVisible: false,

        headerBackTitle: '',

        contentStyle: {
          backgroundColor: colors.background,
        },
      }}>

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: 'Contact',
        }}
      />

      <Stack.Screen
        name="Resume"
        component={ResumeScreen}
        options={{
          title: 'Resume',
        }}
      />

    </Stack.Navigator>
  );
}

export default ProfileStackNavigator;