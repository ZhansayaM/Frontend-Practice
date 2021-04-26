document.addEventListener("keydown", e => {
    let i, flag = 0;
    for (i = 0; i < 13; i++) {
        const idd = document.querySelectorAll("kbd")[i].id;
        if (e.key === idd) {
            console.log(e.key);
            console.log("The '" + idd.toUpperCase() + "' key is pressed");
            flag = 1;
            var audio = document.createElement("audio");
            audio.src = "sounds/" + idd.toUpperCase() + ".mp3";
            audio.play();
        }
    }
    if (flag === 0) {
        console.log("There is no such a key");
    }
});