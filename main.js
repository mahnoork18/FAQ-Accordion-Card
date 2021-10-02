var ard = document.getElementsByClassName('accordion');
var i;
for(i = 0; i < ard.length; i++){
    ard[i].addEventListener('click',function() {
        this.classList.toggle('active');
    var text =this.nextElementSibling;
    if(text.style.display === 'block'){
        text.style.display ='none';
    }
    else{
text.style.display = 'block';
    }

    });
}