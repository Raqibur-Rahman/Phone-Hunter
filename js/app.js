const loadPhone = async (searchText,dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data,dataLimit);

}

const displayPhones = (phones,dataLimit) => {
    console.log(phones);
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.innerText="";

    //display 10 phones in a page
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length>9){
        phones=phones.slice(0,9);
       showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }


    




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
    loadSpinner(false);
}

processSearch=(dataLimit)=>{
    loadSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText,dataLimit);
}


document.getElementById('btn-search').addEventListener('click',function(){
    processSearch(10);
})


const loadSpinner=(isSpinning)=>{
    const spinnerId = document.getElementById('id-spinner');
    if(isSpinning){
        spinnerId.classList.remove('d-none');
    }else{
        spinnerId.classList.add('d-none');
    }

}

document.getElementById('btn-show-all').addEventListener('click',function(){
    processSearch();
})




// loadPhone();