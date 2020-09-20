import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

interface Props {
  colors: {
    primary: string;
    black: string;
    gray: string;
    tag: string;
    green: string;
    red: string;
    purple: string;
  };
}

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView<Props>`
  background: ${(props) => props.colors.primary};
  flex: 1%;
  padding-top: ${statusBarHeight + 'px'};
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text<Props>`
  color: ${(props) => props.colors.purple};
  font-family: Roobert_700Bold;
  font-size: 34px;
`;

export const Img = styled.Image`
  height: 180px;
  width: 180px;

  margin-top: 30px;
`;
