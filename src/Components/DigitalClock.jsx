import { Component } from 'react'
import "../Style/Style.css"
export default class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {
            time : new Date().toLocaleTimeString(),
            day : new Date().toLocaleDateString(undefined, {weekday : "long"})
        };
    }
    componentDidMount(){    //to update the time every second
        this.timeId = setInterval(()=>{
            this.setState({
                time: new Date().toLocaleTimeString(),
                day: new Date().toLocaleDateString(undefined,{weekday:"long"})
                })
        },1000);
    }
    render(){
        return(
            <div className='clk-container' >
                <div className='clock'>
                    {this.state.time}
                </div>
                <div className='day'>
                    {this.state.day} 
                </div>
            </div>
        )
    }
}