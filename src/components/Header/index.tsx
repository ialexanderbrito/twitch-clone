import React from 'react';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';

import user1 from '../../images/avatar/avatar1.png';

import {
  Container,
  Avatar,
  Img,
  OnlineStatus,
  RightSide,
  Button,
} from './styles';

import colors from '../../styles/colors';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <Img source={user1} />
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <Feather name="search" size={26} color={colors.black} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
