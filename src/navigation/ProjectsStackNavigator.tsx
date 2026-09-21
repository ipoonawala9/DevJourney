import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProjectsScreen from '../screens/ProjectsScreen';
import ProjectDetailsScreen from '../screens/ProjectDetailsScreen';

export type ProjectsStackParamList = {
  Projects: undefined;
  ProjectDetails: {
    projectId: string;
  };
};

const Stack =
  createNativeStackNavigator<ProjectsStackParamList>();

function ProjectsStackNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#0A0A0A',
        },
      }}>

      <Stack.Screen
        name="Projects"
        component={ProjectsScreen}
      />

      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetailsScreen}
      />

    </Stack.Navigator>
  );
}

export default ProjectsStackNavigator;