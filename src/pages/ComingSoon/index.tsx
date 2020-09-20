import React from 'react';

import { useSwitchTheme } from '../../context/SwitchTheme';

import { Wrapper, Heading, Img } from './styles';

import ghost from '../../images/ic_ghost_small.png';

const ComingSoon: React.FC = () => {
  const { colors } = useSwitchTheme();

  return (
    <Wrapper colors={colors}>
      <Heading colors={colors}>Coming soon...</Heading>
      <Img source={ghost} />
    </Wrapper>
  );
};

export default ComingSoon;
