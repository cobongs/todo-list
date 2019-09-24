import React from 'react'
// import PropTypes from 'prop-types'
// import ImmutablePropTypes from 'react-immutable-proptypes'

const propTypes = {}
const defaultProps = {}


class BtnsWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div>
        {
          this.props.tab.map((item, idx) => {
            return <button key={idx}
                           className={idx === this.props.step ? 'active' : ''}
                           onClick={() => this.props.clickHandel(idx)}>
              {item}
            </button>
          })
        }
      </div>
    )
  }
}

BtnsWrapper.propTypes = propTypes
BtnsWrapper.defaultProps = defaultProps

export default BtnsWrapper