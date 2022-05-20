
// ANGULAR DOES NOT DETECT CHANGES ON THIS FILE. IT ALSO CACHES THE FILE. SO IF YOU NEED TO CHANGE THE FILE REMOVE THE .angular/cahce folder
module.exports = (source) => {

	const dataAttr = /(data-cy.*|\[data-cy.*)["]/;
	const empty = "";

	if (source.match(dataAttr)) {
		source = source.replace(new RegExp(dataAttr, 'g'), empty);
	}

	return source;
}