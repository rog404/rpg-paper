import { useState } from "react";
import { Equipments } from "../../types/RpgTypes";
import "./EquipmentGrid.css";

type Props = {
  equipments: Equipments;
  onChangeEquipment?: (equipments: Equipments) => void;
};

function EquipmentGrid({ equipments }: Props) {
  const [usedEquipment] = useState<Equipments>(equipments)
  return (
    <div className="inventory--equipment">
      <div className={`inventory--equipmentBox ${ !usedEquipment.helmet ? "equipmentDisabled" : "" } inventory--equipmentHelmet`}>
        {usedEquipment.helmet && <>
          <span>{usedEquipment.helmet.name}</span>
          <span>
            {usedEquipment.helmet.equipmentBonus?.description} +{" "}
            {usedEquipment.helmet.equipmentBonus?.bonusValue}
          </span>
        </>}
      </div>
      <div className={`inventory--equipmentBox ${ !usedEquipment.chest ? "equipmentDisabled" : "" } inventory--equipmentChest`}>
      {usedEquipment.chest && <>
          <span>{usedEquipment.chest.name}</span>
          <span>
            {usedEquipment.chest.equipmentBonus?.description} +{" "}
            {usedEquipment.chest.equipmentBonus?.bonusValue}
          </span>
        </>}
      </div>
      <div className={`inventory--equipmentBox ${ !usedEquipment.pants ? "equipmentDisabled" : "" } inventory--equipmentPants`}>
      {usedEquipment.pants && <>
          <span>{usedEquipment.pants.name}</span>
          <span>
            {usedEquipment.pants.equipmentBonus?.description} +{" "}
            {usedEquipment.pants.equipmentBonus?.bonusValue}
          </span>
        </>}
      </div>
      <div className={`inventory--equipmentBox ${ !usedEquipment.boots ? "equipmentDisabled" : "" } inventory--equipmentBoots`}>
      {usedEquipment.boots && <>
          <span>{usedEquipment.boots.name}</span>
          <span>
            {usedEquipment.boots.equipmentBonus?.description} +{" "}
            {usedEquipment.boots.equipmentBonus?.bonusValue}
          </span>
        </>}
      </div>
      <div className={`inventory--equipmentBox ${ !usedEquipment.gloves ? "equipmentDisabled" : "" } inventory--equipmentGloves`}>
      {usedEquipment.gloves && <>
          <span>{usedEquipment.gloves.name}</span>
          <span>
            {usedEquipment.gloves.equipmentBonus?.description} +{" "}
            {usedEquipment.gloves.equipmentBonus?.bonusValue}
          </span>
        </>}
      </div>
      <div className={`inventory--equipmentBox ${ !usedEquipment.weapon ? "equipmentDisabled" : "" } inventory--equipmentShield`}>
      {usedEquipment.weapon && <>
          <span>{usedEquipment.weapon.name}</span>
          <span>
            {usedEquipment.weapon.equipmentBonus?.description} +{" "}
            {usedEquipment.weapon.equipmentBonus?.bonusValue}
          </span>
        </>}
      </div>
    </div>
  );
}

export default EquipmentGrid;
