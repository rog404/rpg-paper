import AttributeRow, { Attribute } from '../AttributeRow/AttributeRow'
import Inventory, { EquipmentPosition, ItemType } from '../Inventory/Inventory'
import './Main.css'

type Props = {
  attributes: Attribute[]
}

const attributesValues: Attribute[] = [
  {
    description: 'FOR',
    basicValue: 5,
    bonusValue: 1,
  },
  {
    description: 'VIT',
    basicValue: 4,
    bonusValue: 2
  },
  {
    description: 'INT',
    basicValue: 5,
    bonusValue: 3
  },
  {
    description: 'DES',
    basicValue: 6,
    bonusValue: 3
  }
]

const defaultAttributes: Attribute[] = [
  {
    description: 'FOR',
    basicValue: 1,
    bonusValue: 1,
  },
  {
    description: 'VIT',
    basicValue: 1,
    bonusValue: 1
  },
  {
    description: 'INT',
    basicValue: 1,
    bonusValue: 1
  },
  {
    description: 'DES',
    basicValue: 1,
    bonusValue: 1
  }
]

const equipmentsTest = {
  helmet: {
    name: 'Chapéu do Andarilho',
    description: 'Andarilho',
    type: ItemType.EQUIPMENT,
    amount: 1,
    price: 0,
    equipmentPosition: EquipmentPosition.HELMET,
    equipmentBonus: {description: 'FOR', bonusValue: 7}
  },
  chest: {
    name: 'Camisa do Andarilho',
    description: 'Andarilho',
    type: ItemType.EQUIPMENT,
    amount: 1,
    price: 0,
    equipmentPosition: EquipmentPosition.CHEST,
    equipmentBonus: {description: 'VIT', bonusValue: 10}
  },
  pants: {
    name: 'Calça do Andarilho',
    description: 'Andarilho',
    type: ItemType.EQUIPMENT,
    amount: 1,
    price: 0,
    equipmentPosition: EquipmentPosition.PANTS,
    equipmentBonus: {description: 'VIT', bonusValue: 10}
  },
  gloves: {
    name: 'Luvas do Andarilho',
    description: 'Andarilho',
    type: ItemType.EQUIPMENT,
    amount: 1,
    price: 0,
    equipmentPosition: EquipmentPosition.GLOVES,
    equipmentBonus: {description: 'FOR', bonusValue: 5}
  },
  boots: {
    name: 'Botas do Andarilho',
    description: 'Andarilho',
    type: ItemType.EQUIPMENT,
    amount: 1,
    price: 0,
    equipmentPosition: EquipmentPosition.BOOTS,
    equipmentBonus: {description: 'DES', bonusValue: 5}
  },
  weapon: {
    name: 'Arco do Andarilho',
    description: 'Andarilho',
    type: ItemType.EQUIPMENT,
    amount: 1,
    price: 0,
    equipmentPosition: EquipmentPosition.WEAPON,
    equipmentBonus: {description: 'FOR', bonusValue: 25}
  }
}

const bag = [
  {
    name: 'Nome',
    description: 'Descrição',
    amount: 1,
    price: 24,
    type: ItemType.OTHERS
  }
]

const Main = ({
  attributes
}: Props) => {
  return (
    <main>
      <table className="main--attributes">
        {attributes.map((attribute, key) => 
          <AttributeRow key={key} data={attribute}/>
        )}
      </table>
      <Inventory equipments={equipmentsTest} bag={bag}/>
    </main>
  )
}

export default Main