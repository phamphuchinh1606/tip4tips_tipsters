import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Link} from 'react-router-dom';

export default class LeadStatus extends Component {
    render() {
        let {statusLead} = this.props;
        let dataView = [300, 50, 100];
        let backgroundColor = [ '#FF6384','#36A2EB','#FFCE56'];
        if(statusLead){
            dataView = [statusLead.new, statusLead.call, statusLead.quote, statusLead.win, statusLead.lost];
            backgroundColor = [statusLead.colorNew, statusLead.colorCall, statusLead.colorQuote, statusLead.colorWin, statusLead.colorLost];
        }
        let data = {
            labels: [ "New", "Call", "Quote", "Win", "Lost"],
            datasets: [{
                data: dataView,
                backgroundColor: backgroundColor,
                hoverBackgroundColor: backgroundColor
            }]
        };
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
                    <Link to="/leads" className="uppercase">
                        View More Leads &#8594;
                    </Link>
                </div>
            </div>
        );
    }
}