import React from 'react';
import { Select } from 'react-materialize';
import "materialize-css/dist/css/materialize.min.css";
import "./Style.css";

const Dropdown = (props) => {
    return (            
        <div className="dropdown-container">
            <Select 
                onChange={props.onSelect} 
                id="Select-9" 
                multiple={false} 
                options={{
                    classes: 'custom-dropdown',
                    dropdownOptions: {
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: false,
                        coverTrigger: false,
                        hover: true,
                        inDuration: 300,
                        outDuration: 300
                    }
                }}
                value={props.category}
            >   
                <option disabled value="">Choose Category</option>
                <option value="All Categories">All Categories</option>
                {props.bills.map((bill, index) => (
                    <option key={index} value={bill.category}>{bill.category}</option>
                ))}
            </Select>          
        </div>
    );   
}

export default Dropdown;