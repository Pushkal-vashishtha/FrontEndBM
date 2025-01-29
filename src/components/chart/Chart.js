import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
import { connect } from "react-redux";
import { getBills } from "../../actions/billActions";

class Chart extends Component {
  componentDidMount = () => {
    this.props.getBills();
  };

  render() {
    let { bills } = this.props;

    //building data for chart
    let data = bills.map((bill) => {
      let s = bill.date;
      let p = parseInt(s[3]);
      let q = parseInt(s[4]);
      let r = p * 10 + q;
      return { x: r, y: parseInt(bill.amount) };
    });

    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2",
      title: {
        text: "Monthly Billing Cycle - Amount Spent",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
        padding: 10,
        color: "#333",
      },
      axisY: {
        title: "Amount Spent (Rs)",
        fontSize: 12,
        fontFamily: "Arial, sans-serif",
        suffix: " Rs",
        lineColor: "#16c47f",
        labelFontColor: "#333",
        titleFontColor: "#16c47f",
        tickColor: "#16c47f",
      },
      axisX: {
        title: "Day of the Month",
        fontSize: 12,
        fontFamily: "Arial, sans-serif",
        suffix: " Jan",
        interval: 2,
        lineColor: "#16c47f",
        labelFontColor: "#333",
        titleFontColor: "#16c47f",
        tickColor: "#16c47f",
      },
      data: [
        {
          type: "line",
          toolTipContent: "<b>{x} Jan:</b> {y} Rs",
          dataPoints: data,
          color: "#16c47f",
          markerSize: 6,
          lineThickness: 3,
          lineColor: "#16c47f",
          borderColor: "#16c47f",
          borderThickness: 2,
        },
      ],
    };

    return (
      <div
        style={{
          marginTop: "25px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          padding: "15px",
          backgroundColor: "#f9f9f9",
        }}
        className="container"
      >
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bills: state.bill.bills,
});

export default connect(mapStateToProps, { getBills })(Chart);