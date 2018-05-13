import React, { Component } from 'react';
import './MenuParner.css';

const menuPartner = [
    {
        image: './images/menu-partner/01.png',
        text: 'MEDICAL'
    },
    {
        image: './images/menu-partner/02.png',
        text: 'AUTO/MOTO'
    },
    {
        image: './images/menu-partner/03.png',
        text: 'SHOPS'
    },
    {
        image: './images/menu-partner/04.png',
        text: 'FACTORY'
    },
    {
        image: './images/menu-partner/05.png',
        text: 'OFFICE'
    },
    {
        image: './images/menu-partner/06.png',
        text: 'HOME'
    },
    {
        image: './images/menu-partner/07.png',
        text: 'TRAVEL'
    },
    {
        image: './images/menu-partner/08.png',
        text: 'STUDENT'
    },
    {
        image: './images/menu-partner/08.png',
        text: 'OTHER'
    }
];

export default class MenuParnerComponent extends Component {
    render() {
        return (
            <div className="row">
                <div>
                    {/* create manager form */}
                    <div className="box box-success">
                        {/* box-header */}
                        <div className="box-header with-border">
                            <h3 className="box-title">
                                {/* <img src="./images/image1-orange.png" width="46" height="46" alt="" /> */}
                                <span className="text">Choose an insurance type</span>
                            </h3>
                        </div>
                        <div className="row">
                            <div class="list-type">
                                <ul>
                                    {
                                        menuPartner.map((item, index) => {
                                            return (
                                                <li>
                                                    <a href="/en/contact/register/0/it/medical">
                                                        <img src={item.image} width="190" height="180" alt={item.text} title={item.text} />
                                                    </a>
                                                    <br />
                                                    <div class="partner_text">{item.text}</div>
                                                </li>
                                            );
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}