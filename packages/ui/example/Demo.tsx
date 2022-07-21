import {Text, AppUIProvider, Block, Button} from 'bad-ui';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const BadUIDemoShowCase = () => {
  const [elementType, setElementType] = React.useState<'button' | 'text'>(
    'button',
  );

  const renderTextComponents = () => {
    return (
      <>
        <Text marginTop={40} bt1>
          Text Bt1
        </Text>
        <Text marginTop={40} h1>
          Text H1
        </Text>
        <Text marginTop={40} h2>
          Text H2
        </Text>
        <Text marginTop={40} h3>
          Text H3
        </Text>
        <Text marginTop={40} h4>
          Text H4
        </Text>
        <Text marginTop={40} s1>
          Text S1
        </Text>
        <Text marginTop={40} s2>
          Text S2
        </Text>
        <Text marginTop={40} s3>
          Text S3
        </Text>
        <Text marginTop={40} s4>
          Text S4
        </Text>
        <Text marginTop={40} c1>
          Text C1
        </Text>
        <Text marginTop={40} c2>
          Text C2
        </Text>
      </>
    );
  };

  const renderButtonComponents = () => {
    return (
      <>
        <Button mode="contained">Button Contained</Button>
        <Button marginTop={50} mode="outlined">
          Button Outlined
        </Button>
        <Button marginTop={50} mode="text">
          Button Text
        </Button>
      </>
    );
  };

  const renderContent = () => {
    switch (elementType) {
      case 'text':
        return renderTextComponents();
      case 'button':
        return renderButtonComponents();
      default:
        break;
    }
  };
  return (
    <Block flex={1} justify="center" align="center">
      {renderContent()}
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
