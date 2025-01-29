import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Button } from "react-materialize";
import { deleteBill } from "../../actions/billActions";
import "./Style.css";

class Bill extends Component {
  //function to delete a bill
  onDeleteClick = (id) => {
    this.props.deleteBill(id);
  };

  render() {
    const { id, amount, category, description, date, should_be_paid } =
      this.props.bill;
    const title = `${id}. ${description} Bill`;

    return (
      // rendering a bill with dynamic border and bookmark
      <Card
        title={title}
        className={`custom-card ${
          should_be_paid ? "should-be-paid" : "not-paid"
        }`}
        actions={[
          <React.Fragment>
            <Button className="button-edit" onClick={() => this.onDeleteClick(id)} waves="light">
              Delete Bill
            </Button>
            &ensp;
            <Link to={`bill/edit/${id}`}>
              <Button className="button-delete">Edit Bill</Button>
            </Link>
          </React.Fragment>,
        ]}
      >
        <hr></hr>
        <div className="font-size">
          <p className="amt">
            Amount Payable: <span className="amt float-right">Rs. {amount}</span>
          </p>
          <p>
            Category: <span className="float-right">{category}</span>
          </p>
          <p>
            Date: <span className="float-right">{date}</span>
          </p>
        </div>
      </Card>
    );
  }
}

export default connect(null, { deleteBill })(Bill);