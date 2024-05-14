function  whereweat(){
     document.getElementById("output").innerHTML=output
}
function whereweat (){
    output.innerHTML=window.location.href;
    console.log(window.location.href);
}
function gotogoogle() {
    window.location.href="http://google.com"
}
function replaceurl() {
    window.location.replace("http://google.com")
}
function openpopup() {
    popupWindow=window.open("","window","width=500","height=500" ,"left=200","top=200")
}
function fillcontentinpopup () {

    popupWindow.document.write("<h1>welcom on my website</h1>")
}

function assignurltopopup() {
    popupWindow.location.assign("https://uni.com");
}
function closepopup() {
    popupWindow.close();
}