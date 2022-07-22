import {Text, AppUIProvider, Block, Button, Input} from 'bad-ui';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const BadUIDemoShowCase = () => {
  const [elementType, setElementType] = React.useState<
    'button' | 'text' | 'input'
  >();

  const renderTextComponents = () => {
    return (
      <>
        <Text mt={40} bt1>
          Text Bt1
        </Text>
        <Text mt={40} h1>
          Text H1
        </Text>
        <Text mt={40} h2>
          Text H2
        </Text>
        <Text mt={40} h3>
          Text H3
        </Text>
        <Text mt={40} h4>
          Text H4
        </Text>
        <Text mt={40} s1>
          Text S1
        </Text>
        <Text mt={40} s2>
          Text S2
        </Text>
        <Text mt={40} s3>
          Text S3
        </Text>
        <Text mt={40} s4>
          Text S4
        </Text>
        <Text mt={40} c1>
          Text C1
        </Text>
        <Text mt={40} c2>
          Text C2
        </Text>
      </>
    );
  };

  const renderButtonComponents = () => {
    return (
      <>
        <Button mt={50} mode="contained">
          Button Contained
        </Button>
        <Button mt={50} mode="outlined">
          Button Outlined
        </Button>
        <Button mt={50} mode="text">
          Button Text
        </Button>
      </>
    );
  };

  const renderInputComponents = () => {
    return (
      <>
        <Input label="User Name" placeholder="Tonny" />
        <Input
          label="Email"
          placeholder="xxxx@gmail.com"
          errorMessage="Email not valid"
        />
        <Input label="Password" secureTextEntry placeholder="*******" />
        <Button>Submit</Button>
      </>
    );
  };

  const renderContent = () => {
    switch (elementType) {
      case 'text':
        return renderTextComponents();
      case 'button':
        return renderButtonComponents();
      case 'input':
        return renderInputComponents();
      default:
        break;
    }
  };
  return (
    <Block flex={1} justify="center" paddingHorizontal={16}>
      <Button onPress={() => setElementType(undefined)}>Reset</Button>
      {elementType ? (
        renderContent()
      ) : (
        <>
          <Button onPress={() => setElementType('text')}>Text</Button>
          <Button onPress={() => setElementType('button')}>Button</Button>
          <Button onPress={() => setElementType('input')}>input</Button>
        </>
      )}
    </Block>
  );
};

const Demo = () => {
  return (
    <AppUIProvider
      theme={{
        dark: false,
      }}>
      <SafeAreaView style={styles.flexOne}>
        <BadUIDemoShowCase />
      </SafeAreaView>
    </AppUIProvider>
  );
};

export default Demo;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});
