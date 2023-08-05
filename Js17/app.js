function result(){
    var C = parseFloat(document.getElementById("inpt").value);
    var F = (C * 9/5) + 32;
    document.getElementById("result").innerText = ` ${F}°F`
}