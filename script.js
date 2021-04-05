const btn = document.querySelector('.btn1')
const inputs = document.querySelector('.form1')
btn.addEventListener('click', () => {
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "a983df0fec85f8",
        Password : "bbc99f4421846e",
        To : 'xyz@gmail.com',
        From : document.getElementById('email').value,
        Subject : "Contact us by visiter",
        Body : document.getElementById('email').value + "<br>" + document.getElementById('name').value +"<br>" + document.getElementById('subject').value + document.getElementById('email').value + "<br>"
    }).then(message => console.log("The email sucessfully sent")
    );
})