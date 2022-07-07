import './AttributeRow.css'
import { FaMinus, FaPlus } from "react-icons/fa";
import { Attribute } from '../../types/RpgTypes';
import { useState } from 'react';

type Props = {
  data: Attribute
}

const AttributeRow = ({
  data
}: Props) => {
  const [basicValue, setBasicValue] = useState(data.basicValue)
  const [buffValue, setBuffValue] = useState(0)

  const handleBasicValue = (plus:boolean) => {
    plus 
      ? setBasicValue(basicValue + 1)
      : setBasicValue(basicValue - 1)
    basicValue > 99 && setBasicValue(99)
    basicValue < 0 && setBasicValue(0)
  }

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target
    const parsedValue = parseInt(value)
    isNaN(parsedValue) && setBuffValue(0)
    setBuffValue(parsedValue)
    buffValue < 0 && setBuffValue(0)
  }

  return (
    <div className="attribute">
      <h3>
        <span className='attribute--description'>{data.description}</span>
        <a onClick={() => handleBasicValue(false)}><FaMinus className='attribute--icon'/></a>
        <span className='attribute--basicValue'>{basicValue}</span>
        <a onClick={() => handleBasicValue(true)}><FaPlus className='attribute--icon'/></a>
        <span className='attribute--bonusValue'>( {data.bonusValue} )</span>
        <input type="number" value={buffValue} onChange={(event) => handleInputChange(event)}/>
        <span className='attribute--total'>{basicValue + (data.bonusValue ?? 0) + buffValue}</span>
      </h3>
    </div>
  )
}

export default AttributeRow