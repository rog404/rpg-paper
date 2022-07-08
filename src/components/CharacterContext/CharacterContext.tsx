import { createContext } from 'react';
import { Character } from '../../types/RpgTypes';

type Props = {
  character?: Character;
};

export const CharacterContext = createContext<Props>({});
