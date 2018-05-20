import React from 'react';

import Login from './Auth/Login.Page';
import Dashboard from './Home/Dashboard.Page';
import LeadList from './Leads/LeadList.Page';
import LeadNew from './Leads/LeadNew.Page';
import LeadDetail from './Leads/LeadDetail.Page';
import LeadUpdate from './Leads/LeadUpdate.Page';
import MenuParnerPage from './Parners/MenuParner.Page';
import NotFound from './NotFound.Page';

const routers = [
	{
		path: '/',
		exact: true,
		main: () => <Dashboard />	
	},
	{
		path: '/login',
		exact: true,
		main: ({history,match}) => <Login history = {history} match = {match}/>	
	},
	{
		path: '/leads',
		exact: true,
		main: () => <LeadList />
	},
	{
		path: '/leads/add',
		exact: true,
		main: ({history,match}) => <LeadNew history = {history} match = {match}/>
	},
	{
		path: '/leads/show/:id',
		exact: true,
		main: ({history,match}) => <LeadDetail history = {history} match = {match}/>
	},
	{
		path: '/leads/edit/:id',
		exact: true,
		main: ({history,match}) => <LeadUpdate  history = {history} match = {match}/>
	},
	{
		path: '/menuparner',
		exact: true,
		main: () => <MenuParnerPage />
	},
	{
		path: '',
		exact: false,
		main: () => <NotFound />	
	}

];

export default routers;