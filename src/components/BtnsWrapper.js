import React from 'react';


class BtnsWrapper extends React.Component {
  constructor (props) {
    super(props)
  }

  clickHandler = (idx) => {
    this.props.callback(idx)
  }

  render () {
    const { step } = this.props

    return (
      <div>
        {
          step.map((value, idx) => {
            return <button key={idx}
                           onClick={() => this.clickHandler(idx)}>
                    {value}
                  </button>
          })
        }
      </div>
    )
  }
}

export default BtnsWrapper;