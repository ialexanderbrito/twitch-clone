import React from 'react';
import Carousel from 'react-native-snap-carousel';

import { useSwitchTheme } from '../../context/SwitchTheme';

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

const CarouselList: React.FC = () => {
  const CarouselItem: React.FC<ItemProps> = ({ item }) => (
    <List>
      <Carousel
        layout={'default'}
        loop={true}
        layoutCardOffset={4}
        data={data}
        sliderWidth={355}
        itemWidth={355}
        renderItem={({ item }) => {
          return (
            <VideoContainer>
              <Thumbnail>
                <VideoImage source={item.source} />
                <RedCircle colors={colors}>
                  <RedCircleText>Ao Vivo</RedCircleText>
                </RedCircle>
                <InfoCircle>
                  <InfoCircleText>{item.info} espectadores</InfoCircleText>
                </InfoCircle>
              </Thumbnail>
              <VideoName colors={colors} numberOfLines={1}>
                {item.name} transmitindo {item.game}
              </VideoName>
              <VideoStatus>
                <TagRow>
                  <TagView colors={colors}>
                    <TagText colors={colors}>Português</TagText>
                  </TagView>
                </TagRow>
              </VideoStatus>
            </VideoContainer>
          );
        }}
      />
    </List>
  );

  const { colors } = useSwitchTheme();

  return <CarouselItem />;
};

export default CarouselList;
