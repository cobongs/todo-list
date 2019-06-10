import React from 'react'

class TodoList extends React.Component {

  render () {
    return (
      <ul className="TodoList">
        {
          this.props.listData.map((item, idx) => {
            if (this.props.step !== item.status && this.props.step !== 0) return null
            return <li key={idx}>
              <input type="text"
                     value={item.value}
                     onChange={(e) => this.props.handelChange(e, idx)}
                      disabled={item.isUpdateMode ? '' : 'disabled'}/>
              <input type="checkbox"
                     checked={item.status === 2}
                     onChange={() => this.props.onCkecked(idx)}/>
              <button onClick={() => this.props.onEdit(idx)}>
                {item.isUpdateMode ? '저장' : '수정'}
              </button>
              <button onClick={() => this.props.onDel(idx)}>삭제</button>
            </li>
          })
        }
      </ul>
    )
  }
}

export default TodoList