document.addEventListener("keypress", function(event) {
    let validKeys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyW", "KeyE", "KeyT", "KeyY", "KeyU"]
    if (validKeys.includes(event.code)) {
        let keyName = event.code.slice(-1)
        let fileName = keyName + ".mp3"
        let sound = new Audio("media/audio/" + fileName)
        sound.play()
    } else {
        console.log("Warning: not a valid key.")
    }
})