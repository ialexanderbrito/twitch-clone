import React from 'react';
import Carousel from 'react-native-snap-carousel';

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

function renderItem({ item }) {
  return (
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
}

const VideoList: React.FC = () => {
  const VideoItem: React.FC<ItemProps> = ({ item }) => (
    <List>
      <Carousel
        layout={'default'}
        loop={true}
        layoutCardOffset={4}
        data={data}
        sliderWidth={355}
        itemWidth={355}
        renderItem={renderItem}
      />
    </List>
  );

  return <VideoItem />;
};

export default VideoList;
