import React from 'react';

import { useSwitchTheme } from '../../context/SwitchTheme';

import data from './data';

import {
  List,
  VideoContainer,
  Thumbnail,
  StreamAvatar,
  Avatar,
  VideoImage,
  StreamInfo,
  VideoName,
  VideoTitle,
  VideoDescription,
  VideoStatus,
  Footer,
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
  const { colors } = useSwitchTheme();

  const VideoItem: React.FC<ItemProps> = ({ item }) => (
    <>
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
        <Footer>
          <StreamAvatar>
            <Avatar source={item.avatar} />
          </StreamAvatar>
          <StreamInfo>
            <VideoName colors={colors} numberOfLines={1}>
              {item.name}
            </VideoName>
            <VideoTitle colors={colors}>{item.title}</VideoTitle>
            <VideoDescription numberOfLines={1} colors={colors}>
              {item.game}
            </VideoDescription>
          </StreamInfo>
        </Footer>
      </VideoContainer>
      <VideoStatus>
        <TagRow>
          <TagView colors={colors}>
            <TagText colors={colors}>Português</TagText>
          </TagView>
        </TagRow>
      </VideoStatus>
    </>
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
