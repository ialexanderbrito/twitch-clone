import React from 'react';

import { useSwitchTheme } from '../../context/SwitchTheme';

import data from './data';

import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
} from './styles';

interface ItemProps {
  item: typeof data[0];
}

const ChannelList: React.FC = () => {
  const { colors } = useSwitchTheme();

  const ChannelItem: React.FC<ItemProps> = ({ item }) => (
    <ChannelContainer>
      <LeftSide>
        <Avatar colors={colors} source={item.source} />
        <Column>
          <Username colors={colors}>{item.name}</Username>
          <Info colors={colors}>{item.videos}</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle colors={colors} />
      </RightSide>
    </ChannelContainer>
  );
  return (
    <List>
      {data.map((item) => (
        <ChannelItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default ChannelList;
