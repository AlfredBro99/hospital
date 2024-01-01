


$(document).ready(function () {

    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    });

   

    $(window).on('load scroll', function () {
        $('.fa-bars').removeClass('fa-times');
        $('.nav').removeClass('nav-toggle');


        if($(window).scrollTop()>10){
            $('header').addClass('header-active');
        }
        else
        {
            $('header').removeClass("header-active");
        }


    });

$('.facility').magnificPopup({
    delegate:'a',
type:'image',
gallery:{
    enabled:true}
});

});













function validateName() {
    var name = document.getElementById('fullName').value;
    var nameError = document.getElementById('name-error');
    
    if (name.trim() === '') {
        nameError.innerHTML = 'Name is required';
        return false;
    } 
    else if (!name.match(/^[a-zA-Z\s]+$/)) 
            {
                nameError.innerHTML = 'Only alphabets  are allowed';
                return false;
            }
    
    else {
        nameError.innerHTML = '';
        return true;
    }
}

function validatePhone() {
    var phone = document.getElementById('phone').value;
    var phoneError = document.getElementById('phone-error');
    
    if (phone.trim() === '') {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    } else if (!/^[0-9]{10}$/.test(phone)) {
        phoneError.innerHTML = 'Invalid phone number (10 digits required)';
        return false;
    } else {
        phoneError.innerHTML = '';
        return true;
    }
}

function validateEmail() {
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('email-error');

    if (email.trim() === '') {
        emailError.innerHTML = 'Email is required';
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.innerHTML = 'Invalid email address';
        return false;
    } else {
        emailError.innerHTML = '';
        return true;
    }
}




function validateMessage() {
    var message = document.getElementById('message').value;
    var messageError = document.getElementById('message-error');

    if (message.trim() === '') {
        messageError.innerHTML = 'Message is required';
        return false;
    } else {
        messageError.innerHTML = '';
        return true;
    }
}

function validateForm() {
    var isValid = validateName() && validatePhone() && validateEmail() && validateMessage();
    
    if (!isValid) {
        var submitError = document.getElementById('submit-error');
        submitError.innerHTML = 'Please fix the errors to submit the form.';
        submitError.style.display = 'block';
        setTimeout(function() {
            submitError.style.display = 'none';
        }, 3000);
    }

    return isValid;
}











document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
           
            alert("Form submitted successfully!");
        }
    });

    function validateForm() {
        const fullName = document.getElementById("fullName").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const appointment = document.getElementById("appointment").value;

        
        if (fullName.trim() === "") {
            alert("Please enter your full name");
            return false;
        }

        if (isNaN(phone) || phone.length !== 10) {
            alert("Please enter a valid phone number");
            return false;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address");
            return false;
        }

        if (appointment === "") {
            alert("Please select an appointment time");
            return false;
        }

        

        return true;
    }

    function isValidEmail(email) {
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

