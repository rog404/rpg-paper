import './Inventory.css'

enum ItemType {
  UTILITY = 'Utilidade',
  EQUIPMENT = 'Equipamento',
  OTHERS = 'Outros'
}

enum EquipmentPosition {
  HELMET = 'Capacete',
  CHEST = 'Armadura',
  PANTS = 'Calça',
  GLOVES = 'Luvas',
  BOOTS = 'Botas',
  WEAPON = 'Arma' 
}

type EquipmentBonus = {
  description: string,
  bonusValue: number
}

type Item = {
  name: string
  description: string
  amount: number
  price: number
  type: ItemType
  equipmentPosition?: EquipmentPosition
  equipmentBonus?: EquipmentBonus
}

const itemDefault: Item = {
  name: 'Undefined Item',
  description: 'It is a default description',
  type: ItemType.OTHERS,
  amount: 1,
  price: 0
}

type Equipments = {
  helmet: Item
  chest: Item
  pants: Item
  gloves: Item
  boots: Item
  weapon: Item
}

type Props = {
  equipments: Equipments
  bag: Item[]
}

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

const Inventory = ({
  equipments = equipmentsTest,
  bag
}: Props) => {
  return (
    <div className="inventory">
      <div className="inventory--equipment">
        <div className="inventory--equipmentBox inventory--equipmentHelmet">
          <span>{equipments.helmet.name}</span>
          <span>{equipments.helmet.equipmentBonus?.description} + {equipments.helmet.equipmentBonus?.bonusValue}</span>
        </div>
        <div className="inventory--equipmentBox inventory--equipmentChest">
          <span>{equipments.chest.name}</span>
          <span>{equipments.chest.equipmentBonus?.description} + {equipments.chest.equipmentBonus?.bonusValue}</span>
        </div>
        <div className="inventory--equipmentBox inventory--equipmentPants">
          <span>{equipments.pants.name}</span>
          <span>{equipments.pants.equipmentBonus?.description} + {equipments.pants.equipmentBonus?.bonusValue}</span>
        </div>
        <div className="inventory--equipmentBox inventory--equipmentBoots">
          <span>{equipments.boots.name}</span>
          <span>{equipments.boots.equipmentBonus?.description} + {equipments.boots.equipmentBonus?.bonusValue}</span>
        </div>
        <div className="inventory--equipmentBox inventory--equipmentGloves">
          <span>{equipments.gloves.name}</span>
          <span>{equipments.gloves.equipmentBonus?.description} + {equipments.gloves.equipmentBonus?.bonusValue}</span>
        </div>
        <div className="inventory--equipmentBox inventory--equipmentShield">
          <span>{equipments.weapon.name}</span>
          <span>{equipments.weapon.equipmentBonus?.description} + {equipments.weapon.equipmentBonus?.bonusValue}</span>
        </div>
      </div>
      <div className="inventory--bag">
        <div className="inventory--bagItem"></div>
        <div className="inventory--bagItem"></div>
        <div className="inventory--bagItem"></div>
        <div className="inventory--bagItem"></div>
        <div className="inventory--bagItem"></div>
      </div>
    </div>
  )
}

export default Inventory