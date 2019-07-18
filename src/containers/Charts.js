import React, { Component } from "react";
import Chart from "react-apexcharts";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options1: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series1: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ],
      options2: {
        chart: {
            height: 350,
            type: "line",
            stacked: false
          },
          dataLabels: {
            enabled: false
          },
          colors: ["#FF1654", "#247BA0"],
          series: [
            {
              name: "Series A",
              data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
            },
            {
              name: "Series B",
              data: [20, 29, 37, 36, 44, 45, 50, 58]
            }
          ],
          stroke: {
            width: [4, 4]
          },
          plotOptions: {
            bar: {
              columnWidth: "20%"
            }
          },
          xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
          },
          yaxis: [
            {
              axisTicks: {
                show: true
              },
              axisBorder: {
                show: true,
                color: "#FF1654"
              },
              labels: {
                style: {
                  color: "#FF1654"
                }
              },
              title: {
                text: "Series A"
              }
            },
            {
              opposite: true,
              axisTicks: {
                show: true
              },
              axisBorder: {
                show: true,
                color: "#247BA0"
              },
              labels: {
                style: {
                  color: "#247BA0"
                }
              },
              title: {
                text: "Series B"
              }
            }
          ],
          tooltip: {
            shared: false,
            intersect: true,
            x: {
              show: false
            }
          },
          legend: {
            horizontalAlign: "left",
            offsetX: 40
          }
      },

      options3 : {
        series: [44, 55, 13, 33],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
        chart: {
            type: 'donut'
        }
      }
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options1}
              series={this.state.series1}
              type="bar"
              width="500"
            />
          </div>
          <div className="mixed-chart">
          <Chart
                options={this.state.options2}
                series={this.state.options2.series}
                width="500"
                />
          </div>
          <div className="donut">
            <Chart options={this.state.options3} series={this.state.options3.series} type="donut" width="380" />
        </div>
        </div>
      </div>
    );
  }
}

export default Charts;