import React, { Component } from 'react'
import { toPlanetName } from 'urbit-ob'
import { map } from 'lodash'

import {
  randomShip,
} from '../lib/lib'

import {
  seq,
} from '../lib/lib.array'

import { pour } from '../lib/pour'

import ReactSVGComponents from '../renderers/ReactSVGComponents'

// import sylmap from '../sylmaps/sylmap'
import sylmap from '../sylmaps/sylmap-c.json'

import { InputBox } from '../components/UI'


class Pour extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seals: false,
      patp: '~ridlur-figbud',
    }
  }

  componentDidMount = () => {
    this.setState({ patp: toPlanetName(randomShip('planet')) })
  }


  // exportSVG = () => {
  //   const data = paper.project.exportSVG({ asString: true })
  //   // fileDownload(data, 'seal.svg')
  // }


  render = () => {
    const { patp } = this.state
    return (
      <div>

        <button onClick={() => this.setState({ patp: toPlanetName(randomShip('planet')) })}>
          {'Random @P'}
        </button>
        <InputBox
          placeholder={'~ridlur-figbud'}
          title={'Submit'}
          submit={(content) => {
            this.setState({patp: content})
          }}
        />
        {
          pour({
            patp: patp,
            sylmap: sylmap,
            renderer: ReactSVGComponents,
            size: 256,
          })
        }
          <p>{patp}</p>


        <div className={'flex-c w100'}>
        <div className={'breakAfter'}>
          {
            map(seq((3 * 4 * 16)), n => {
              const randPlanet = toPlanetName(randomShip('planet'))
              return <div className={'ml-2 pba nob'}>
              {pour({
                patp: randPlanet,
                sylmap: sylmap,
                renderer: ReactSVGComponents,
                size: 256,
                colorway: ['white', 'black'],
              })}
              <p className={'mono tssub'}>{randPlanet}</p>
              </div>
            })
          }

        </div>
        </div>
      </div>
    )
  }
}


export default Pour
