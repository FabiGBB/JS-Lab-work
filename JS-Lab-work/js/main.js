function userForm() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('mail').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var province = document.getElementById('province').value;
    var membership = document.getElementsByName('membership');
    var membershipChoice;
    for (let i=0 ; i<membership.length ; i++){
        if (membership[i].checked) {
            membershipChoice = membership[i].value;
        }
    }
    document.getElementById("output").innerHTML = "Full name : " + fname + " " + lname + "<br>" + "Email : " + email + "<br>" + "Address : " + address + "<br>City : " + city +"  " + province + "<br>" + "Membership : " + membershipChoice;
}



document.getElementById("btn").addEventListener("click", myExcelFuns);

function myExcelFuns(){
    var numberStr = document.getElementById("numbers").value;

    if (numberStr == ""){
        alert("You need to enter numbers");
    } else{
        numberStr = numberStr.trim();
        const tempArr = numberStr.split(" ");
        var numberArr =[];
        var result = 0;

        for (let i=0 ; i < tempArr.length ; i++){ 
            if (!(isNaN(tempArr[i]) || tempArr[i] == " " || tempArr[i]=="")) {
                numberArr.push(parseInt(tempArr[i]));
            }
        }

        if (document.getElementById("sum").checked){
            for (let i=0 ; i < numberArr.length ; i++){
                result += numberArr[i];
            }
        }

        if (document.getElementById("avg").checked){
            for (let i=0 ; i < numberArr.length ; i++){
                result += numberArr[i];
            }
            result = result/numberArr.length;
        }

        if (document.getElementById("max").checked){
            result = Math.max(...numberArr);
        }

        if (document.getElementById("min").checked){
            result = Math.min(...numberArr);
        }

        document.getElementById("result").innerHTML = "Result : " + result;
    }
}