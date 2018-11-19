import React, { Component } from 'react'



class JoinPageComponent extends Component{

    render (){
        console.log(this.props)
        return(
            <div>
                Hellos
                <button onClick={this.props.onJoin}>join</button>
            </div>
        )
    }
}
export const JoinPage = JoinPageComponent;
