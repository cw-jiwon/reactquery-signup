import React from 'react'
import { useQuery } from 'react-query'
import AButton from './atoms/AButton'
import { getUsers } from '../api'

function LoginSuccessPage() {
	const leave = userId => {
		const confirm = window.confirm('정말 탈퇴하시겠습니끼?')
		if (confirm) {
		}
	}

	// const { data: users } = useQuery('repoData', () =>
	// 	fetch('https://jsonplaceholder.typicode.com/users').then(res =>
	// 		res.json()
	// 	)
	// )
	const { data: users } = useQuery('users', getUsers)

	return (
		<div className='loginsignup' style={{ flexDirection: 'column' }}>
			<div className='title'>
				<h1>회원 목록</h1>
			</div>
			<ul className='userlist'>
				{users &&
					users.map(user => (
						<li key={user.id}>
							{user.email}
							<AButton
								onClick={() => leave(user.id)}
								text='X'
								value={user.id}
							/>
						</li>
					))}
			</ul>
		</div>
	)
}

export default LoginSuccessPage
