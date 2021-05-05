import React, { Component } from 'react'

export class Weather extends Component {
   
    


    render() {
        return (
            this.props.wtherinfo.map(value1 => {
                return( <div>
                    <p>{value1.date}</p>
                    <p>{value1.description}</p>
                </div>
               
                );
            })

        )
    }
}

export default Weather
