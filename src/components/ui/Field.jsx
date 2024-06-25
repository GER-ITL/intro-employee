import styles from '../../components/employee/leftBar/personalInfo/PersonalInfo.module.scss'

const Field = ({ label, placeholder, type, register, regField }) => {
	return (
		<div className={styles.field}>
			<span>{label}</span>
			<input {...register(regField)} type={type} placeholder={placeholder} />
		</div>
	)
}

export default Field
