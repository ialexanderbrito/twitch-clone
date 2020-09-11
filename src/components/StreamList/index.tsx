import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

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

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>ialexanderbrito</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com Next.js
          </StreamDescription>
          <StreamCategory numberOfLines={1}>
            Ciência & tecnologia
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Português</TagText>
          </TagView>
          <TagView>
            <TagText>Ciência e tecnologia</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );
  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;