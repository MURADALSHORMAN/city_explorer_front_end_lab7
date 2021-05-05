import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Map from './Map'
import Weather from './Weather'
// import React, { Component } from 'react'



export class form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: '',
            data: [],
            imgsrc: '',
            errview: true,
            weatherdata:[]
        };
    }

    getlocation = async (event) => {
        try {
            event.preventDefault();
            const url = `https://us1.locationiq.com/v1/search.php?key=pk.2ae676db4714f30a0bb7b8a376b8a6cf&q=${this.state.location}&format=json`;
            const req = await axios.get(url);
            const lat = req.data[0].lat;
            const lon = req.data[0].lon;
            const theweatherurl= 'http://localhost:3020/Weather';
                    const newweatherdata= await axios.get(theweatherurl)
            this.setState({

                data: req.data[0],
                weatherdata:newweatherdata.data,
                imgsrc: `https://maps.locationiq.com/v3/staticmap?key=pk.2ae676db4714f30a0bb7b8a376b8a6cf&q&center=${lat},${lon}
            &zoom=10&size=1000x300`

            })



        }
        catch {
            this.setState({

                errview: false,

            });

        }
    }


    updatelocation = (event) => {

        this.setState({

            location: event.target.value,




        });


    }

    reloadlocation=(event)=>{
       window.location.reload();
       console.log('none');
    }

    render() {
        if (this.state.errview == true) {
            return (
                <>
                    <div>
                        <Form onSubmit={this.getlocation}>
                            <Form.Group controlId="formBasicEmail">
                               

                                <Form.Control onChange={this.updatelocation} type="text" placeholder="city Name" />

                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                        </Button>
                        </Form>

                    </div>
                    <>
                        <Map mapdisplay_name={this.state.data.display_name} maplat={this.state.data.lat}
                            maplon={this.state.data.lon} mapImagesrc={this.state.imgsrc} />
                    </>
                    <>
                    <Weather wtherinfo={this.state.weatherdata}/>
                    </>
                </>
            )
        }
        else {
            return(
            <Form >
                <Form.Group controlId="formBasicEmail">
                    <h3> Please Enter a correct value </h3>
                </Form.Group>
                <Button onSubmit={this.reloadlocation} variant="primary" type="submit">
                    Reload
                </Button>
            </Form>
            )
        }
    }
}

export default form
