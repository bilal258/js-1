document.getElementById('name').onclick = function (){
   let fullname = "Hi Abdul Rehman"
   alert(fullname)
   let statement = "alert('Hi Abdul Rehman')"
   document.getElementById('Statement').innerHTML = statement;
   document.getElementById('result').innerHTML = '';

}
document.getElementById('number').onclick = function (){
   let number = "0123456789"
   alert(number)
   
   let statement = " alert('0123456789')"
   document.getElementById('Statement').innerHTML = statement;
   document.getElementById('result').innerHTML = '';
}
document.getElementById('variable').onclick = function () {
    let variablename = "<ul class='text-start'><li>A variable name can't contain spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, userAlert and myVar are legal.</li><li>Capital letters are fine, but be careful. Variavle names are case sensitive. A rose is not a Rose. If you assign the string 'Floribandas' to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty.</li></ul>"
    document.getElementById('result').innerHTML = variablename;
    document.getElementById('Statement').innerHTML = '';
}
document.getElementById('camelCase').onclick = function () {
    let camel = "weAreLearningJavaScript"
    document.getElementById('result').innerHTML = camel;
    document.getElementById('Statement').innerHTML = '';
}
let A = 7; 
let B = 3;
document.getElementById('sum').onclick = function () {
    document.getElementById('Statement').innerHTML = "let A =" + A + "<br> let B =" + B + "<br > Output = " + A + " + " + B ;
    document.getElementById('result').innerHTML = A + B;
}
document.getElementById('sub').onclick = function () {
    document.getElementById('Statement').innerHTML = "let A =" + A + "<br> let B =" + B + "<br > Output = " + A + " - " + B ;
    document.getElementById('result').innerHTML = A - B;
}
document.getElementById('Multiply').onclick = function () {
    document.getElementById('Statement').innerHTML = "let A =" + A + "<br> let B =" + B + "<br > Output = " + A + " * " + B ;
    document.getElementById('result').innerHTML = A * B;
}
document.getElementById('Devie').onclick = function () {
    document.getElementById('Statement').innerHTML = "let A =" + A + "<br> let B =" + B + "<br > Output = " + A + " / " + B ;
    document.getElementById('result').innerHTML = A / B;
}
document.getElementById('some').onclick = function () {
   let calstatement = 15 / 3 + 23 * 4 - (3 + 6)
   document.getElementById('Statement').innerHTML ='let calstatement = 15 / 3 + 23 * 4 - (3 + 6)';
   document.getElementById('result').innerHTML = calstatement;
}
document.getElementById('btn-statement').onclick = function (){
     document.getElementById('Statement').innerHTML = ''
}
document.getElementById('btn-output').onclick = function (){
    document.getElementById('result').innerHTML = ''
}
