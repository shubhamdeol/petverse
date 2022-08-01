import {Block, Text} from 'bad-ui';
import React from 'react';
import {PetProfileInfo} from '../types';

interface Props {
  item: PetProfileInfo;
}

const PetProfile: React.FC<Props> = ({item}) => {
  return (
    <Block>
      <Text>{item.name}</Text>
    </Block>
  );
};

export default PetProfile;
