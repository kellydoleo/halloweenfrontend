import React from "react";
import { Form, InputGroupAddon, Label, Input, InputGroupText } from 'reactstrap'

const FormOne = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.costume);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
        <Label for='addCostume'>Add Costume</Label>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputGroupAddon addonType="prepend">
        <InputGroupText>$</InputGroupText>
        <InputGroupText>$</InputGroupText>
      <Input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />
      </InputGroupAddon>
      <Input
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
    </Form>
  );
};

export default FormOne;
