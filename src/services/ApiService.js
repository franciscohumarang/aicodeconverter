import axios from 'axios';
import React, { Component } from 'react';

class ApiService extends Component {
  fetchData = async (url, method, headers, data) => {
    try {
      const response = await axios({
        url,
        method,
        headers,
        data,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  render() {
    const { children } = this.props;

    return children({ fetchData });
  }
}

export default ApiService;
