import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
	name: string
	lastname: string
	invoice: boolean
	nip?: number
}

export const HomeWork = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormData>()
	const [submittedData, setSubmittedData] = useState<FormData>()

	const onSubmit = (data: FormData) => {
		setSubmittedData(data)
	}
	const invoiceNeeded = watch('invoice')

	return (
		<div>
			<hr />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						{...register('name', { required: true })}
					/>
					{errors.name && (
						<span style={{ color: 'red' }}>Field is required</span>
					)}
				</div>
				<div>
					<label htmlFor="lastname">Last name</label>
					<input
						type="text"
						id="lastname"
						{...register('lastname', { required: true })}
					/>
					{errors.lastname && (
						<span style={{ color: 'red' }}>Field is required</span>
					)}
				</div>
				<div>
					<label htmlFor="invoice">
						<input type="checkbox" id="invoice" {...register('invoice')} />I
						want an invoice
					</label>
				</div>
				{invoiceNeeded && (
					<div>
						<label htmlFor="nip">NIP</label>
						<input
							type="text"
							id="nip"
							{...register('nip', { required: invoiceNeeded, minLength: 10 })}
						/>
						{errors.nip && (
							<span style={{ color: 'red' }}>min length is 10</span>
						)}
					</div>
				)}

				<button type="submit">Order</button>
			</form>
			{submittedData && (
				<p>
					Name {submittedData.name} Lastname {submittedData.lastname}
					{submittedData.invoice && `NIP ${submittedData.nip}`}
				</p>
			)}
		</div>
	)
}
