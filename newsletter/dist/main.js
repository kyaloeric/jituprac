var subscribe = document.getElementById("subscribe");
subscribe.addEventListener("click", function () {
    var email = document.getElementById("email").value;
    if (email) {
        document.getElementById("thanks").style.display = "block";
        document.getElementById('sub-containers').style.display = 'none';
    }
    var paragraph = document.getElementById('confirmMessage');
    paragraph.innerHTML = "A confirmation mail has been sent to ".concat(email, ". Pls open it and click on button inside to confirm your subscription");
});
document.getElementById('thanks').style.display = "none";
/* for dismiss */
var dismissMessage = document.getElementById('dismissMessage');
dismissMessage.addEventListener('click', function () {
    document.getElementById('sub-containers').style.display = 'flex';
    document.getElementById('thanks').style.display = 'none';
});
