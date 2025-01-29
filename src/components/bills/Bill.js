import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Button, Chip } from 'react-materialize';
import { deleteBill } from "../../actions/billActions";
import "./Style.css";

class Bill extends Component {
  // Function to delete a bill
  onDeleteClick = (id) => {
    this.props.deleteBill(id);
  };

  render() {
    const { id, amount, category, description, date, should_be_paid } = this.props.bill;
    const title = `${id}. ${description} Bill`;

    return (
      <Card className="bill-card" title={title}
        actions={[
          <React.Fragment>
            <Button onClick={() => this.onDeleteClick(id)} waves="light" className="delete-btn">
              Delete Bill
            </Button>
            &ensp;
            <Link to={`bill/edit/${id}`}>
              <Button className="edit-btn">Edit Bill</Button>
            </Link>
            {should_be_paid === true ? <Chip className="chip">Should be Paid</Chip> : null}
          </React.Fragment>
        ]}
      >
        <hr />
        <div className="font-size">
          <p>Total: <span className="float-right">Rs. {amount}</span></p>
          <p>Category: <span className="float-right">{category}</span></p>
          <p>Date: <span className="float-right">{date}</span></p>
        </div>
      </Card>
    );
  }
}

export default connect(null, { deleteBill })(Bill);
