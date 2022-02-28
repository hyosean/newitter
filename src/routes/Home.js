import Neweet from 'components/Neweet';
import {dbService} from 'fbase';
import React, {useEffect, useState} from 'react';

const Home = ({userObj}) => {
	const [neweet, setNeweet] = useState('');
	const [neweets, setNeweets] = useState([]);

	useEffect(() => {
		dbService.collection('neweets').onSnapshot(snapshot => {
			const neweetArr = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
			setNeweets(neweetArr);
		});
	}, []);
	const onSubmit = async event => {
		event.preventDefault();
		await dbService.collection('neweets').add({
			text: neweet,
			createAt: Date.now(),
			creatorId: userObj.uid,
		});
		setNeweet('');
	};
	const onChange = event => {
		const {
			target: {value},
		} = event;
		setNeweet(value);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input type="text" value={neweet} onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
				<input type="submit" value="Neweet" />
			</form>
			<ul>
				{neweets.map(neweet => (
					<Neweet key={neweet.id} neweetObj={neweet} isOwner={neweet.creatorId === userObj.uid} />
				))}
			</ul>
		</>
	);
};
export default Home;
