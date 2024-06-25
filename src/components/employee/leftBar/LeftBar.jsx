import stylesEmp from '../Employee.module.scss'
const LeftBar = ({ heading, children }) => {
	return (
		<div className={stylesEmp.wrapper}>
			<h2>{heading}</h2>
			{children}
		</div>
	)
}

export default LeftBar
