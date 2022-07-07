export type Attribute = {
  description: string
  basicValue: number
  bonusValue?: number
  buffValue?: number
}

export enum ItemType {
  UTILITY = 'Utilidade',
  EQUIPMENT = 'Equipamento',
  OTHERS = 'Outros'
}

export enum EquipmentPosition {
  HELMET = 'Capacete',
  CHEST = 'Armadura',
  PANTS = 'Calça',
  GLOVES = 'Luvas',
  BOOTS = 'Botas',
  WEAPON = 'Arma' 
}

export type EquipmentBonus = {
  description: string,
  bonusValue: number
}

export type Item = {
  name: string
  description: string
  amount: number
  price: number
  type: ItemType
  equipmentPosition?: EquipmentPosition
  equipmentBonus?: EquipmentBonus
}

export type Equipments = {
  helmet: Item
  chest: Item
  pants: Item
  gloves: Item
  boots: Item
  weapon: Item
}