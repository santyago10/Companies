let email=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
let registration=document.forms["registration"];
let userName=registration.elements["name"];
let userSirname=registration.elements["sirname"];
let userEmail=registration.elements["email"];
let userGender=registration.elements["gender"];
let userPassword=registration.elements["password"];
let button=document.getElementById("button");
let checkBox=document.getElementById("userCheck");

let registrated;
let empty;

let users=[];
class User{
    constructor(name,sirname,email,gender,password)
    {
        this.name=name;
        this.sirname=sirname;
        this.email=email;
        this.gender=gender;
        this.password=password;
    }
}

createUser=(name,sirname,email,gender,password)=>{
    let user=new User(name,sirname,email,gender,password);
    users.push(user);	
    console.log(users);			
}




//Функция отправки формы
let sendForm=()=>{
    //Получаем значения полей
    let userNameValue=userName.value;
    let userSirnameValue=userSirname.value;
    let userEmailValue=userEmail.value;
    let userGenderValue=userGender.value
    let userPasswordValue=userPassword.value;

    //Проверяем E-Mail на валидность
    let mailCheck=email.test(userEmailValue);

    //Проверяем пустой массив пользователей или нет
    if(users.length==0){
        empty=true;
    }
    else{
        empty=false;
    }
        //Если массив пустой
        if(empty){
            switch(empty){
                case !mailCheck:
                        alert("Email is not valid");
                        break;
                case userNameValue.length==0:
                        alert("Field 'name' is required");
                        break;
                case userGenderValue=="Choose gender":
                        alert("Field 'Gender'is required");
                        break;
                case userPasswordValue.length<3:
                        alert("Minimal length of field 'Password' is 3");
                        break;
                case userSirnameValue.length<3 || userSirnameValue.length>60:
                        alert("Field 'Usersirname' should contain from 3 to 60 letters");
                        break;
                default:
                        createUser(userNameValue,userSirnameValue,userEmailValue,userGenderValue,userPasswordValue);
                        registration.reset();
                        alert("User created");
                        break;
           }
        }
        //Если массив не пустой
        else{
            //Проверяем зарегистрирован пользователь или нет
            for(var i=0;i<users.length;i++)
            {
                if(userEmailValue==users[i].email){
                    registrated=true;
                    break;
                }
                else{
                    registrated=false;
                }
            }
            //Если пользователь уже зарегистрирован
            if(registrated){
                alert("Creating user error. Email already exists.");
            }
            //Если пользователь не зарегистрирован
            else
            {
                switch(!registrated){
                    case !mailCheck:
                        alert("Email is not valid");
                        break;
                    case userNameValue.length==0:
                         alert("Field 'name' is required");
                        break;
                    case userSirnameValue.length<3 || userSirnameValue.length>60:
                        alert("Field 'Usersirname' should contain from 3 to 60 letters");
                        break;
                    case userGenderValue=="Choose gender":
                        alert("Field 'Gender'is required");
                         break;
                    case userPasswordValue.length<3:
                        alert("Minimal length of field 'Password' is 3");
                        break;
                    default:
                        createUser(userNameValue,userSirnameValue,userEmailValue,userGenderValue,userPasswordValue);
                        registration.reset();
                        alert("User created");
                        break;
               }
            }
        }
    
}







