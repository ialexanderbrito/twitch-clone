import React from 'react';

import ghost from '../../images/ic_ghost_small.png';

import { Wrapper, Heading, Img } from './styles';

const ComingSoon: React.FC = () => {
  return (
    <Wrapper>
      <Heading>Coming soon...</Heading>
      <Img source={ghost} />
    </Wrapper>
  );
};

export default ComingSoon;
