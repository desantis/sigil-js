import React, { Component } from 'react'

import Lung from './views/Lung'
import Scope from './views/Scope'
import Pour from './views/Pour'
import { TabButton } from './components/UI'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: 'Lung',
    }
  }

  render() {
    let route
    if (this.state.route === 'Lung') {
      route = <Lung />
    } else if (this.state.route === 'scope') {
      route = <Scope />
    } else {
      route = <Pour />
    }

    return (
      <div className="App">
        <nav className={'top'}>
          <span>
            <TabButton
              onClick={() => this.setState({route: 'scope'})}
              keySelectedInPanel={this.state.route === 'scope'}
              title={'Scope'}
              id={'scope'} />
            <TabButton
              onClick={() => this.setState({route: 'Lung'})}
              keySelectedInPanel={this.state.route === 'Lung'}
              title={'Lung'}
              id={'Lung'} />
            <TabButton
              onClick={() => this.setState({route: 'Pour'})}
              keySelectedInPanel={this.state.route === 'Pour'}
              title={'Pour'}
              id={'Pour'} />
          </span>
        </nav>
        { route }
      </div>
    )
  }
}



export default App
