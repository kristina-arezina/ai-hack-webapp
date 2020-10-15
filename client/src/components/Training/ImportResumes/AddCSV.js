import React, { Component } from 'react'
import { CSVReader } from 'react-papaparse'
import Button from '@material-ui/core/Button';
import Axios from "axios";

export default class AddCSV extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
    data: []
  };

  componentDidMount() {

    Axios({
      method: "GET",
      url: "http://localhost:5000/api/hello",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log(res.data);
    });

  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
    
  //   return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.data }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  handleOnDrop = (data) => {
    console.log('---------------------------')
    console.log("data", data)
    this.setState({ data: data })
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