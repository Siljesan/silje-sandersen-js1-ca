const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getDetails(breweryId) {
    try {
        const response = await fetch('https://api.openbrewerydb.org/breweries/' + breweryId);
        const result = await response.json();

        document.querySelector('.loading').classList.add('hide');
        
        document.title = result.name
        document.querySelector('main').innerHTML = `
        <div>
        <h1>${result.name}</h1>
        <h2>Brewery type: ${result.brewery_type}</h2>
        <p>${result.street}</p>
        <p>${result.city}</p>
        <p>${result.state}</p>
        <p>${result.country}</p>
        <a href="${result.website_url}">Link to website</a>
        <p></p>
        </div>
        ` 
    } catch (error) {
        document.querySelector('.alert').innerHTML += showAlertTouser('An error occured','danger');
    } finally {
        setTimeout(function () {
			document.querySelector('.alert').innerHTML = '';
		}, 3000);
    };
};

getDetails(id);