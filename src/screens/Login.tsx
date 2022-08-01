import {Block, Button, Input, Text, useTheme} from 'bad-ui';
import {useSetAtom} from 'jotai';
import React from 'react';
import {_isLoggedIn} from '../atoms/auth';

const Login = () => {
  const {colors} = useTheme();
  const setLoggedIn = useSetAtom(_isLoggedIn);

  return (
    <Block flex={1} color={colors.background1}>
      <Text h2 align="center" mt="m">
        Login
      </Text>
      <Block pv="l" ph="m">
        <Input label="Name" />
        <Input label="Phone Number" />
        <Button mt="l" onPress={() => setLoggedIn(true)}>
          Submit
        </Button>
      </Block>
    </Block>
  );
};

export default Login;
