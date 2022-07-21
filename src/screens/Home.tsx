import React from 'react';
import useTheme from '../hooks/useTheme';
import {Block, Input, Text} from '../ui';

function Home() {
  // const  = useTheme();
  return (
    <Block marginTop={50} align="center" justify="center">
      <Text>Login Screen</Text>
      <Input placeholder="how u doing" margin={20} padding={20} />
      <Input placeholder="how u doing" margin={20} padding={20} />
      <Input placeholder="how u doing" margin={20} padding={20} />
    </Block>
  );
}

export default Home;
