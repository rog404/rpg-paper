/* eslint-disable no-unused-vars */
export type EquipmentBonus = {
  description: string;
  bonusValue: number;
};

export enum EquipmentPosition {
  HELMET = 'Capacete',
  CHEST = 'Armadura',
  PANTS = 'Calça',
  GLOVES = 'Luvas',
  BOOTS = 'Botas',
  WEAPON = 'Arma',
}

export enum ItemType {
  UTILITY = 'Utilidade',
  EQUIPMENT = 'Equipamento',
  OTHERS = 'Outros',
}

export type Item = {
  name: string;
  description: string;
  amount: number;
  price: number;
  type: ItemType;
  equipmentPosition?: EquipmentPosition;
  equipmentBonus?: EquipmentBonus;
};

export type Equipments = {
  helmet?: Item;
  chest?: Item;
  pants?: Item;
  gloves?: Item;
  boots?: Item;
  weapon?: Item;
};
export type Attribute = {
  description: string;
  basicValue: number;
  bonusValue?: number;
  buffValue?: number;
};

export type Inventory = {
  equipments: Equipments;
  bag: Item[];
};

export type Character = {
  name: string;
  class: string;
  level: number;
  exp: number;
  hp: number;
  hpMax: number;
  mp: number;
  mpMax: number;
  gold: number;
  attributes: Attribute[];
  mainInventory: Inventory;
  box?: Item[];
};
