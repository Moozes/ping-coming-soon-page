document.querySelector('form').onsubmit = function(event) {
    event.preventDefault();
    let input = this.querySelector('input');
    let errorMessage = this.querySelector('.error-message');
    let pattern = new RegExp(/\w+@\w.\w/, 'i');
    
    if(pattern.test(input.value)){
        this.submit();
    } else{
        errorMessage.classList.add('activate');
        input.classList.add('red')
    }
}

document.querySelector('input').onkeyup = function() {
    this.classList.remove('red');
    document.querySelector('.error-message').classList.remove('activate');
}