import './Homepage.css'

import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Main from "../../components/Main/Main"
import { Attribute } from '../../components/AttributeRow/AttributeRow'

const rogerio = {
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

const Homepage = () => {
  return (
    <div className="container">
      <Header character={rogerio}/>
      <Main attributes={attributesValues}/>
      <Footer />
    </div>
  )
}

export default Homepage