import React from 'react';

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
  const ChannelItem: React.FC<ItemProps> = ({ item }) => (
    <ChannelContainer>
      <LeftSide>
        <Avatar source={item.source} />
        <Column>
          <Username>{item.name}</Username>
          <Info>{item.videos}</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
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
