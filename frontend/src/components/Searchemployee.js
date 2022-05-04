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
      <h1>Employee Search</h1>
      <Select placeholder={placeholder} defaultValue={selectedOption} options={options} onChange={setSelectedOption}/>
      <Button variant="primary" type="submit"/>
    </div>
  )
}


export default Searchemployee