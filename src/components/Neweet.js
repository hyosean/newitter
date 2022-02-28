import React from 'react';

const Neweet = ({neweetObj, isOwner}) => {
	return (
		<li>
			<p>{neweetObj.text}</p>
			{isOwner && (
				<>
					<button type="button">Edit</button>
					<button type="button">Del</button>
				</>
			)}
		</li>
	);
};

export default Neweet;
