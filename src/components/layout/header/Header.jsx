import { AlignJustify, ChevronDown } from 'lucide-react'
import Button from '../../ui/button/Button'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<img src='/public/images/logo.png' alt='logo' className={styles.logo} />
			<div className={styles.rightMenu}>
				<Button>СОЗДАТЬ СЧЕТ</Button>
				<Button>КОРЗИНА</Button>

				<span className={styles.checkUser}>
					<img src='/public/images/avatar.jpg' alt='' />
					<ChevronDown />
				</span>
				<AlignJustify className={styles.hamburg} />
			</div>
		</header>
	)
}

export default Header
