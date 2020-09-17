import React from 'react';

import data from './data';

import {
  List,
  VideoContainer,
  Thumbnail,
  VideoImage,
  VideoName,
  VideoStatus,
  RedCircle,
  RedCircleText,
  InfoCircle,
  InfoCircleText,
  TagRow,
  TagView,
  TagText,
} from './styles';

interface ItemProps {
  item: typeof data[0];
}

const VideoList: React.FC = () => {
  const VideoItem: React.FC<ItemProps> = ({ item }) => (
    <VideoContainer>
      <Thumbnail>
        <VideoImage source={item.source} />
        <RedCircle>
          <RedCircleText>Ao Vivo</RedCircleText>
        </RedCircle>
        <InfoCircle>
          <InfoCircleText>{item.info} espectadores</InfoCircleText>
        </InfoCircle>
      </Thumbnail>
      <VideoName numberOfLines={1}>
        {item.name} transmitindo {item.game}
      </VideoName>
      <VideoStatus>
        <TagRow>
          <TagView>
            <TagText>Português</TagText>
          </TagView>
        </TagRow>
      </VideoStatus>
    </VideoContainer>
  );

  return (
    <List>
      {data.map((item) => (
        <VideoItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default VideoList;
