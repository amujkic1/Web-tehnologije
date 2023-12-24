$(document).ready(function() {
    // Postavljanje događaja klika na dugme "Pošalji"
    $("#posalji").click(function() {
        // Priprema podataka iz forme
        var formData = {
            ime: $("#ime").val(),
            prezime: $("#prezime").val(),
            adresa: $("#adresa").val(),
            broj_telefona: $("#broj_telefona").val()
        };

        // Slanje POST zahtjeva putem AJAX-a
        $.ajax({
            type: "POST",
            url: "http://localhost:8085/unos",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function(response) {
                // Ažuriranje tabele nakon uspješnog slanja podataka
                updateTable();
            },
            error: function(error) {
                console.log("Greška pri slanju podataka:", error);
            }
        });
    });

    // Funkcija za ažuriranje tabele
    function updateTable() {
        // Slanje GET zahtjeva za dobivanje ažurirane tabele
        $.ajax({
            type: "GET",
            url: "http://localhost:8085/tabela",
            success: function(response) {
                // Ažuriranje sadržaja tabele
                $("#tabela-container").html(response);
            },
            error: function(error) {
                console.log("Greška pri dohvaćanju tabele:", error);
            }
        });
    }

    // Inicijalno ažuriranje tabele kada se stranica učita
    updateTable();
});
