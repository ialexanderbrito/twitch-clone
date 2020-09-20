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

export const VideoImage = styled.Image`
  width: 355px;
  height: 200px;
`;

export const VideoName = styled.Text<Props>`
  margin-top: 5px;
  max-width: 355px;
  color: ${(props) => props.colors.black};
  font-family: Roobert_700Bold;
  font-size: 15.5px;
`;

export const VideoStatus = styled.View`
  flex-direction: row;
  align-items: center;
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
