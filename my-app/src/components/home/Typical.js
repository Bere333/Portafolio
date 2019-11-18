import React from 'react'
import Typical from 'react-typical'

class TypicalComponent extends React.Component {
  render () {
    return (
        <div className="my-name">

            <Typical
              steps={['Hola, mi nombre es ', 3000, 'Berenice Ramos', 3000, 'y soy programadora...', 3000]}
              loop={Infinity}
              wrapper="p"
            />
        </div>
    )
  }
}


export default TypicalComponent;