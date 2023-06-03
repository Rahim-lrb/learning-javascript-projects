const input = document.querySelector('input[type="text"]');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2226c3dce0mshca3304792297bbcp1899acjsnb57dc022af0d',
		'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
	}
};




input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        fetch(`https://moviesdb5.p.rapidapi.com/om?s=${input.value}`, options)
        .then(response => response.json())
        .then(data => {
            list = data.d
            console.log(list)
        })
        .catch(err => console.error(err));
    };
})