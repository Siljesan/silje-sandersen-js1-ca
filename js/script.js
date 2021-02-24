const baseUrl = 'https://api.openbrewerydb.org/breweries/';

async function getBrewery(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)

        document.querySelector('.loading').classList.add('hide');

        result.forEach(element => {
            console.log(element);
            document.querySelector('.breweryCards').innerHTML +=
            `<a href="details.html?id=${element.id}"><div class="card">
                <h2>${element.name}</h2>
                <p>${element.brewery_type}</p>
                <p>${element.country}</p>
            </div></a>`
        });
    } catch (error) {
        document.querySelector('.alert').innerHTML += showAlertTouser('An error occured','danger');
    } finally {
        setTimeout(function () {
			document.querySelector('.alert').innerHTML = '';
		}, 3000);
    };
};

getBrewery(baseUrl);
