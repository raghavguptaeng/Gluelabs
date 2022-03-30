document.getElementById("val").addEventListener("input", e=>{
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;   
    var conv = 0;
    if(from==='kg'){
        if(to==='g'){
            conv = e.target.value*1000;
        }
        else if(to==='p'){
            conv = e.target.value*2.20462;
        }
        else if(to==='o'){
            conv = e.target.value*35.274;
        }
        else{
            conv = e.target.value;
        }
    }
    else if(from==='g'){
        if(to==='kg')
            conv = e.target.value/1000;
        else if(to==='p'){
            conv = e.target.value*0.00220462;
        }
        else if(to==='o'){
            conv = e.target.value*0.035274;
        }
        else{
            conv = e.target.value;
        }
    }
    else if(from==='p'){
        if(to==='kg'){
            conv = e.target.value*0.453592;
        }
        else if(to==='g'){
            conv = e.target.value*453.592;
        }
        else if(to==='o'){
            conv = e.target.value*16;
        }
        else{
            conv = e.target.value;
        }
    }
    else if(from==='o'){
        if(to==='kg'){
            conv = e.target.value*0.0283495;
        }
        else if(to==='g'){
            conv = e.target.value*28.3495;
        }
        else if(to==='p'){
            conv = e.target.value*0.0625;
        }
        else{
            conv = e.target.value;
        }
    }
    else{
        conv = e.target.value;
    }
    document.getElementById('ans').innerText = conv;
});