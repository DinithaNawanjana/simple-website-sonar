var message = "Hello World"; 

function doSomething() {
    var x = 10; // මේ x එක කවදාවත් පාවිච්චි වෙන්නේ නෑ (Code Smell)
    var y = 20;
    
    console.log("Button clicked!"); 

    if (x == 10) { 
        document.getElementById("output").innerText = "You clicked the button!";
    }
    
    
    alert("This is a Popup!");
}