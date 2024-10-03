const formElement = document.querySelector("form");
formElement.addEventListener("submit", start);


function start(event) {

    //Empêche la rechargement de la page à écriture dans un commentaire
    event.preventDefault();
    testInput();
}


function testInput(){
    document.querySelector("#error-message").style.display = "none";
    const userFirstname = document.querySelector("#first-name").value;
    const userLastname = document.querySelector("#last-name").value;
    const userMessage = document.querySelector("#message").value;
    

    if (userFirstname.trim() == "" || userLastname.trim() == "" || userMessage.trim() == "") {
        document.querySelector("#error-message").style.display = "block";
        return;
    };

    
    addComment(userFirstname, userLastname, userMessage);
}


function addComment(firstname, lastname, message) {
    let commentaire = document.querySelectorAll(".flex, .space-x-4, .text-sm, .text-gray-500")[2];

    let messageClone = commentaire.cloneNode(true);

    messageClone.querySelector("h3").innerHTML = firstname+" "+lastname;

    messageClone.querySelector("p").innerHTML = message;

    document.querySelector("#comment-list").append(messageClone);
}