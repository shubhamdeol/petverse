import React from 'react';
import {useColorScheme} from 'react-native';

// import {NavigationRoot} from './src/navigation';
import {Block, Demo} from 'bad-ui';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Block flex={1}>
      <Demo />
    </Block>
  );
};

export default App;
