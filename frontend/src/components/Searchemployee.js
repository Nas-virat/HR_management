import React, {useState} from 'react'

import Select from 'react-select';
import './Searchemployee.css';
import Button from 'react-bootstrap/Button';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Searchemployee = ({placeholder}) => {

  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className ="searchemployee-container">
      <Select className ="searchemployee-select" placeholder={placeholder} defaultValue={selectedOption} options={options} onChange={setSelectedOption}/>
      <Button className ="searchemployee-button" variant="success" type="submit">Search</Button>
    </div>
  )
}


export default Searchemployee