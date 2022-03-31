document.getElementById('filterInput').addEventListener('keyup', e=>{
    let filter = e.target.value.toUpperCase();
    let li = document.querySelectorAll('.collection-item');
    console.log(li);
    li.forEach(item=>{
        let a = item.querySelector('a');
        console.log(a.innerText); 
        item.style.display = a.innerText.toUpperCase().startsWith(filter)?'block':'none';
        document.querySelectorAll('.collection-header').forEach(head=>{
            head.style.display = head.querySelector('h5').innerText.toUpperCase().startsWith(filter)?'block':'none';
        });
    });
});