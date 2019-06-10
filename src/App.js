import React from 'react'
import BtnsWrapper from './components/BtnsWrapper'
import TodoList from './components/TodoList'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeIndex: 0,
      listData: [],
      text: '',
      step: 0,
      tab: [
        '전체', '할일', '한일'
      ]
    }
  }

  enter = (e) => {
    if (e.keyCode === 13) {
      this.write()
    }
  }

  onChangeHandel = (e) => {
    this.setState({ text: e.target.value })
  }

  write = () => {
    const text = this.state.text
    if (text === '') return

    const newData = []
    const now = new Date().getTime()
    newData.push(...this.state.listData, {
      key: now, value: text, status: 1, isUpdateMode: false
    })

    this.setState({
      listData: newData,
      text: ''
    })
  }

  step = (idx) => {
    console.log(idx)
    this.setState({
      step: idx,
      activeIndex: idx

    })
  }

  handelChange = (e, idx) => {
    const newData = [...this.state.listData]
    newData[idx].value = e.target.value

    this.setState({
      listData: newData
    })
  }

  onCkecked = (idx) => {
    const newData = [...this.state.listData]
    newData[idx].status = newData[idx].status === 1 ? 2 : 1

    this.setState({
      listData: newData,
      text:''
    })
  }

  onEdit = (idx) => {
    const newData = [...this.state.listData]
    newData[idx].isUpdateMode =! newData[idx].isUpdateMode

    this.setState({
      listData: newData,
      text:''
    })
  }

  onDel = (idx) => {
      const newData = [...this.state.listData]
      newData.splice(idx, 1)

      this.setState({
        listData: newData
      })
  }

  allDel = () => {
    const newData = [...this.state.listData]
    const all = newData.filter(item => item.status === 1)

    this.setState({
      listData: all
    })
  }

  render () {

    return (
      <div>
        <div>
          <input type="text"
                 placeholder="입력하세요"
                 value={this.state.text}
                 onKeyUp={this.enter}
                 onChange={this.onChangeHandel}/>
          <button onClick={this.write}>실행</button>

          <BtnsWrapper tab={this.state.tab}
                       activeIndex={this.state.activeIndex}
                       callback={this.step}/>

         <TodoList listData={this.state.listData}
                   step={this.state.step}
                   handelChange={this.handelChange}
                   onCkecked={this.onCkecked}
                   onEdit={this.onEdit}
                   onDel={this.onDel}/>

          <button onClick={this.allDel}>전체삭제</button>
        </div>
      </div>
    )
  }
}

export default App