import React from 'react'
// import PropTypes from 'prop-types'
// import ImmutablePropTypes from 'react-immutable-proptypes'

const propTypes = {}
const defaultProps = {}


class BtnsWrapper_ extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  clickHandle = (idx) => {
    this.props.callback(idx)
  }

  render() {
    const {step} = this.props

    return(
      <div>
        {
          this.props.datas.map((item, idx) => {
            return (
              <button key={idx}
                      type="button"
                      style={{background:step === idx ? 'red':'' }}
                      onClick={() => this.clickHandle(idx)}>
                {item}
              </button>
            )
          })
        }
      </div>
    )
  }
}

BtnsWrapper_.propTypes = propTypes
BtnsWrapper_.defaultProps = defaultProps

export default BtnsWrapper_