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

export const Container = styled.Text<Props>`
  color: ${(props) => props.colors.gray};
  background: ${(props) => props.colors.primary};

  font-family: Roobert_700Bold;
  font-size: 14px;
  text-transform: uppercase;

  padding: 9px 0;
`;
