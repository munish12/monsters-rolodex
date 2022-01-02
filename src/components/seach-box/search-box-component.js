import React from "react";
import Form from "react-bootstrap/Form";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <>
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Control
          type="search"
          placeholder={placeholder}
          // onChange={(e) => {
          //   this.setState({ searchField: e.target.value }, () => {
          //     console.log(this.state.searchField);
          //   });
          // }}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  );
};
