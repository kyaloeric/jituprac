let subscribe = document.getElementById("subscribe") as HTMLElement;
subscribe.addEventListener("click", function () {
    let email = (document.getElementById("email") as HTMLInputElement).value;
    if (email) {
        (document.getElementById("thanks") as HTMLElement).style.display = "block";
        (document.getElementById('sub-containers') as HTMLElement).style.display = 'none';
    }

    let paragraph = document.getElementById('confirmMessage') as HTMLElement;
    paragraph.innerHTML = `A confirmation mail has been sent to ${email}. Pls open it and click on button inside to confirm your subscription`;
});

(document.getElementById('thanks') as HTMLElement).style.display = "none";

/* for dismiss */

let dismissMessage = document.getElementById('dismissMessage') as HTMLElement;
dismissMessage.addEventListener('click', function () {
    (document.getElementById('sub-containers') as HTMLElement).style.display = 'flex';
    (document.getElementById('thanks') as HTMLElement).style.display = 'none';
});
