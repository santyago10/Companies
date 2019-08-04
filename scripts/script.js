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
        if(empty==true){
            //Проверяем валидный ли E-Mail
            if(mailCheck==false){
                debugger;
                alert("Email is not valid");
            }
            else{ 
                //Проверка имени на валидность
                if(userNameValue.length==0){
                    alert("Field 'name' is required");
                }
                else{
                    //Проверка фамилии на валидность
                    if(userSirnameValue.length<3 || userSirnameValue>60){
                        alert("Field 'Usersirname' should contain from 3 to 60 letters");
                        debugger;
                    }
                    else{
                        //Проверка пола на валидность
                        if(userGenderValue=="Choose gender"){
                            alert("Gender is required");
                        } 
                        else{   //Проверка пароля на валидность
                            if(userPasswordValue.length<3){
                                alert("Minimal length of field 'Password' is 3");
                            }
                            else{
                                //Регистрация пользователя
                                let user=new User(userNameValue,userSirnameValue,userEmailValue,userGenderValue,userPasswordValue);
                                users.push(user);
                                alert("User created");
                                window.open('companies.html');
                                registration.reset();
                            }
                        }
                    }
                }    
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
            if(registrated==true){
                alert("Creating user error. Email already exists.");
            }
            //Если пользователь не зарегистрирован
            else
            {
                //Проверяем валидный ли E-Mail
            if(mailCheck==false){
                debugger;
                alert("Email is not valid");
            }
            else{ 
                //Проверка имени на валидность
                if(userNameValue.length==0){
                    alert("Field 'name' is required");
                }
                else{
                    //Проверка фамилии на валидность
                    if(userSirnameValue.length<3 || userSirnameValue>60){
                        alert("Field 'Usersirname' should contain from 3 to 60 letters");
                        debugger;
                    }
                    else{
                        //Проверка пола на валидность
                        if(userGenderValue=="Choose gender"){
                            alert("Gender is required");
                        } 
                        else{   //Проверка пароля на валидность
                            if(userPasswordValue.length<3){
                                alert("Minimal length of field 'Password' is 3");
                            }
                            else{
                                //Регистрация пользователя
                                let user=new User(userNameValue,userSirnameValue,userEmailValue,userGenderValue,userPasswordValue);
                                users.push(user);
                                alert("User created");
                                window.open('companies.html');
                                registration.reset();
                            }
                        }
                    }
                }    
            }
            }
        }
}







