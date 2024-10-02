const eletkorok = [32, 16, 40, 18, 27];

function eletkorEllenorzes(eletkor){
        return eletkor >= document.getElementById("eletkorEllenorzeshez").value;
}

function myFunction(){
    document.getElementById("valami")
    innerHTML = eletkorok.filter(eletkorEllenorzes);
}