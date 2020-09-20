import React from 'react';

import { useSwitchTheme } from '../../context/SwitchTheme';

import data from './data';

import {
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
} from './styles';

interface ItemProps {
  item: typeof data[0];
}

const CategoryList: React.FC = () => {
  const { colors } = useSwitchTheme();

  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName colors={colors} numberOfLines={1}>
        {item.name}{' '}
      </CategoryName>
      <CategoryStatus>
        <RedCircle colors={colors} />
        <Info colors={colors} numberOfLines={1}>
          {item.info}
        </Info>
      </CategoryStatus>
    </CategoryContainer>
  );

  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;
