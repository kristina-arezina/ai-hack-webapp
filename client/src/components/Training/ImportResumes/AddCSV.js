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

  handleOnDrop = (data) => {
    console.log('---------------------------')
    console.log("data", data)
    this.setState({ data: data })
    axios.post('http://localhost:6001/api/world', {
      data: this.state.data,
    })
    .then((res) => {
      console.log(res.data);
      let response = res.data
      this.setState({ responseToPost: response });
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
        <p>{this.state.responseToPost}</p>
      </>
    )
  }
}