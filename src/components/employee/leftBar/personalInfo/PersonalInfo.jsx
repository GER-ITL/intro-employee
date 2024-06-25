import usePersonal from '../../../../hooks/usePersonal'
import Field from '../../../ui/Field'
import styles from './PersonalInfo.module.scss'
import { contacts, fields, subdivision } from './fieldData'
const PersonalInfo = ({ heading }) => {
	const { register, handleSubmit, onSubmit } = usePersonal()
	return (
		<>
			<form className={styles.selects} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.heads}>
					<h2>{heading}</h2>
					<button>Изменить</button>
				</div>
				<br />
				<div className={styles.listSelect}>
					{fields?.map(field => {
						return (
							<div key={field.id}>
								<Field
									register={register}
									label={field.label}
									type={field.type}
									regField={field.regField}
									placeholder={field.placeholder}
								/>
							</div>
						)
					})}
				</div>
				<div className={styles.heads}>
					<h2>Подразделение</h2>
					<button>Изменить</button>
				</div>
				<br />
				<div className={styles.listSelect}>
					{subdivision?.map(field => {
						return (
							<div key={field.id}>
								<Field
									register={register}
									label={field.label}
									type={field.type}
									regField={field.regField}
									placeholder={field.placeholder}
								/>
							</div>
						)
					})}
				</div>
				<div className={styles.heads}>
					<h2>Контакты</h2>
					<button>Изменить</button>
				</div>
				<br />
				<div className={styles.listSelect}>
					{contacts?.map(field => {
						return (
							<div key={field.id}>
								<Field
									register={register}
									label={field.label}
									type={field.type}
									regField={field.regField}
									placeholder={field.placeholder}
								/>
							</div>
						)
					})}
				</div>
				{/* <Button>Send</Button> */}
			</form>
		</>
	)
}

export default PersonalInfo
