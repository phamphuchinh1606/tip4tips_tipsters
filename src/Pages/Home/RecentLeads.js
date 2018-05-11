import React, { Component } from 'react';

const dataLeads = [
    {
        id: 1,
        date: '26-Apr-2018',
        fullname: 'phu chinh 1',
        product: 'Medical',
        status: 'Win'
    },
    {
        id: 2,
        date: '26-Apr-2018',
        fullname: 'phu chinh 2',
        product: 'Medical',
        status: 'Win'
    },
    {
        id: 3,
        date: '26-Apr-2018',
        fullname: 'phu chinh 3',
        product: 'Medical',
        status: 'Win'
    },
    {
        id: 4,
        date: '26-Apr-2018',
        fullname: 'phu chinh 4',
        product: 'Medical',
        status: 'Win'
    },
    {
        id: 5,
        date: '26-Apr-2018',
        fullname: 'phu chinh 5',
        product: 'Medical',
        status: 'Win'
    }
];

export default class RecentLeads extends Component {
    render() {
        return (
            <div className="box box-default">
                {/* box-header */}
                <div className="box-header with-border">
                    <h3 className="box-title">Recent Leads(5 Leads)</h3>
                </div>
                {/* box-body */}
                <div className="box-body">
                    <div className="row">
                        <ul className="ul__users lead__list clearfix">
                            {
                                dataLeads.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <span className="lead__box">
                                            <span className="lead__create-at">{item.date}</span>
                                            <a className="lead__info" href="">
                                                <span className="lead__name">{item.fullname}
                                                    <span className="lead__status" style={{color:'#e08e0b'}}>{item.status}</span>
                                                </span>
                                                <span className="lead__product">{item.product}</span>
                                            </a>
                                            </span>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    {/* /.row */}
                </div>
                <div className="box-footer text-center">
                    <a href="" className="uppercase">View More Leads &#8594;</a>
                </div>
            </div>
        );
    }
}