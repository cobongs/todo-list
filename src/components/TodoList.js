import React from 'react'

class TodoList extends React.Component {

  render () {
    const { listData, step } = this.props

    return (
      <div className="TodoList">
        <ul>
          <li>
            {
              listData.map((item, idx) => {
                if(step !== item.status && step !== 0) return null
                return <div key={idx}>
                  <input type="text"
                         value={item.value}
                         disabled={item.isUpdateMode ? '' : 'disabled'}
                         onChange={(e) => this.props.callback(e, idx)}/>
                  <input type="checkbox"
                         checked={item.status === 2}
                         onChange={() => this.props.itemCheck(idx)}/>
                  <button onClick={() => this.props.itemEdit(idx)}>{item.isUpdateMode ? '저장' : '수정'}</button>
                  <button onClick={() => this.props.itemDel(idx)}>삭제</button>
                </div>
              })
            }
          </li>
        </ul>
      </div>
    )
  }
}

export default TodoList

