import React from 'react';
import {Block, Button, Text, useTheme} from 'bad-ui';

function MyPets() {
  const {colors} = useTheme();
  return (
    <Block flex={1} justify="center">
      <Text s2 mb="m" color={colors.textMedium} align="center" h3>
        No Pet Added!!
      </Text>
      <Button mh="m" mode="contained">
        Add Your First Pet
      </Button>
    </Block>
  );
}

export default MyPets;
