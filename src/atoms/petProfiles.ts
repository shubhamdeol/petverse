import {PetProfileInfo} from '../types';
import {persistedAtom} from '../utils/persistance';

export const _petProfiles = persistedAtom<PetProfileInfo[] | null>(
  'petProfiles',
  null,
);
