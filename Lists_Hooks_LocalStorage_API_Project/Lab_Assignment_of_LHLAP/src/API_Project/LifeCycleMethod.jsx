import React, { Component } from "react";

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], 
      loading: true, 
      error: null, 
    };
  }

  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    
    if (loading) {
      return <h2>Loading...</h2>;
    }

    
    if (error) {
      return <h2>Error: {error}</h2>;
    }

    return (
      <div style={{ padding: "20px" }}>
        <h1>Fetched Data</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataFetcher;
