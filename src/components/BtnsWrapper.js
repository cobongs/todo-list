import React from 'react'

class BtnsWrapper extends React.Component {

  render () {

    return (
      <div>
        {
          this.props.tab.map((item, idx) => {
            return <button key={idx}
                           onClick={() => this.props.callback(idx)}>
              {item}
            </button>
          })
        }
      </div>
    )
  }
}

export default BtnsWrapper