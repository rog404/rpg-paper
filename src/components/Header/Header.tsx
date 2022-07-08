import './Header.css';
import { FaPiggyBank } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import { Character } from '../../types/RpgTypes';

type Stats = {
  name: string;
  class: string;
  level: number;
  exp: number;
  hp: number;
  hpMax: number;
  mp: number;
  mpMax: number;
  gold: number;
};

type Props = {
  character: Stats;
  onCharacterInfoChange?: (characterNewInfo: Character) => void;
};

function Header({ character }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        setModalOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  return (
    <>
      <header>
        <div className="header--exp">
          <svg>
            <circle className="header--bg" cx="57" cy="57" r="52" />
            <circle className="header--meter" cx="57" cy="57" r="52" />
          </svg>
        </div>
        <div className="header--level">
          <span>{character.level}</span>
        </div>
        <div className="header--stats">
          <div className="header--userName">
            <span>{character.name}</span>
            <span className="header--userClass">
              {' '}
              {character.class}
            </span>
          </div>
          <div className="header--bar">
            <div className="header--hp" />
            <span className="header--barLabel header--bigBar">
              {character.hp}
              {' '}
              /
              {character.hpMax}
            </span>
          </div>
          <div className="header--bar header--lastBar">
            <div className="header--mp" />
            <span className="header--barLabel">
              {character.mp}
              {' '}
              /
              {character.mpMax}
            </span>
          </div>
          <div className="header--goldBar">
            <FaPiggyBank
              onClick={() => setModalOpen(true)}
              className="header--icon"
            />
            {character.gold}
          </div>
        </div>
      </header>
      <Modal isOpen={modalOpen} title="HP" onClose={() => setModalOpen(false)}>
        Oi tudo bem?
      </Modal>
    </>
  );
}

export default Header;
