import React from 'react'

class BtnsWrapper extends React.Component {

  render () {

    const { activeIndex} = this.props

    return (
      <div>
        {
          this.props.tab.map((item, idx) => {
            return <button key={idx}
                           className={idx === activeIndex ? 'active' : '' }
                           data-index={idx}
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