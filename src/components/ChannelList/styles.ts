import styled, { css } from 'styled-components/native';
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

const activeOpacityValue = { activeOpacity: 0.7 };

export const List = styled.View`
  padding: 8px 0 0;
`;

export const ChannelContainer = styled.TouchableOpacity.attrs(
  activeOpacityValue
)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 14px;

  margin-bottom: 25px;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image<Props>`
  background: ${(props) => props.colors.tag};
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const Column = styled.View`
  padding-left: 10px;
`;

export const Username = styled.Text<Props>`
  color: ${(props) => props.colors.black};
  font-family: Roobert_600SemiBold;
  font-size: 16px;
`;

export const Info = styled.Text<Props>`
  margin-top: 1px;
  color: ${(props) => props.colors.gray};
  font-size: 13px;
  font-family: Roobert_500Medium;
`;

export const RightSide = styled.View``;

export const WhiteCircle = styled.View<Props>`
  background: ${(props) => props.colors.black};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  opacity: 0.85;

  margin-right: 10px;
`;
