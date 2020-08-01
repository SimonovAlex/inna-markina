const generateLeadForm = document.getElementById("generateLead");
const telephoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");

const app = firebase.app();
const functions = app.functions('us-central1');
const sendEmail = functions.httpsCallable('sendEmail');

// данная функция не даёт ввести в поле #telephone не цифры
$('#telephone').on('keypress', function (event) {
    event.preventDefault();
    const key = event.key;
    if (key >= 'A' && key <= 'Z' || key >= 'a' && key <= 'z') {
    } else {
        telephoneInput.value = telephoneInput.value + key
    }
})

generateLeadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (nameInput.value && (telephoneInput.value || emailInput.value)) {
        if (emailInput.value.includes("@") || !emailInput.value) {
            console.log('click 1', {
                name: nameInput.value,
                tel: telephoneInput.value,
                email: emailInput.value
            });
            sendEmail({
                name: nameInput.value,
                tel: telephoneInput.value,
                email: emailInput.value
            }).then(() => {
                $("#successToast").toast('show');
            }).then(() => {
                $('#exampleModalCenter').modal('hide');
            });
        } else {
            $("#errorToast").toast('show');
        }
    } else {
        $("#errorToast").toast('show');
    }
});
