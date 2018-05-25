import React from 'react';

import MailDetailPage from './Messages/MailDetail.Page';

const routersMessages = [
	{
		path: '/messages/show/:id',
		exact: true,
		main: ({history,match}) => <MailDetailPage history = {history} match = {match}/>
	}
];

export default routersMessages;