import React from 'react';

import { useSwitchTheme } from '../../context/SwitchTheme';

import { Container } from './styles';

const Title: React.FC = ({ children }) => {
  const { colors } = useSwitchTheme();

  return <Container colors={colors}>{children}</Container>;
};

export default Title;
