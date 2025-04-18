export const isRequired = () => {
	return (v: string) => {
		return !!v || v.length > 0 || "Пожалуйста, заполните поле"
	};
}

export const isMatchingPattern = (pattern: RegExp, text: string = 'Неправильный формат') => {
	return (v: string | number) => {
		return pattern.test(String(v)) || text;
	};
};

export const isNameValid = (value: string) => {
	const regExp = /^(\p{L}+)\s+(\p{L}+)\s+(\p{L}+)$/u;
	return isMatchingPattern(regExp, "Неправильный формат (Ф И О)")(value);
};

export const isPhoneNumber = (value: string) => {
	const regExp = /^\+7\d{10}$/;
	return isMatchingPattern(
		regExp,
		"Неправильный формат телефона (+7999999999)",
	)(value);
};

export const isEmail = (value: string) => {
	const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return isMatchingPattern(
		regExp,
		"Неправильный формат почты",
	)(value);
}


export const isValidDate = () => {
	return (v: string) => {
		const date = new Date(v);

		const dateFormatRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
		if (!dateFormatRegex.test(v)) {
			return "Введите дату в формате дд.мм.гггг";
		}

		return !isNaN(date.getTime()) || "Введите корректную дату";
	}
}