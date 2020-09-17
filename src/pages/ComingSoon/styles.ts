import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1%;
  padding-top: ${statusBarHeight + 'px'};
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${colors.purple};
  font-family: Roobert_700Bold;
  font-size: 34px;
`;

export const Img = styled.Image`
  height: 180px;
  width: 180px;

  margin-top: 30px;
`;
