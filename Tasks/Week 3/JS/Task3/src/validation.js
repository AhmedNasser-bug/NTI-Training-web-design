import swal from 'sweetalert';

function validate(){
    var email = document.getElementById("inputEmail");
    var phone = document.getElementById("inputPhone")

    if(!((email.value.trim()).match(""))){
        swal({
  title: "Wrong!",
  text: "Fix email!",
  icon: "failed",
  button: "Aww yiss!",
});
    }
    if(!((phone.value.trim()).match(""))){
        swal({
  title: "Wrong!",
  text: "Fix phone!",
  icon: "failed",
  button: "Aww yiss!",
});
    }
}