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
  padding: 8px 0 24px;
`;

export const StreamContainer = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;

  margin-bottom: 24px;
  margin-right: 24px;
`;

export const StreamColumn = styled.View`
  margin-left: 11px;
  flex: 1;
`;

export const StreamThumbnail = styled.Image`
  width: 119px;
  height: 66px;
`;

export const StreamRow = styled.View`
  height: 66px;
  justify-content: space-between;
`;

export const StreamHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StreamAvatar = styled.Image<Props>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${(props) => props.colors.tag};
`;

export const StreamUsername = styled.Text<Props>`
  color: ${(props) => props.colors.black};
  margin-left: 5px;
  font-family: Roobert_700Bold;
`;

export const StreamDescription = styled.Text<Props>`
  color: ${(props) => props.colors.black};
  font-family: Roobert_400Regular;
`;

export const StreamCategory = styled.Text<Props>`
  color: ${(props) => props.colors.gray};
  font-family: Roobert_500Medium;
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
