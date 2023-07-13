
const saveLocalStorage = (fullName, yourUsername, password) => {

    const Client = JSON.parse(localStorage.getItem('dataClient'))  

    let ClientLogin = null
    let ClientPass = null
 
    try {
        for (let item of Client) {
            ClientLogin = item.log;
            ClientPass = item.pass;
            
        }
    } catch{}
    if (yourUsername.value !== ClientLogin && password.value !== ClientPass ) {
        let clients = []
        let data = {name: fullName.value, log: yourUsername.value, pass: password.value}
        let dataClient = localStorage.getItem('dataClient')
     
        if (dataClient) {
            clients = JSON.parse(dataClient)
        }
        clients.push(data)
        localStorage.setItem('dataClient', JSON.stringify(clients))
    }




}
export default saveLocalStorage