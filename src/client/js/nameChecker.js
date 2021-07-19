function validateText(inputText) {
    console.log("::: Running checkForName :::", inputText);

    if(inputText === '') {
        window.alert("Please enter a text.")
        return false
    }
    return true
}

export { validateText }
