import { createBrowserRouter } from 'react-router-dom'
import LeftBar from '../components/employee/leftBar/LeftBar'
import PersonalInfo from '../components/employee/leftBar/personalInfo/PersonalInfo'
import RightBar from '../components/employee/rightBar/RightBar'
import LoadEmp from '../components/employee/rightBar/loadEmp/LoadEmp'
import Layout from '../components/layout/Layout'
import stylesLay from '../components/layout/Layout.module.scss'
import Home from '../home/Home'
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/personal-info',
		element: (
			<Layout>
				<div className={stylesLay.info}>
					<LeftBar>
						<PersonalInfo heading={'Персональная информация'} />
					</LeftBar>
					<RightBar>
						<LoadEmp heading={'Загрузка сотрудника'} />
					</RightBar>
				</div>
			</Layout>
		),
	},
	{
		path: '/vacation',
		element: (
			<Layout>
				<div className={stylesLay.info}>
					<LeftBar heading={'Статистика'} />
					<RightBar heading={'История отпусков'} />
				</div>
			</Layout>
		),
	},
])

export default router
