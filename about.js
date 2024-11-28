document.getElementById('add-address').addEventListener('click',addAddress);
//document.getElementById('m-add-address').addEventListener('click',addAddress);

function addAddress() {
    var address= prompt('Enter Your Address');
    if(address){
        document.getElementById('add-address').innerText = ' '+address;
        //document.getElementById('m-add-address').innerText = ' '+address;
    }
    else{
        document.getElementById('add-address').innerText = ' Your Address ';
        alert("Address Not Added");
    }
}
