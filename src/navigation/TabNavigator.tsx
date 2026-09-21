import React from 'react';
import {StyleSheet, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProjectsStackNavigator from './ProjectsStackNavigator';
import JourneyScreen from '../screens/JourneyScreen';
import ProfileStackNavigator from './ProfileStackNavigator';
import {RootTabParamList} from './types';

import colors from '../constants/colors';

const Tab = createBottomTabNavigator<RootTabParamList>();

function TabNavigator(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarShowLabel: true,

        tabBarActiveTintColor: colors.textPrimary,
        tabBarInactiveTintColor: colors.textMuted,

        tabBarStyle: styles.tabBar,

        tabBarLabelStyle: styles.label,

        tabBarIcon: ({focused, color, size}) => {
          let iconName:
            | 'home-outline'
            | 'home'
            | 'grid-outline'
            | 'grid'
            | 'time-outline'
            | 'time'
            | 'person-outline'
            | 'person';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Projects') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Journey') {
            iconName = focused ? 'time' : 'time-outline';
          } else {
            iconName = focused ? 'person' : 'person-outline';
          }

          return (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer,
              ]}>
              <Ionicons
                name={iconName}
                size={focused ? 20 : 19}
                color={color}
              />
            </View>
          );
        },
      })}>

      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen
        name="Projects"
        component={ProjectsStackNavigator}
      />

      <Tab.Screen
        name="Journey"
        component={JourneyScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 78,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    elevation: 0,
    shadowOpacity: 0,
    paddingTop: 8,
    paddingBottom: 8,
  },

  label: {
    fontSize: 10,
    fontWeight: '600',
    marginTop: 2,
  },

  iconContainer: {
    width: 34,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeIconContainer: {
    opacity: 1,
  },
});

export default TabNavigator;