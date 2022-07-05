import './Header.css'
import { FaPiggyBank } from "react-icons/fa";

type Stats = {
  name: string
  class: string
  level: number
  exp: number
  hp: number
  hpMax: number
  mp: number
  mpMax: number
  gold: number
}

const stats = {
  name: 'Rogerio Bordignon',
  class: 'Arqueiro',
  level: 5,
  exp: 65,
  hp: 70,
  hpMax: 100,
  mp: 165,
  mpMax: 300,
  gold: 4520
}

type Props = {
  character: Stats
}

const Header = ({
  character= stats
}: Props) => {
  return (
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
          <span className='header--userClass'> {character.class}</span>
        </div>
        <div className="header--bar">
          <div className="header--hp"/>
          <span className='header--barLabel header--bigBar'>{character.hp} / {character.hpMax}</span>
        </div>
        <div className="header--bar header--lastBar">
          <div className="header--mp" />
          <span className='header--barLabel'>{character.mp} / {character.mpMax}</span>
        </div>
        <div className="header--goldBar"><FaPiggyBank className='header--icon'/>{character.gold}</div>
      </div>
    </header>
  )
}

export default Header