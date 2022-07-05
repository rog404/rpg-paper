import './AttributeRow.css'
import { FaMinus, FaPlus } from "react-icons/fa";

export type Attribute = {
  description: string
  basicValue: number
  bonusValue?: number
  buffValue?: number
}

type Props = {
  data: Attribute
}

const AttributeRow = ({
  data
}: Props) => {
  return (
    <div className="attribute">
      <h3>
        <span className='attribute--description'>{data.description}</span>
        <a href="#"><FaMinus className='attribute--icon'/></a>
        <span className='attribute--basicValue'>{data.basicValue}</span>
        <a href="#"><FaPlus className='attribute--icon'/></a>
        <span className='attribute--bonusValue'>( {data.bonusValue} )</span>
        <input type="text" />
        <span className='attribute--total'>{data.basicValue + (data.bonusValue ?? 0) + (data.buffValue ?? 0)}</span>
      </h3>
    </div>
  )
}

export default AttributeRow