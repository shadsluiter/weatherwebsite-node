

const buttonOK = document.querySelector('#buttonOK')


document.querySelector('#weatherForm').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("clicked")
    const cityName = document.querySelector('#cityName').value 
    console.log(cityName)
    fetch('/weather/api/'+ cityName).then( (response) =>{
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                console.log(data)
                document.querySelector('#messageArea').textContent = data.report
            }
            })
    })
})