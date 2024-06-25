import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Employee from '../employee/Employee'
import styles from './Layout.module.scss'
import Header from './header/Header'
const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	return (
		<section
			className={styles.wrapper}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header />
			<Link className={styles.backLink} to='/'>
				<ChevronLeft />
				ВЕРНУТЬСЯ К СОТРУДНИКАМ
			</Link>
			<Employee />
			{heading && <h1 className={styles.heading}>{heading}</h1>}
			{children}
		</section>
	)
}

export default Layout
