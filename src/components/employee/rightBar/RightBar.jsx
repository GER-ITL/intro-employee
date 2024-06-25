import stylesEmp from '../Employee.module.scss'
const RightBar = ({ heading, children }) => {
	return (
		<div className={stylesEmp.wrapper}>
			<h2>{heading}</h2>
			{children}
		</div>
	)
}

export default RightBar
