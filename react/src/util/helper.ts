export const formatCurrency = (value: any, precision=2) => {
	let translation = localStorage.getItem('translation');
	let currency = 'BRL';

	if (translation) {
		translation = translation.replace('_', '-');
		if (translation === 'en') currency = 'USD';
		else if (translation === 'es') currency = 'EUR';
	} else translation = 'pt-BR';
  
	return value
		? new Intl.NumberFormat(translation, {
			style: 'currency',
			minimumFractionDigits: precision,
			maximumFractionDigits: precision,
			currency
		}).format(value)
		: '';
};