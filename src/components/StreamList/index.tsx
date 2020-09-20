import React from 'react';

import { useSwitchTheme } from '../../context/SwitchTheme';

import data from '../VideoList/data';

import streamThumbnail from '../../images/stream_thumbnail.jpg';
import user1 from '../../images/avatar/alexander.png';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

interface ItemProps {
  item: typeof data[0];
}

const StreamList: React.FC = () => {
  const { colors } = useSwitchTheme();

  const StreamItem: React.FC<ItemProps> = ({ item }) => (
    <StreamContainer>
      <StreamThumbnail source={item.source} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar colors={colors} source={item.avatar} />
            <StreamUsername colors={colors} numberOfLines={1}>
              ialexanderbrito
            </StreamUsername>
          </StreamHeader>

          <StreamDescription colors={colors} numberOfLines={1}>
            {item.title}
          </StreamDescription>
          <StreamCategory colors={colors} numberOfLines={1}>
            {item.game}
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView colors={colors}>
            <TagText colors={colors}>Português</TagText>
          </TagView>
          <TagView colors={colors}>
            <TagText colors={colors}>{item.tag}</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );
  return (
    <List>
      {data.map((item) => (
        <StreamItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default StreamList;
