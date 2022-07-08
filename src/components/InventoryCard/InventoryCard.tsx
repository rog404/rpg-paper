import { Inventory } from '../../types/RpgTypes';
import EquipmentGrid from '../EquipmentGrid/EquipmentGrid';
import './InventoryCard.css';

type Props = {
  mainInventory: Inventory;
};

function InventoryCard({ mainInventory }: Props) {
  const { equipments, bag } = mainInventory;
  return (
    <div className="inventory">
      <EquipmentGrid equipments={equipments}/>
      <div className="inventory--bag">
        <div className="inventory--bagItem">{bag[0]?.name && ''}</div>
        <div className="inventory--bagItem">{bag[1]?.name && ''}</div>
        <div className="inventory--bagItem">{bag[2]?.name && ''}</div>
        <div className="inventory--bagItem">{bag[3]?.name && ''}</div>
        <div className="inventory--bagItem">{bag[4]?.name && ''}</div>
      </div>
    </div>
  );
}

export default InventoryCard;
