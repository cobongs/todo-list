import React from 'react'
import Button from './toDoList'
// import PropTypes from 'prop-types'
// import ImmutablePropTypes from 'react-immutable-proptypes'

const propTypes = {}
const defaultProps = {}


class BtnsWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        {
          this.props.datas((value, idx)=>{
            return (
              <button >
                {value}
              </button>
            )
          })
        }
      </div>
    )
  }
}

BtnsWrapper.propTypes = propTypes
BtnsWrapper.defaultProps = defaultProps

export default BtnsWrapper