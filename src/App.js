import React from 'react';
import Form from './Component/Form';
import Nav from './Component/Nav';
import Footer from './Component/Footer';




export class App extends React.Component {


  render() {

    return (
      <div>
        <Nav />
        <br/>
        <Form />
        <Footer />
      </div>



    )
  }
}

export default App



