import React from 'react'
import TodoList from './components/TodoList'
import BtnsWrapper from './components/BtnsWrapper'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeIndex: 0,
      text: '',
      listData: [],
      step:0
    }

    this.tab = [
      { label: '전체'},
      { label: '할일'},
      { label: '한일'}
    ]
  }

  enter = (e) => {
    if (e.keyCode === 13) {
      this.write()
    }
  }

  handelOnChange = (e) => {
    this.setState({ text: e.target.value })
  }

  write = () => {
    const text = this.state.text
    if (text === '') return

    const newData = []
    const now = new Date().getTime()
    newData.push(...this.state.listData,
      { key: now, value: text, status: 1, isUpdateMode: false }
      )

    this.setState({
      listData: newData,
      text: ''
    })
  }

  setStep = (idx) => {
    this.setState({
      step: idx,
      activeIndex: idx
    })
  }

  changeHandler = (e, idx) => {
    const newData = [...this.state.listData]
    newData[idx].value = e.target.value

    this.setState({
      listData: newData
    })
  }

  itemCheck = (idx) => {
    const newData = [...this.state.listData]
    newData[idx].status = newData[idx].status === 1 ? 2 : 1
    this.setState({
      listData: newData,
      text: ''
    })
  }

  itemEdit = (idx) => {
    const newData = [...this.state.listData]
    newData[idx].isUpdateMode =! newData[idx].isUpdateMode

    this.setState({
      listData: newData,
      text:''
    })
  }

  itemDel = (idx) => {
    const newData = [...this.state.listData]
    newData.splice(idx, 1)

    this.setState({
      listData: newData
    })
  }

  render () {
    return (
      <div>
        <div className="writeWrap">
          <input type="text"
                 onKeyUp={this.enter}
                 value={this.state.text}
                 onChange={this.handelOnChange}
          />
          <button onClick={this.write}>실행</button>
        </div>

        <BtnsWrapper tab={this.tab}
                     activeIndex={this.state.activeIndex}
                     callback={this.setStep}/>

        <TodoList listData={this.state.listData}
                  callback={this.changeHandler}
                  step={this.state.step}
                  itemCheck={this.itemCheck}
                  itemEdit={this.itemEdit}
                  itemDel={this.itemDel}

        />

      </div>
    )
  }
}

export default App