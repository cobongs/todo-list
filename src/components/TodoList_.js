import React from 'react'
// import PropTypes from 'prop-types'
// import ImmutablePropTypes from 'react-immutable-proptypes'

const propTypes = {}
const defaultProps = {}

class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {step} = this.props

    return (
      <div>
        {
          this.props.listData.map((item, idx) => {
            if(step !== item.status && step !== 0 ) return null

            return (<div key={idx}>
                      <input type="text"
                             value={item.value}
                             style={{border: 'none'}}
                             onChange={(e) => this.props.changeHandles(e, idx)}/>

                      <button onClick={() =>this.props.itemEdit(idx)}>
                        {item.inUpMode ? '저장' : '수정'}
                      </button>
                      <button onClick={() => this.props.itemDel(idx)}>삭제</button>
                      <input type="checkbox"
                             checked={item.status === 2}
                             onChange={() => this.props.changeCheck(idx)}/>
                    </div>)

          })
        }
        <button style={{display: this.props.step === 2 ? '' : 'none' }}
           onClick={() => this.props.allDel()}>전체삭제</button>

      </div>
    )
  }
}

TodoList.propTypes = propTypes
TodoList.defaultProps = defaultProps

export default TodoList