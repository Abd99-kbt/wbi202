
function GenerateCaptcha() {  
    let chr1 = Math.ceil(Math.random() * 10) + '';  
    let chr2 = Math.ceil(Math.random() * 10) + '';  
    let chr3 = Math.ceil(Math.random() * 10) + '';  

    let str = new Array(4).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); });  
    let captchaCode = str + chr1 + ' ' + chr2 + ' ' + chr3;  
        document.getElementById("txtCaptcha").value = captchaCode  
    }
    function removeSpaces(string) {  
        return string.split(' ').join('');  
    }  
    

let submit = document.getElementById('submit');

submit.onclick = function(){

    let Name = document.getElementById('name').value;
    if(Name == ""){
        Name = document.getElementById('name');
        alert('لا يمكن أن يكون اسم مقدم الطلب فارغ');
        Name.focus();
        Name.select();
        return false ;
    }
    
    
    let CName = document.getElementById('name');
    let CheckName = CName.value.search('^[0-9]+');
    if(CheckName == 0){
        CName = document.getElementById('name');
        alert('الاحرف العربية و الانكليزية فقط   ');
        CName.focus();
        CName.select();
        return false ;
    }

    let Phone = document.getElementById('Phone');
    let CheckPhone = Phone.value.search('^[0-0][9-9][3-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]');

    if(CheckPhone !=0){
        Phone = document.getElementById('Phone');
        alert('الرجاء إدخال رقم الموبايل بشكل صحيح \n يجب ان يبدأ الرقم بالرقمين 09');
        Phone.focus();
        Phone.select();
        return false ;
    }
    let National = document.getElementById('national');
    let CheckN = National.value.search('^[1-9][0-4][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]');
    if(CheckN != 0){
        National = document.getElementById('national');
        alert('الرجاء إدخال الرقم الوطني بشكل صحيح \n يتكون من 11 خانة \n اول رقمين بين (1) و(14)');
        National.focus();
        National.select();
        return false ;
    }
   
    let Email = document.getElementById('email').value;

    if(Email ==""){
        Email = document.getElementById('email');
        alert('الرجاء إدخال البريد الالكتروني الخاص بمقدم الطلب');
        Email.focus();
        Email.select();
        return false ;
    }

    let BDate = document.getElementById('date').value;

    if(BDate ==""){
        BDate = document.getElementById('date');
        alert('لا يمكن ان يكون تاريخ الولادة فارغ');
        BDate.focus();
        BDate.select();
        return false ;
    }

    
   

    let LAmount = document.getElementById('amount').value;

    if(LAmount<1000000 || LAmount>10000000 || LAmount ==""){
        LAmount = document.getElementById('amount');
        alert('قيمة القرض لا يجب ان تكون فارغة \n القيمة المتاحة بين المليون و العشرة ملايين ليرة سورية ');
        LAmount.focus();
        LAmount.select();
        return false;
    }
    let code1 = removeSpaces(document.getElementById('txtCaptcha').value);
    let code2 = removeSpaces(document.getElementById('txtCompare').value);
    if(code1 != code2){
        let code1 = document.getElementById('txtCaptcha');
        let code2 = document.getElementById('txtCompare');
        alert('الرجاء ادخال كود التحقق بشكل صحيح \n يوجد حساسية للحروف الكبيرة ');
        code1.focus();
        code2.focus();
        code2.select();
        return false;
    }
    window.localStorage.setItem("CName",document.getElementById('name').value);
    window.localStorage.setItem("national",document.getElementById('national').value);
    window.localStorage.setItem("date",document.getElementById('date').value);
    window.localStorage.setItem("Phone",document.getElementById('Phone').value);
    window.localStorage.setItem("email",document.getElementById('email').value);
    window.localStorage.setItem("amount",document.getElementById('amount').value);
    window.localStorage.setItem("txtCompare",document.getElementById('txtCompare').value);
    window.localStorage.setItem("type",document.getElementById('type').value);
    window.localStorage.setItem("time",document.getElementById('time').value);
    window.localStorage.setItem("method",document.getElementById('method').value);
    
}

    