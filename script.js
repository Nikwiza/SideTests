var elements = document.getElementsByTagName('input');
var n = elements.length;
for(var i = 0; i < n; i++){
    (function(i)
    {
    elements[i].onclick = 
        function()
        {
         console.log("This element is  #" + i);
        };
    })(i);
}

// // A moze i:

// var elements = document.getElementsByTagName('input');
// Array.from(elements).forEach(element => {
//     let i = Array.from(elements).indexOf(element);
//     element.onclick = function(){
//         console.log("This element is  #" + i);
//     }
// });
