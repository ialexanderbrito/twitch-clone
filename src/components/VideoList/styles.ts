import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0;
`;

export const VideoContainer = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Thumbnail = styled.TouchableOpacity`
  width: 355px;
  height: 200px;
`;

export const VideoImage = styled.Image`
  width: 355px;
  height: 200px;
`;

export const VideoName = styled.Text`
  margin-top: 5px;
  max-width: 355px;
  color: ${colors.black};
  font-family: roboto_700;
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

export const TagView = styled.View`
  background: ${colors.tag};
  padding: 2px 8px;
  border-radius: 10px;
  margin-right: 5px;
`;

export const TagText = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 13px;
`;

export const RedCircle = styled.View`
  background: ${colors.red};
  width: 60px;
  height: 20px;
  border-radius: 4.5px;

  position: absolute;
  margin: 10px 10px;
`;

export const RedCircleText = styled.Text`
  color: ${colors.black};
  text-align: center;
  text-transform: uppercase;
  font-family: roboto_500;
  font-size: 13px;
`;

export const InfoCircle = styled.View`
  background: ${colors.primary};
  /* opacity: 0.65; */
  width: 140px;
  height: 20px;
  border-radius: 4.5px;

  position: absolute;
  margin: 10px 10px;

  bottom: 0;
`;

export const InfoCircleText = styled.Text`
  margin-left: 4px;
  margin-right: 4px;
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 13px;
  text-align: center;
`;
