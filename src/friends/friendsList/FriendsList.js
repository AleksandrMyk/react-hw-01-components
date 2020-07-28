import React from 'react';
import style from './FriendsList.module.css';
import FriendItems from '../friendsItems/FriendItems'
import data from '../data.json'

export default function FriendsList() {
	return (
		<>
			<h1>Friends List</h1>
			<ul className={style.friendsList}>
				<FriendItems dataJson={data}/>
      </ul>
		</>
	)
}

 