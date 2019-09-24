import React from 'react'
// import PropTypes from 'prop-types'
// import ImmutablePropTypes from 'react-immutable-proptypes'

const propTypes = {}
const defaultProps = {}


class TodoList extends React.Component {

  render() {
    return(
      <ul className="TodoList">
        {
          this.props.listData.map((item, idx) => {
            if(this.props.step !== item.status && this.props.step !==  0) return null
            return<li key={idx}>
             <input type="text"
                    value={item.value}
                    disabled={item.isUpDataMode ? '' : 'disabled'}
                    onChange={(e) => this.props.changeHandle(e, idx)}/>
             <input type="checkbox"
                    checked={item.status === 2}
                    onChange={() => this.props.onCheck(idx)}/>
             <button onClick={() => this.props.onEdit(idx)}>
              {item.isUpDataMode ? '저장' : '수정'}
             </button>
             <button onClick={() => this.props.onDel(idx)}>삭제</button>
            </li>
          })
        }
      </ul>
    )
  }
}

TodoList.propTypes = propTypes
TodoList.defaultProps = defaultProps

export default TodoList