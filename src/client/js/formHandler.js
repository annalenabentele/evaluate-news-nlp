function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(Client.validateText(formText)){
        console.log("::: Form Submitted ::: ")
        fetchResult(formText)
            .then(json =>  {
                console.log(json)
                if(json.status.msg === "OK"){
                    document.getElementById('results').innerText = 
                            `Confidence: ${json.confidence}
                            Irony: ${json.irony}
                            Model: ${json.model}`
                } else {
                    document.getElementById('results').innerText = `Error: ${json.status.msg}`
                }
            })
    }

}

function fetchResult(formText){
    return fetch('http://localhost:8081/evaluate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text : formText})
    })
    .then(res => res.json())
}

export { handleSubmit, fetchResult }
