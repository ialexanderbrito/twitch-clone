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

export const List = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 8px 0 24px;
`;

export const CategoryContainer = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const CategoryImage = styled.Image`
  width: 98px;
  height: 130px;

  background: #bf94ff;
`;

export const CategoryName = styled.Text<Props>`
  margin-top: 5px;
  max-width: 98px;
  color: ${(props) => props.colors.black};
  font-family: Roobert_600SemiBold;
  font-size: 13.5px;
`;

export const CategoryStatus = styled.View`
  flex-direction: row;
  align-items: center;
  max-width: 92px;
`;

export const RedCircle = styled.View<Props>`
  background: ${(props) => props.colors.red};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
`;

export const Info = styled.Text<Props>`
  margin-left: 4px;
  padding-bottom: 1px;
  color: ${(props) => props.colors.gray};
  font-family: Roobert_600SemiBold;
  font-size: 13px;
`;
