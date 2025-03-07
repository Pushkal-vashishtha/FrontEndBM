import React from 'react';
import {Select} from 'react-materialize';
import "./Style.css";
const Dropdown = (props) => {
    
        return(            
            <div className="cont">
                <Select onChange={props.onSelect} 
                  id="Select-9" multiple={false} 
                  options={{
                    classes: '',
                    dropdownOptions: {
                      alignment: 'left',
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      coverTrigger: true,
                      hover: false,
                      inDuration: 150,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 250
                    }
                  }}
                  value={props.category}
                >   
                    <option disabled value="">Choose Category</option>
                    <option value="All Categories">All Categories</option>
                    {props.bills.map(bill => <option value={bill.category} className='dropdown-item'>{bill.category}</option>)}
                </Select>          
            </div>

        );   
}

export default Dropdown;