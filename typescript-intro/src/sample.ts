
// EJ1
const calcula = (a:number,b:number):number => a + b
//calcula("Hola","Adios");
//calcula(5,"Adios");
let a:any = calcula(5,5);
calcula(a,8);

// EJ2
enum PaletaColores{
    VERDE = "green",
    AZUL = "blue",
    AMARILLO = "yellow"
}

interface User{
    username: string;
    password: string;
    isAdmin: boolean;
    roles?: string[];
    color?: PaletaColores;
    printUser?: () => void;
}

const imprimeUsuario = (user:User) => {
    console.log(`Hola ${user.username}`);
    user.roles?.forEach(e => console.log(e));
};

let user:User = {
    username:"Pepe",
    password:"1234",
    isAdmin: false,
    roles:["Hola"]
}
imprimeUsuario(user);


// EJ3
const imprimeUsuarioYColor = (user:User) => {
    console.log(`Hola ${user.username}`);
    user.roles?.forEach(e => console.log(e));
    console.log(`Tu color es el ${user.color}`);
};

let user2:User = {
    username:"Pepe",
    password:"1234",
    isAdmin: false,
    color: PaletaColores.AZUL
}
imprimeUsuarioYColor(user2);

// EJ3
let user3:User = {
    username:"Pepe",
    password:"1234",
    isAdmin: false,
    color: PaletaColores.AZUL,
    printUser: function(){
        console.log("TISSS",this);
        //imprimeUsuarioYColor(this)
    }
}

if(user3.printUser){
    user3.printUser();
}