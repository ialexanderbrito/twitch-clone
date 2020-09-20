import React, { Children } from 'react';

import { useSwitchTheme } from '../../context/SwitchTheme';

import { Container, HeadingText } from './styles';

const Heading: React.FC = ({ children }) => {
  const { colors } = useSwitchTheme();

  return (
    <Container>
      <HeadingText colors={colors}>{children}</HeadingText>
    </Container>
  );
};

export default Heading;
