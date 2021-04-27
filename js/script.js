function change_quote() {
    if (document.getElementById('quote').innerHTML == '"It is impossible to be a mathematician without being a poet in soul."'){
        document.getElementById('quote').innerHTML = '"There should be no such thing as boring mathematics."';
        document.getElementById('author').innerHTML = '— Edsger W. Dijkstra, Dutch computer scientist';
    }
    
    else if (document.getElementById('quote').innerHTML == '"There should be no such thing as boring mathematics."'){
        document.getElementById('quote').innerHTML = '"It is impossible to be a mathematician without being a poet in soul."';
        document.getElementById('author').innerHTML = '— Sofia Kovalevskaya, Russian mathematician';
    }
}