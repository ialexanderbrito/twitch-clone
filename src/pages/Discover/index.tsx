import React from 'react';
import { Text, FlatList } from 'react-native';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';
import VideoList from '../../components/VideoList';
import CarouselList from '../../components/CarouselList';

import { Wrapper, Container, Main } from './styles';
interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Discover: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Descubra</Heading>,
      },
      {
        key: 'C1',
        render: () => <CarouselList />,
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => (
          <Title>
            <Text style={{ color: '#BF94FF' }}>Categorias</Text> que achamos que
            vai gostar
          </Title>
        ),
        isTitle: true,
      },
      {
        key: 'C2',
        render: () => <CategoryList />,
      },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Canais ao vivo que achamos que vai gostar</Title>,
        isTitle: true,
      },
      {
        key: 'C3',
        render: () => <VideoList />,
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Canais offline</Title>,
        isTitle: true,
      },
      {
        key: 'C4',
        render: () => <ChannelList />,
      },
    ];

    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indices}
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Discover;
