import { useContext } from 'react';
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
`;

export const Container = styled.View`
  padding-left: 14px;
`;

export const Main = styled.View``;
