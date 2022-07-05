import AttributeRow, { Attribute } from '../AttributeRow/AttributeRow'
import Inventory from '../Inventory/Inventory'
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

const Main = ({
  attributes = attributesValues
}: Props) => {
  return (
    <main>
      <table className="main--attributes">
        {attributes.map((attribute, key) => 
          <AttributeRow key={key} data={attribute}/>
        )}
      </table>
      {/* <Inventory /> */}
    </main>
  )
}

export default Main