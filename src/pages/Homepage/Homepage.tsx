import './Homepage.css';

import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import {
  Character,
  EquipmentPosition,
  ItemType,
} from '../../types/RpgTypes';

const characterInfo: Character = {
  name: 'Rogerio Bordignon',
  class: 'Arqueiro',
  level: 5,
  exp: 65,
  hp: 70,
  hpMax: 100,
  mp: 165,
  mpMax: 300,
  gold: 4520,
  attributes: [
    {
      description: 'FOR',
      basicValue: 5,
      bonusValue: 1,
    },
    {
      description: 'VIT',
      basicValue: 4,
      bonusValue: 2,
    },
    {
      description: 'INT',
      basicValue: 5,
      bonusValue: 3,
    },
    {
      description: 'DES',
      basicValue: 6,
      bonusValue: 3,
    },
  ],
  mainInventory: {
    equipments: {
      helmet: {
        name: 'Chapéu do Andarilho',
        description: 'Andarilho',
        type: ItemType.EQUIPMENT,
        amount: 1,
        price: 0,
        equipmentPosition: EquipmentPosition.HELMET,
        equipmentBonus: { description: 'FOR', bonusValue: 7 },
      },
      chest: {
        name: 'Camisa do Andarilho',
        description: 'Andarilho',
        type: ItemType.EQUIPMENT,
        amount: 1,
        price: 0,
        equipmentPosition: EquipmentPosition.CHEST,
        equipmentBonus: { description: 'VIT', bonusValue: 10 },
      },
      pants: {
        name: 'Calça do Andarilho',
        description: 'Andarilho',
        type: ItemType.EQUIPMENT,
        amount: 1,
        price: 0,
        equipmentPosition: EquipmentPosition.PANTS,
        equipmentBonus: { description: 'VIT', bonusValue: 10 },
      },
      gloves: {
        name: 'Luvas do Andarilho',
        description: 'Andarilho',
        type: ItemType.EQUIPMENT,
        amount: 1,
        price: 0,
        equipmentPosition: EquipmentPosition.GLOVES,
        equipmentBonus: { description: 'FOR', bonusValue: 5 },
      },
      boots: {
        name: 'Botas do Andarilho',
        description: 'Andarilho',
        type: ItemType.EQUIPMENT,
        amount: 1,
        price: 0,
        equipmentPosition: EquipmentPosition.BOOTS,
        equipmentBonus: { description: 'DES', bonusValue: 5 },
      },
      weapon: {
        name: 'Arco do Andarilho',
        description: 'Andarilho',
        type: ItemType.EQUIPMENT,
        amount: 1,
        price: 0,
        equipmentPosition: EquipmentPosition.WEAPON,
        equipmentBonus: { description: 'FOR', bonusValue: 25 },
      },
    },
    bag: [
      {
        name: 'Nome',
        description: 'Descrição',
        amount: 1,
        price: 24,
        type: ItemType.OTHERS,
      },
    ],
  },
};

function Homepage() {
  const [character, setCharacter] = useState<Character>(characterInfo);
  const handleCharacterChange = (newCharacterInfo: Character) => {
    setCharacter(newCharacterInfo);
  };
  return (
    <div className="container">
      <Header
        character={character}
      />
      <Main
        character={character}
        onCharacterInfoChange={handleCharacterChange}
      />
      <Footer />
    </div>
  );
}

export default Homepage;
