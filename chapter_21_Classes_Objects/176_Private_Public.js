//private key (#)-Hidden data
class credential{
    #apiKey; //private key not allowed outside
    user;
    constructor(user,key){
        this.user = user;
        this.#apiKey = key;
    }
    //custom made function by us
    promodgetAuthHeader(){
        return "Bearer" + this.#apiKey;
    }
    
}
let cred = new credential("admin","secret_key_1234");
console.log(cred.user);
// console.log(cred.apiKey); undefined
// console.log(cred.#apiKey); //error

const token = cred.promodgetAuthHeader();
console.log(token);