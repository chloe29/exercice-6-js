function calc(){
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var result = firstNumber % secondNumber;
    if(isNaN(firstNumber) && isNaN(secondNumber)){
      alert('Veuillez saisir des valeurs correctes');
    }else{
      alert(result);
    }
}

// Deuxième méthode :
    // if (isNaN(firstNumber) == false && isNaN(secondNumber) == false && secondNumber != 0){
    //   var result = firstNumber % secondNumber;
    //   alert('Le résultat est : ' + result);
    // }else{
    //   alert('Veuillez saisir un nombre');
    // }
