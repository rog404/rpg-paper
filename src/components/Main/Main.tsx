import { Attribute, Character } from '../../types/RpgTypes';
import AttributeRow from '../AttributeRow/AttributeRow';
import Inventory from '../InventoryCard/InventoryCard';
import './Main.css';

type Props = {
  character: Character
  onCharacterInfoChange: (characterNewInfo: Character) => void;
}

function Main({
  character,
  onCharacterInfoChange,
}: Props) {
  const handleAttributesChange = (attribute: Attribute) => {
    const attrPosition = character.attributes.findIndex(obj => obj.description === attribute.description)
    if (attrPosition !== -1) character.attributes[attrPosition] = attribute

    const newCharacter: Character = {
      name: character.name,
      class: character.class,
      level: character.level,
      exp: character.exp,
      hp: character.hp,
      hpMax: character.hpMax,
      mp: character.mp,
      mpMax: character.mpMax,
      gold: character.gold,
      attributes: character.attributes,
      mainInventory: character.mainInventory,
    };
    onCharacterInfoChange(newCharacter);
  };

  return (
    <main>
      <div className="main--attributes">
        {character.attributes.map((attribute, key) => <AttributeRow key={key} data={attribute} onChangeAttribute={handleAttributesChange} />)}
      </div>
      <Inventory mainInventory={character.mainInventory} />
    </main>
  );
}

export default Main;
