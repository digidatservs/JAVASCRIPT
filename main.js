const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassw = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.b__login');

if(submitButton) {
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: inputEmail.value,
                password: inputPassw.value,
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data)
        })   
        })
    }
}
window.onload = init;
