import React from 'react'
import BtnsWrapper from './components/BtnsWrapper'
import TodoList from './components/TodoList'
import './App.css'
import Lotton from './components/lotto/lotto'
import TimeTable from './components/timeTable/timeTable'
// import PropTypes from 'prop-types'
// import ImmutablePropTypes from 'react-immutable-proptypes'

const propTypes = {}
const defaultProps = {}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        text:'',
        listData:[],
        tab: [
      '전체', '할일', '한일'
      ],
      step:0
    }
  }

  enter = (e) => {
    if(e.keyCode === 13){
      this.Write()
    }
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})//e
  }

  Write = () => {
    const text = this.state.text//e
    if(text === '') return

    const now = new Date().getTime()
    const newData = []
    newData.push(...this.state.listData, {
      key: now, value: text, status:1, isUpDataMode: false
    })

    this.setState({
      text: '',
      listData: newData
    })
  }

  clickHandel = (idx) => {
    this.setState({
      step: idx
    })
  }

  changeHandle = (e, idx) => {
    const newData = [...this.state.listData]
    newData[idx].value = e.target.value

    this.setState({
      listData: newData
    })
  }

  onCheck = (idx) => {
    const newData = [...this.state.listData]
    newData[idx].status = newData[idx].status === 1 ? 2 : 1

    this.setState({
      listData: newData,
      text:''
    })
  }

  onEdit = (idx) => {
    //새로운 값을 먼저 셋팅하는 이유는 같은곳에 계속 저장되선 안되므로 새로운 곳에 새로운 값으로 저장하기위해서
    //새로운 객체 구축하여 업데이트
    // const newData = [...this.state.listData]

    const newData = [...this.state.listData]
    newData[idx].isUpDataMode = !newData[idx].isUpDataMode

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

  render() {

    const {enter, handleChange, Write, clickHandel, changeHandle, onCheck, onEdit, onDel} = this
    const {text, tab, step, listData} = this.state

    return(
      <div>
        <input type="text"
               placeholder="입력하세요"
               value={text}
               onKeyUp={enter}
               onChange={handleChange}/>
        <button  onClick={Write}>실행</button>
        <BtnsWrapper tab={tab}
                     step={step}
                     clickHandel={clickHandel}/>
         <TodoList listData={listData}
                   step={step}
                   changeHandle={changeHandle}
                   onCheck={onCheck}
                   onEdit={onEdit} onDel={onDel}/>

        <button onClick={this.allDel}>전체삭제</button>

          <Lotton/>

          <TimeTable/>
      </div>
    )
  }
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App