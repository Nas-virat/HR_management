import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import './Search.css';
import Button from 'react-bootstrap/Button';
/*
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
*/

const Search = ({placeholder,options,link}) => {

  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate( link + selectedOption.value);
    }


  return (
    <div className ="search-container">
      <Select className = "search-select" placeholder={placeholder} defaultValue={selectedOption} options={options} onChange={setSelectedOption}/>
      <Button className = "search-button" variant="success" type="submit" onClick = {handleSubmit}>Search</Button>
    </div>
  )
}


export default Search