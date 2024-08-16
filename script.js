
function one()
{
    var par = document.getElementsByTagName("p");
    var test = par[0].style.fontStyle = "italic";
}


function backgroundColorChange()
{
    var text = document.getElementById("t").style.backgroundColor = "light-blue";
}

function reverseColor()
{
    var text = document.getElementById("t").style.backgroundColor = "";
}

function font1() {
    document.body.style.fontFamily = 'sans-serif';
}

function font2() {
    document.body.style.fontFamily = 'Georgia, serif';
}

function font3() {
    document.body.style.fontFamily = 'Times New Roman, Times, serif';
}

function lightTheme() {
    document.body.style.backgroundColor = '#4c92ee'; // Light blue background color
    let paragraphs = document.getElementsByTagName('h3');
    let headers = document.getElementsByTagName('h2');
    let bigheaders = document.getElementsByTagName('h1');
    let lists = document.getElementsByTagName('li');
    
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = 'black';
    }
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.color = 'black';
    }
    for (let i = 0; i < lists.length; i++) {
        lists[i].style.color = 'black';
    }
    for (let i = 0; i < lists.length; i++) {
        bigheaders[i].style.color = 'black';
    }
}

function darkTheme()
{
    document.body.style.backgroundColor = 'rgb(46, 10, 100)';
    let paragraphs = document.getElementsByTagName('h3');
    let headers = document.getElementsByTagName('h2');
    let bigheaders = document.getElementsByTagName('h1');
    let lists = document.getElementsByTagName('li');
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = 'white';
    }
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.color = 'white';
    }
    for (let i = 0; i < lists.length; i++) {
        lists[i].style.color = 'white';
    }
    for (let i = 0; i < lists.length; i++) {
        bigheaders[i].style.color = 'white';
    }
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }


  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    // Load theme preference from local storage
    const themePreference = localStorage.getItem('theme');
    if (themePreference === 'dark') {
        themeToggle.checked = true;
        darkTheme();
    } else {
        lightTheme();
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            darkTheme();
            localStorage.setItem('theme', 'dark');
        } else {
            lightTheme();
            localStorage.setItem('theme', 'light');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: '#main-image',
        rotate: '1turn', // Rotate 360 degrees
        duration: 30000, // Duration of the animation in milliseconds
        easing: 'linear', // Linear easing for smooth rotation
        loop: true // Infinite loop
    });
});
