import React, { Component } from "react";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/seach-box/search-box-component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // Arrow func autmotically allows you to bind this
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <>
        <div className="App">
          <Container className="mt-4">
            <Row>
              <h1>MOnsters Rollerdesk</h1>
              <SearchBox
                placeholder="Search Monsters"
                handleChange={this.handleChange}
              />
              <CardList monsters={filteredMonsters} />
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default App;
