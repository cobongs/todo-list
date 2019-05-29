import React from 'react'
// import PropTypes from 'prop-types'
// import ImmutablePropTypes from 'react-immutable-proptypes'

const propTypes = {}
const defaultProps = {}


class BtnsWrapper extends React.Component {
  constructor(props) {
    super(props)

  }

  clickHandler = (idx) => {
    this.props.callback(idx)
  }

  render() {

    return (
      <div>
        {
          this.props.datas.map((value, idx)=>{

            const style = {
              border: '1px solid #ddd',
              padding: 20,
              backgroundColor: this.props.step === idx? 'red' : ''
            }

            return (
              <span key={idx}
                    style={style}
                    onClick={()=>this.clickHandler(idx)}>
                {value}
              </span>
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