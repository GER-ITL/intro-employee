import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Employee.module.scss'
const Employee = () => {
	const currentTime = new Date()
	const [now, setNow] = useState(currentTime)

	useEffect(() => {
		const interval = setInterval(() => {
			setNow(new Date())
		}, 1000)
		return () => clearInterval(interval)
	}, [])
	return (
		<div className={styles.wrapper}>
			<section className={styles.user}>
				<div>
					<img src='/public/images/avatar.jpg' alt='avatar' />
				</div>
				<div className={styles.about}>
					<h1>
						ИВАНОВ <br /> ИВАН ИВАНОВИЧ
					</h1>
					<p>Junior UI/UX designer</p>
					<p>
						Россия, Москва{' '}
						<span className={styles.time}>
							{'  '}•{'  '}
							{now.toLocaleTimeString([], {
								hour: '2-digit',
								minute: '2-digit',
							})}
						</span>
					</p>
				</div>
			</section>
			<div className={styles.nav}>
				<Link to='/personal-info'>ОСНОВНАЯ ИНФОРМАЦИЯ</Link>
				<Link to='/vacation'>ОТПУСК</Link>
				<Link>ОБОРУДОВАНИЕ</Link>
			</div>
		</div>
	)
}

export default Employee
