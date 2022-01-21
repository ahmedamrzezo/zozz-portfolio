export const returnRefValue = (ref) => {
	return ref && ref.current && ref.current.value;
}

export const getFormValues = (submitEvent, field) => {
	return submitEvent.currentTarget[field].value;
}

