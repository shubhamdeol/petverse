import React from 'react';
import {Block, Button, Text, useTheme} from 'bad-ui';

function Account() {
  const {colors} = useTheme();
  return (
    <Block flex={1} justify="center">
      <Text s2 mb="m" color={colors.textMedium} align="center" h3>
        No Info!!
      </Text>
      <Button mh="m" mode="contained">
        Login
      </Button>
    </Block>
  );
}

export default Account;
