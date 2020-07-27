import React from 'react';
//----1-------------------------------------------------
import Card from './profile/card/Card';
//----2-------------------------------------------------
import Section from './statistic/section/Section';
//----3-------------------------------------------------
import FriendsList from './friends/friendsList/FriendsList';
//----4-------------------------------------------------
import Table from './transaction/table/Table';
//------------------------------------------------------

export default  function App() {
	return (
		<>
		<Card/>
		<Section/>
		<FriendsList/>
		<Table/>
		</>
	)
}