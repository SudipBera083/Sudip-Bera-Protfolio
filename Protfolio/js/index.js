function sendEmail() {
    var name = document.getElementById("inputPassword4").value;
    var email = document.getElementById("inputEmail4").value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "sudipbera0834@gmail.com",
        Password: "9735660107S",
        To: email,
        From: "sudipbera0834@gmail.com",
        Subject: "Thank you for Connecting with me !",
        Body: `Hey Mr/Mrs. ${name} This is Sudip Bera. it's very interesting moment to connect with you! `,
    }).then(
        message => alert("Subscribed!")
    );
}