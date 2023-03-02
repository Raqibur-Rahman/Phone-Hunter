const loadPhone=async()=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res = await fetch(url);
    const data= await res.json();
    displayPhones(data.data);

}

const displayPhones=phones=>{
    const phonesContainer=document.getElementById('phone-container')
}

loadPhone();