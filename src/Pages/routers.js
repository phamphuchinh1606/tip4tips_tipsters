import React, {Component} from 'react';

import Dashboard from './Home/Dashboard.Page';
import LeadList from './Leads/LeadList.Page';
import LeadNew from './Leads/LeadNew.Page';
import NotFound from './NotFound.Page';

const routers = [
	{
		path: '/',
		exact: true,
		main: () => <Dashboard />	
	},
	{
		path: '/leads',
		exact: true,
		main: () => <LeadList />
	},
	{
		path: '/leads/add',
		exact: true,
		main: () => <LeadNew />
	},
	{
		path: '',
		exact: false,
		main: () => <NotFound />	
	}

];

export default routers;