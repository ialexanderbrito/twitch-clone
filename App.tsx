import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import Roobert_200Light from './assets/fonts/roobert_light.otf';
import Roobert_200LightItalic from './assets/fonts/roobert_lightitalic.otf';
import Roobert_400Regular from './assets/fonts/roobert_regular.otf';
import Roobert_400RegularItalic from './assets/fonts/roobert_regularitalic.otf';
import Roobert_500Medium from './assets/fonts/roobert_medium.otf';
import Roobert_500MediumItalic from './assets/fonts/roobert_mediumitalic.otf';
import Roobert_600SemiBold from './assets/fonts/roobert_semibold.otf';
import Roobert_700Bold from './assets/fonts/roobert_bold.otf';
import Roobert_800Heavy from './assets/fonts/roobert_heavy.otf';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roobert_200Light,
    Roobert_200LightItalic,
    Roobert_400Regular,
    Roobert_400RegularItalic,
    Roobert_500Medium,
    Roobert_500MediumItalic,
    Roobert_600SemiBold,
    Roobert_700Bold,
    Roobert_800Heavy,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  );
}
