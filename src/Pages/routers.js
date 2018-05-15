import React from 'react';

import Login from './Auth/Login.Page';
import Dashboard from './Home/Dashboard.Page';
import LeadList from './Leads/LeadList.Page';
import LeadNew from './Leads/LeadNew.Page';
import LeadDetail from './Leads/LeadDetail.Page';
import MenuParnerPage from './Parners/MenuParner.Page';
import NotFound from './NotFound.Page';

const routers = [
	{
		path: '/menuparner',
		exact: true,
		main: () => <MenuParnerPage />
	},
	{
		path: '/',
		exact: true,
		main: () => <Dashboard />	
	},
	{
		path: '/login',
		exact: true,
		main: () => <Login />	
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
		path: '/leads/show',
		exact: true,
		main: () => <LeadDetail />
	},
	{
		path: '',
		exact: false,
		main: () => <NotFound />	
	}

];

export default routers;