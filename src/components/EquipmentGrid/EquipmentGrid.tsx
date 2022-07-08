import { useState } from "react";
import { Equipments } from "../../types/RpgTypes";
import { FaPlus } from 'react-icons/fa';
import "./EquipmentGrid.css";

type Props = {
  equipments: Equipments;
  onChangeEquipment?: (equipments: Equipments) => void;
};

function EquipmentGrid({ equipments }: Props) {
  const [usedEquipment] = useState<Equipments>({})
  return (
    <div className="equipment">
      <div className={`equipment--box ${ !usedEquipment.helmet ? "equipment--disabled" : "" } equipment--helmet`}>
        {usedEquipment.helmet ? <>
          <span>{usedEquipment.helmet.name}</span>
          <span>
            {usedEquipment.helmet.equipmentBonus?.description} +{" "}
            {usedEquipment.helmet.equipmentBonus?.bonusValue}
          </span>
        </> : <FaPlus className="equipment--plusIcon"/>
        }
      </div>
      <div className={`equipment--box ${ !usedEquipment.chest ? "equipment--disabled" : "" } equipment--chest`}>
      {usedEquipment.chest ? <>
          <span>{usedEquipment.chest.name}</span>
          <span>
            {usedEquipment.chest.equipmentBonus?.description} +{" "}
            {usedEquipment.chest.equipmentBonus?.bonusValue}
          </span>
        </> : <FaPlus className="equipment--plusIcon"/>
        }
      </div>
      <div className={`equipment--box ${ !usedEquipment.pants ? "equipment--disabled" : "" } equipment--pants`}>
      {usedEquipment.pants ? <>
          <span>{usedEquipment.pants.name}</span>
          <span>
            {usedEquipment.pants.equipmentBonus?.description} +{" "}
            {usedEquipment.pants.equipmentBonus?.bonusValue}
          </span>
        </> : <FaPlus className="equipment--plusIcon"/>
        }
      </div>
      <div className={`equipment--box ${ !usedEquipment.boots ? "equipment--disabled" : "" } equipment--boots`}>
      {usedEquipment.boots ? <>
          <span>{usedEquipment.boots.name}</span>
          <span>
            {usedEquipment.boots.equipmentBonus?.description} +{" "}
            {usedEquipment.boots.equipmentBonus?.bonusValue}
          </span>
        </> : <FaPlus className="equipment--plusIcon"/>
        }
      </div>
      <div className={`equipment--box ${ !usedEquipment.gloves ? "equipment--disabled" : "" } equipment--gloves`}>
      {usedEquipment.gloves ? <>
          <span>{usedEquipment.gloves.name}</span>
          <span>
            {usedEquipment.gloves.equipmentBonus?.description} +{" "}
            {usedEquipment.gloves.equipmentBonus?.bonusValue}
          </span>
        </> : <FaPlus className="equipment--plusIcon"/>
        }
      </div>
      <div className={`equipment--box ${ !usedEquipment.weapon ? "equipment--disabled" : "" } equipment--shield`}>
      {usedEquipment.weapon ? <>
          <span>{usedEquipment.weapon.name}</span>
          <span>
            {usedEquipment.weapon.equipmentBonus?.description} +{" "}
            {usedEquipment.weapon.equipmentBonus?.bonusValue}
          </span>
        </> : <FaPlus className="equipment--plusIcon"/>
        }
      </div>
    </div>
  );
}

export default EquipmentGrid;
