import React, {useState} from 'react';

const Auth = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const onSubmit = e => {
		e.preventDefault();
	};
	const onChange = e => {
		const {
			target: {name, value},
		} = e;
		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input onChange={onChange} name="email" type="text" placeholder="Email" required value={email} />
				<input onChange={onChange} name="password" type="password" placeholder="Password" required value={password} />
				<input type="submit" value="Log In" />
			</form>
			<div>
				<button>Continue with Google</button>
				<button>Continue with Github</button>
			</div>
		</div>
	);
};
export default Auth;
