import React from 'react'

class BtnsWrapper extends React.Component {
  render () {
    const { tab, activeIndex } = this.props

    return (
      <div>
        {
          tab.map((value, idx) => {
            return <button key={idx}
                           data-index={idx}
                           className={idx === activeIndex ? 'active' : ''}
                           onClick={() => this.props.callback(idx)}>
              {value['label']}
            </button>
          })
        }
      </div>
    )
  }
}

export default BtnsWrapper