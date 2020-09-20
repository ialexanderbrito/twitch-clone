import React from 'react';
import { AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { useSwitchTheme } from '../../context/SwitchTheme';

import SwitchThemes from '../../components/SwitchThemes';

import user1 from '../../images/avatar/alexander.png';

import {
  Container,
  Avatar,
  Img,
  OnlineStatus,
  RightSide,
  Button,
} from './styles';

const Header: React.FC = () => {
  const { colors } = useSwitchTheme();

  return (
    <Container>
      <Avatar colors={colors}>
        <Img source={user1} />
        <OnlineStatus colors={colors} />
      </Avatar>

      <RightSide>
        <SwitchThemes />
        <Button>
          <Feather name="video" size={24} color={colors.black} />
        </Button>

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
