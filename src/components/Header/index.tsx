import React from 'react';
import { AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

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
          <AntDesign name="inbox" size={24} color={colors.black} />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={24}
            color={colors.black}
          />
        </Button>
        <Button>
          <Feather name="search" size={24} color={colors.black} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
