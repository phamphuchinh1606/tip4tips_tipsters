import React, { Component } from 'react';

export default class HeaderHome extends Component {
    render() {
        return (
            <header>
                {/* Logo  */}
                <a href="/" class="logo">
                    {/*  mini logo for sidebar mini 50x50 pixels  */}
                    <span class="logo-mini"><b>A</b>T4T</span>
                    {/*  logo for regular state and mobile devices  */}
                    <span class="logo-lg"><b>Admin</b>Tip4Tips</span>
                </a>
            </header>
        );
    }
}