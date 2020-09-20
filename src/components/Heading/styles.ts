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

export const Container = styled.View`
  padding: 10px 0 20px;
`;

export const HeadingText = styled.Text<Props>`
  color: ${(props) => props.colors.black};
  font-family: Roobert_700Bold;
  font-size: 36px;
`;
