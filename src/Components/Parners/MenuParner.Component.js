import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Utils from '../../Commons/Utils';
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
    _onClickInsuranceType() {

    }

    componentDidMount() {
        this.props.productFetch();
        this.props.onLoginSuccess(Utils.getLogin());
    }

    render() {
        let { products } = this.props;
        console.log(products);
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
                            <div className="list-type">
                                <ul>
                                    {
                                        products.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={{
                                                        pathname: '/leads/add',
                                                        state: { productId: item.id }
                                                    }}>
                                                        <img src={item.path_image + '/' + item.thumbnail} alt={item.name} title={item.name} />
                                                    </Link>
                                                    <br />
                                                    <div className="partner_text">{item.name}</div>
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