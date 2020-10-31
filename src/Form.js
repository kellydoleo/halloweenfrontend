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

  return(
    <Form onSubmit={handleSubmit} className='formInputs'>
      <Label className='label' for='addCostume' >Add Costume</Label>
      <Input style={{ backgroundColor: 'white', borderColor: '#333', margin: '10px', paddingTop: '5px', paddingBottom: '5px', width: '400px'}}
        type="text"
        name="name"
        placeholder='Enter Costume Name'
        value={formData.name}
        onChange={handleChange}
      />
      {/* <InputGroupAddon addonType="prepend"> */}
        {/* <InputGroupText>$</InputGroupText> */}
        {/* Below line is creating a dublicate $ on the page */}
        {/* <InputGroupText>$</InputGroupText> */}
      <Input style={{ backgroundColor: 'white', borderColor: '#333', margin: '10px', paddingTop: '5px', paddingBottom: '5px', width: '400px'}}
        type="text"
        name="price"
        placeholder='Enter Price'
        value={formData.price !== 0 ? `$ ${formData.price}` : null}
        onChange={handleChange}
      />
      {/* </InputGroupAddon> */}
      <Input className='inputForm' style={{ backgroundColor: 'white', borderColor: '#333', margin: '10px', paddingTop: '5px', paddingBottom: '5px', width: '400px'}}
        placeholder='Enter Image Address'
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}
      />
      <input type="submit" value={props.label} className='submitButton'/>
    </Form>
  );
};

export default FormOne;
