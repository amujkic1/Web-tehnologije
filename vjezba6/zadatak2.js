function submitForm() {
    // Hvatanje podataka iz forme
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    // Računanje hash vrijednosti password-a
    var hashedPassword = hashPassword(password);

    // Provjera korisnika
    var loginResult = checkUser(username, hashedPassword);

    // Generisanje XML odgovora
    var xmlResponse = generateXMLResponse(loginResult, username);

    // Ispisivanje rezultata ili dalje manipulacije podacima
    console.log(xmlResponse);
}

function hashPassword(password) {
    // Hash funkcija
    var hashedPassword = "";
    for (var i = 0; i < password.length; i++) {
        hashedPassword += (password.charCodeAt(i) + 16 + 55).toString(16);
    }
    return hashedPassword;
}

function checkUser(username, hashedPassword) {
    // Simulacija provjere korisnika (u stvarnom sistemu, ovo bi se vršilo na serveru)
    // Prikazani su podaci za pet korisnika
    var users = [
        { username: "vokanovic", password: "FB8EF=@:", name: "Vensada", surname: "Okanović", role: "profesor" },
        { username: "iprazina", password: "@798A@E88", name: "Irfan", surname: "Prazina", role: "asistent" },
        { username: "ekovac", password: "<;@E889:", name: "Edina", surname: "Kovač", role: "student" },
        { username: "zramic", password: "A<9@E8;<=", name: "Zerina", surname: "Ramić", role: "student" },
        { username: "dpozderac", password: ";8D@9>?@", name: "Damir", surname: "Pozderac", role: "student" }
    ];

    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === hashedPassword) {
            // Uspješna prijava
            return { success: true, user: users[i] };
        }
    }

    // Neuspješna prijava
    return { success: false, username: username };
}

function generateXMLResponse(loginResult, username) {
    var xmlDoc = document.implementation.createDocument(null, "loginResponse", null);

    var rootElement = xmlDoc.documentElement;

    var successElement = xmlDoc.createElement("success");
    successElement.textContent = loginResult.success;
    rootElement.appendChild(successElement);

    var timestampElement = xmlDoc.createElement("timestamp");
    timestampElement.textContent = new Date().toISOString();
    rootElement.appendChild(timestampElement);

    var processedForElement = xmlDoc.createElement("processedFor");
    processedForElement.textContent = loginResult.success ? loginResult.user.name + " " + loginResult.user.surname : username;
    rootElement.appendChild(processedForElement);

    var serializer = new XMLSerializer();
    var xmlString = serializer.serializeToString(xmlDoc);

    return xmlString;
}
