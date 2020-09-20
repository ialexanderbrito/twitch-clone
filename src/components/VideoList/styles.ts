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

export const List = styled.View`
  padding: 8px 0;
`;

export const VideoContainer = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Thumbnail = styled.TouchableOpacity`
  width: 355px;
  height: 200px;

  background: #bf94ff;
`;

export const StreamAvatar = styled.View`
  margin-top: 5px;

  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
`;

export const Footer = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 24px;
`;

export const VideoImage = styled.Image`
  width: 355px;
  height: 200px;
`;

export const StreamInfo = styled.View`
  justify-content: center;
  width: 295px;
`;

export const VideoName = styled.Text<Props>`
  margin-top: 10px;
  max-width: 355px;
  color: ${(props) => props.colors.black};
  font-family: Roobert_700Bold;
  font-size: 15.5px;
`;

export const VideoTitle = styled.Text<Props>`
  color: ${(props) => props.colors.gray};
  font-family: Roobert_600SemiBold;
  font-size: 14.5px;
`;

export const VideoDescription = styled.Text<Props>`
  color: ${(props) => props.colors.gray};
  font-family: Roobert_600SemiBold;
  font-size: 12px;
`;

export const VideoStatus = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const TagRow = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const TagView = styled.View<Props>`
  background: ${(props) => props.colors.tag};
  padding: 2px 8px;
  border-radius: 10px;
  margin-right: 5px;
`;

export const TagText = styled.Text<Props>`
  color: ${(props) => props.colors.black};
  font-family: Roobert_500Medium;
  font-size: 13px;
`;

export const RedCircle = styled.View<Props>`
  background: ${(props) => props.colors.red};
  width: 60px;
  height: 20px;
  border-radius: 4.5px;

  position: absolute;
  margin: 10px 10px;
`;

export const RedCircleText = styled.Text`
  color: #efeff1;
  text-align: center;
  text-transform: uppercase;
  font-family: Roobert_500Medium;
  font-size: 13px;
`;

export const InfoCircle = styled.View`
  background: #000;
  /* opacity: 0.65; */
  width: 140px;
  height: 20px;
  border-radius: 4.5px;

  position: absolute;
  margin: 10px 10px;

  bottom: 0;
`;

export const InfoCircleText = styled.Text<Props>`
  margin-left: 4px;
  margin-right: 4px;
  color: #efeff1;
  font-family: Roobert_500Medium;
  font-size: 13px;
  text-align: center;
`;
