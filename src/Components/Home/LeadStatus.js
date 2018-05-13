import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

export default class LeadStatus extends Component {
    render() {
        return (
            <div className="box box-default">
                {/* box-header */}
                <div className="box-header with-border">
                    <h3 className="box-title">Latest status (5 last Leads)</h3>
                </div>
                {/* box-body */}
                <div className="box-body">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="chart-responsive">
                                <Doughnut data={data}
                                    height={317}
                                    options={{
                                        maintainAspectRatio: false
                                    }} />
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div id="pieChart-legend-con"></div>
                        </div>
                    </div>
                </div>
                <div className="box-footer text-center">
                    <a href="" className="uppercase">View More Leads &#8594;</a>
                </div>
            </div>
        );
    }
}