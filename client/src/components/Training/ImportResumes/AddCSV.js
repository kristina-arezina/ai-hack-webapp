import React, { Component } from 'react'
import { CSVReader } from 'react-papaparse'
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class AddCSV extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
    data: []
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
    
  //   return body;
  // };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   axios.post('/api/world', {
  //     body: JSON.stringify({ post: this.state.data })
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   }, (error) => {
  //     console.log(error);
  //   });
  //   // const response = await fetch('/api/world', {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //   },
  //   //   body: JSON.stringify({ post: this.state.data }),
  //   // });
  //   // const body = await response.text();
    
  //   this.setState({ responseToPost: body });
  // };

  handleOnDrop = (data) => {
    console.log('---------------------------')
    console.log("data", data)
    this.setState({ data: data })
    axios.post('http://localhost:6001/api/world', {
      data: this.state.data,
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });

    console.log('---------------------------')
  }

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  handleOnRemoveFile = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }

  render() {
    return (
      <>
        <h5>Click and Drag Upload</h5>
        <CSVReader
          onDrop={this.handleOnDrop}
          onError={this.handleOnError}
          addRemoveButton
          onRemoveFile={this.handleOnRemoveFile}
        >
          <span>Drop CSV file here or click to upload.</span>
        </CSVReader>
        <form onSubmit={this.handleSubmit}>
          <Button style={{marginBottom: "0%", padding:"1%", margin: "1%"}} variant="contained" type="submit">Submit Data</Button>
        </form>
        <p>{this.state.responseToPost}</p>
      </>
    )
  }
}