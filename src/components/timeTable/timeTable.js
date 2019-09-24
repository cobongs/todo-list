import React from 'react'
import './timeTable.scss'
import  {TIP_TIMETABLE} from './tip-timeTable';

class TimeTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tipTimeTable:TIP_TIMETABLE,
      isUpDataMode: false
    }
  }

  onChange = (e) => {
    const contentsNum = e.target.getAttribute('data-parent-num');
    const subMenusNum = e.target.getAttribute('data-num');

    if(subMenusNum){
      const newTimeTable = [...this.state.tipTimeTable.contents]
      newTimeTable[contentsNum].subMenus[subMenusNum] = e.target.value

      this.setState({
        contents:newTimeTable
      })
    }
  }

  changeHandle = () => {
    this.setState(state => ({
      isUpDataMode: !state.isUpDataMode
      })
    )
  }

  render () {
    let { title, description, contents }  = this.state.tipTimeTable
    return (

      <div className="time-table-wrap">
        <div className="contents">
          <h2>{title}<span>{description}</span></h2>
          <div className="list">
            {
              contents.map((subTitle, idx) => {
                return <ul key={idx}>
                    <li>{subTitle.menus}</li>

                    {subTitle['subMenus'].map((subMenus, index) => (<li key={index} onChange={this.onChange}>
                      <input type="text"
                             disabled={this.state.isUpDataMode ? '' : 'disabled'}
                             data-parent-num={idx}
                             data-num={index}
                             value={subMenus}/>
                    </li>))}
                </ul>
              })
            }
          </div>
          <div className="button">
            <button
              onClick={this.changeHandle}>
              {this.state.isUpDataMode ? '저장' : '수정'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default TimeTable

