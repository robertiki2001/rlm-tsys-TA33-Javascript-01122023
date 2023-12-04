var array = {12:0,11:0,10:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};

for (let index = 0; index < 36000; index++) 
{
    var suma = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    array[suma]++;
}

window.onload = function () {
    document.getElementsByTagName("body")[0].innerHTML = print_r(array);
};

function print_r(array)
{
    var str = "";

    for (var key in array) 
    {
        str += "<p>" + key + " : " + array[key] + "</p>\n";
    }

    return str;
}