import React from 'react';
import {Block, Text} from 'bad-ui';
import {useAtom} from 'jotai';
import {_petProfiles} from '../atoms/petProfiles';
import {api} from '../utils/api';
import {FlatList} from 'react-native';
import {PetProfile} from '../components';

function Home() {
  const [petProfiles, setPetProfiles] = useAtom(_petProfiles);

  const getPetProfiles = React.useCallback(async () => {
    try {
      const {data} = await api.get(
        'https://62e75b9d0e5d74566af2b5a6.mockapi.io/api/v1/pet_profiles',
      );
      setPetProfiles(data);
    } catch (error) {}
  }, [setPetProfiles]);

  React.useEffect(() => {
    getPetProfiles();
  }, [getPetProfiles]);

  return (
    <Block mt="l" align="center" justify="center">
      <FlatList
        data={petProfiles || []}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PetProfile item={item} />}
      />
    </Block>
  );
}

export default Home;
