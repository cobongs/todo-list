import React from 'react'


class Lotto extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lotto_text:'',
      listData:[]
    }
  }

  Lotto = () => {
    let lotto = new Array(6)
    let count = 0;
    let overl = true;

    while (count < 6) {
      let number = 0;
      number = parseInt(Math.random() * 45) + 1;

      for (let i = 0; i < count; i++) {
        if (lotto[i] === number) overl = false;
      }
      if (overl) {
        lotto[count] = number;
        count++
      }
      overl = true
    }
    const lotto_text = lotto.reduce((val, num) => {
      return val + num + " "
    }, "")

    this.setState({
      lotto_text
    })
  }

  render () {

    const spanStyle = {
      border: "1px solid #eee",
      width: "200px",
      height: "30px",
      display: "inline-block",
      lineHeight: "30px",
      textAlign: "center"
    }

    return (
      <div>
        <span style={spanStyle}>{this.state.lotto_text}</span>
        <button style={{verticalAlign: 'top', marginTop: '7px'}} onClick={this.Lotto}>로또생성</button>
      </div>
    )
  }
}
export default Lotto

