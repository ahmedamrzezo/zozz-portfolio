import React, { useEffect, useRef, useState } from 'react';

const FormField = ({
	groupClasses = 'flex flex-col',
	fieldType,
	placeholder,
	name,
	autoComplete,
	type,
	required,
	controlClasses = 'px-4 py-2 rounded-xl border-none h-20 w-full font-light text-2xl focus:outline-none focus:border-primary_color bg-primary_light_color',
	fieldChange,
	fieldBlur,
	fieldFocus,
	debounce,
	isValid,
	label,
	id,
	selectItems,
	fieldRef,
}) => {
	const refs = {
		[name]: useRef(),
	};

	const [touched, setTouched] = useState(false);

	const [value, setValue] = useState(null);

	useEffect(() => {
		if (debounce > 0) {
			const timeRef = setTimeout(() => {
				fieldChange(value);
			}, debounce);
			return () => {
				clearTimeout(timeRef);
			};
		}
	}, [value, debounce, fieldChange]);

	const onChange = () => {
		setValue(refs[name].current.value);
		if (!debounce && fieldChange) return fieldChange(value);
	};

	const onBlur = () => {
		fieldBlur(refs[name].current.value);
		setTouched(true);
	};

	const onFocus = () => {
		if (fieldFocus) fieldFocus(refs[name].current.value);
	};

	const types = {
		input: (
			<input
				className={`
				${controlClasses} 
				${!isValid && touched && 'border-danger'}
				${isValid && touched && 'border-success'}`}
				id={id}
				placeholder={placeholder}
				name={name}
				autoComplete={autoComplete}
				type={type}
				required={required}
				// onChange={onChange}
				// onFocus={onFocus}
				// onBlur={onBlur}
				ref={fieldRef}
			/>
		),
		textarea: (
			<textarea
				className={`h-32 resize-none 
			${controlClasses} 
			${!isValid && touched && 'border-danger'}
			${isValid && touched && 'border-success'}`}
				name={name}
				id={id}
				rows="5"
				required={required}></textarea>
		),
		select: (
			<select
				className={`
			${controlClasses} 
			${!isValid && touched && 'border-danger'}
			${isValid && touched && 'border-success'}`}
				name={name}
				id={id}
				required={required}>
				<option value="">Select {name}</option>
				{selectItems ? (
					selectItems.map((item, id) => (
						<option key={item + id} value={item}>
							{item}
						</option>
					))
				) : (
					<option></option>
				)}
			</select>
		),
	};

	return (
		<React.Fragment>
			<div className={groupClasses}>
				<label
					className="text-2xl w-full mb-2 text-white"
					htmlFor={id}>
					{label}
				</label>
				{types[fieldType]}
			</div>
		</React.Fragment>
	);
};

export default FormField;
