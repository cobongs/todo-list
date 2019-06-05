import React from 'react';

class TodoList extends React.Component {

  render() {
    const { data } = this;

    return (
      <div>
        <ul>
          <li>
          {
            data.map((item, index) => {
             return <div>
                <input/>
                <button></button>
             </div>
            })
          }
          </li>
        </ul>
      </div>
    )
  }
}

export default TodoList;

