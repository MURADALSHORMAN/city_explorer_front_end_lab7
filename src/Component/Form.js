import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Map from './Map'
import Weather from './Weather'
import Movie from './movie'
require('dotenv').config();
// import React, { Component } from 'react'



export class form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: '',
            data: [],
            imgsrc: '',
            errview: true,
            weatherdata: [],
            lat: '',
            lon: '',
            moviedata: [],

        };
    }

    getlocation = async (event) => {
        try {
            event.preventDefault();
            const url = `https://us1.locationiq.com/v1/search.php?key=pk.2ae676db4714f30a0bb7b8a376b8a6cf&q=${this.state.location}&format=json`;
            const req = await axios.get(url);
            const lat = req.data[0].lat;
            const lon = req.data[0].lon;

            this.setState({

                data: req.data[0],
                lat: lat,
                lon: lon,
                imgsrc: `https://maps.locationiq.com/v3/staticmap?key=pk.2ae676db4714f30a0bb7b8a376b8a6cf&q&center=${lat},${lon}
            &zoom=10&size=1000x300`

            })
            this.updateweatherinfo();
            this.updatemovieinfo();


        }
        catch {
            this.setState({

                errview: false,

            });

        }
    }
    updateweatherinfo = async () => {

        const theweatherurl = `${process.env.REACT_APP_LOCAL_PORT}?lat=${this.state.lat}&lon=${this.state.lon}`;
        const newweatherdata = await axios.get(theweatherurl)
        console.log(newweatherdata.data);
        this.setState({

            weatherdata: newweatherdata.data,


        })


    }

    updatemovieinfo = async () => {

        const themovieurl = `${process.env.REACT_APP_LOCAL_PORT_MOIVE}?query=${this.state.location}&limit=8`;
        const moviedata = await axios.get(themovieurl)
        // console.log(moviedata.results);
        
        console.log(this.state.moviedata);
        // moviedata.map(value => {
        //     if (value.poster_path == null) {
        //       return  value.poster_path = '/cvNyhndV2ALXgsmeF5JaDQ712UT.jpg';

        //     }
        // }),

        this.setState({

            moviedata: moviedata.data,


        })

    }

    updatelocation = (event) => {

        this.setState({

            location: event.target.value,




        });


    }

    reloadlocation = (event) => {
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
                        <Weather wtherinfo={this.state.weatherdata} location={this.state.location} />
                        <Movie movieinfo={this.state.moviedata} />
                    </>
                </>
            )
        }
        else {
            return (
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