import { useForm } from 'react-hook-form'
const usePersonal = () => {
	const { register, handleSubmit, formState } = useForm({
		mode: 'onChange',
	})
	const onSubmit = data => {
		console.log(data, formState.errors)
	}
	return { register, handleSubmit, onSubmit }
}

export default usePersonal
