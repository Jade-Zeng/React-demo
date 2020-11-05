import './Consultation.css'
import React from 'react'

export default class Consultation extends React.Component{
    constructor () {
        super();
        this.state = {
            numbers: [{ id: "1", message: "1111111" }, 
            { id: "2", message: "2222222" }, 
            { id: "3", message: "333333" }], 
            animate: false,
            timeId: null
        }
    }

    componentDidMount () {
        this.setState({
            timeId: setInterval(this.Dt, 2000)
        })
        // setTimeout(() => {
        //     clearInterval(this.state.timeId)
        // }, 10000)
    }

    Dt = () => {
        console.log(777)
        this.setState({ animate: true });   // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(() => {      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
          this.state.numbers.push(this.state.numbers[0]);  // 将数组的第一个元素添加到数组的
          this.state.numbers.shift();               //删除数组的第一个元素
          this.setState({ animate: false }); // margin-top 为0 的时候取消过渡动画，实现无缝滚动
          this.forceUpdate();
        }, 1000)
      }
     
    render () {
        return (
            <div className="cosultationwrap">
                    <div className="cosulationnews">
                        <ul className={this.state.animate ? 'anim' : ''}>
                            {this.state.numbers.map((item, index) => (
                                <li className="consulationnewsitem" key={item.id}>
                                    {item.message}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
        )
    }
}