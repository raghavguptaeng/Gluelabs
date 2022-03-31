document.getElementById('filterInput').addEventListener('keyup', e=>{
    let filter = e.target.value.toUpperCase();
    let li = document.querySelectorAll('.collection-item');
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
});