import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSwitchTheme } from '../src/context/SwitchTheme';

import Following from './pages/Following';
import ComingSoon from './pages/ComingSoon';
import Discover from './pages/Discover';

import colors from './styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => {
  const { colors } = useSwitchTheme();

  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            height: 60,
            backgroundColor: colors.primary,
            borderTopWidth: 0,
          },
          tabStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle: {
            fontFamily: 'Roobert_400Regular',
            fontSize: 11,
            marginTop: 5,
          },
          inactiveTintColor: colors.black,
          activeTintColor: colors.purple,
        }}
      >
        <Screen
          name="Seguindo"
          component={Following}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <MaterialCommunityIcons
                  name="heart"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />
        <Screen
          name="Descubra"
          component={Discover}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <MaterialCommunityIcons
                  name="compass-outline"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />
        <Screen
          name="Procurar"
          component={ComingSoon}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <MaterialCommunityIcons
                  name="checkbox-multiple-blank-outline"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />
        <Screen
          name="Esports"
          component={ComingSoon}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <MaterialCommunityIcons
                  name="trophy-outline"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
