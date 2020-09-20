import React from 'react';
import { FlatList } from 'react-native';

import { useSwitchTheme } from '../../context/SwitchTheme';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';

import { Wrapper, Container, Main } from './styles';
interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { colors } = useSwitchTheme();

  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Seguindo</Heading>,
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Canais ao vivo</Title>,
        isTitle: true,
      },
      {
        key: 'C1',
        render: () => <StreamList />,
      },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue assistindo</Title>,
        isTitle: true,
      },
      {
        key: 'C2',
        render: () => <StreamList />,
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Canais offline</Title>,
        isTitle: true,
      },
      {
        key: 'C3',
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
    <Wrapper colors={colors}>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
            showsVerticalScrollIndicator={false}
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

export default Following;
