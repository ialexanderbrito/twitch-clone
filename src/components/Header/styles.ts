import styled from 'styled-components/native';
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

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 14px;
  padding-right: 14px;
`;

export const Avatar = styled.TouchableOpacity.attrs(activeOpacityValue)<Props>`
  background: ${(props) => props.colors.tag};
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const Img = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const OnlineStatus = styled.View<Props>`
  background-color: ${(props) => props.colors.green};

  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.colors.primary};

  position: absolute;
  bottom: 0;
  right: 0;
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px;
`;
