const loadPhone = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);

}

const displayPhones = phones => {
    console.log(phones);
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.innerText="";

    //display 10 phones in a page
    phones=phones.slice(0,10);

    //display if no phone found
    const noPhone = document.getElementById('no-found-msg');
    if(phones.length===0){
        noPhone.classList.remove('d-none');
    }else{
        noPhone.classList.add('d-none');
    }


    //display all phones
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-5">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque laudantium quod consequuntur repellat, fugiat ad.</p>
                        </div>
                    </div>
        `
        phonesContainer.appendChild(phoneDiv);
    });
}


document.getElementById('btn-search').addEventListener('click',function(){
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText);
})


loadPhone("apple");