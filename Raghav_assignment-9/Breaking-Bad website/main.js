
async function getData(){
    const res = await fetch("https://www.breakingbadapi.com/api/characters");
    const data =await res.json();
    console.log(data);
    let output = '';
    data.forEach((element) => {
        output += `   <div class='col'> <div class='card'><img src='${element['img']}' class='card-img-top' alt='image'><div class='card-body'><h5 class='card-title'>${element['name']}</h5><h4 class='card-text'>${element['occupation']}</h4>
        <h3>birthday: ${element['birthday']}</h3>
        </div></div></div>`;
    });
    document.getElementById('row').innerHTML = output;
}
getData();