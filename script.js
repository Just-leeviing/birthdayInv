const book = document.getElementById("book");
const bookOpen = document.getElementById("bookOpen");
const fade = document.getElementById("fade");
const main = document.getElementById("main");
const opening = document.getElementById("opening");
const reserve = document.getElementById("reserve");
const bgm = document.getElementById("bgm");
const scriptURL = "https://script.google.com/macros/s/AKfycbyVBN0GcQvfoXBIfUAv5tsCZnbgDSWOgzwtmeR1iopLCRBbbb5JvEsoDCPSDGKRHBY/exec";

book.addEventListener("click", () => {
    book.style.display = "none";
    bookOpen.style.display = "block";

    setTimeout(() => {
        fade.style.opacity = "1";

        setTimeout(() => {
            main.style.display = "block";
            bgm.play();
            opening.style.display = "none";
            fade.style.opacity = "0";
        }, 1500);

    }, 2000); 
});

reserve.addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const attendance = document.querySelector(
        'input[name="attendance"]:checked'
    )?.value;

    if (!name || !attendance) {
        alert("Please fill in everything!");
        return;
    }

    try {
        await fetch(scriptURL,{
            method:"POST",
            body: JSON.stringify({
                name:name,
                attendance:attendance
            })
        });
        alert("Reservation submitted!");
    } catch (error){
        console.error(error);
        alert("OMG something went wrong, so sorry..");
    }
});
        