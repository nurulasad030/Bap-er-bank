// diposite 
document.getElementById('deposit-btn').addEventListener('click', function () {
    // Taking input for deposite
  const depositField = document.getElementById('deposit');
  const newDepositeString = depositField.value;
  const newDeposite = parseFloat(newDepositeString);
  console.log(newDeposite);


  
//   deposite amount 
  const depositTotalElement = document.getElementById('total-deposit');
  const previosDepositTotalElementValueString =  depositTotalElement.innerText;
  const previosDepositTotalElementValue = parseFloat(previosDepositTotalElementValueString); 
  console.log(previosDepositTotalElementValue);
//  total amount
  const totalAmount = document.getElementById('total');
  const totalAmoutString = totalAmount.innerText;
  const totalValue = parseFloat(totalAmoutString);
  console.log(totalValue);

// calculation and value update
   const cureentDeposite = previosDepositTotalElementValue + newDeposite  ;

   depositTotalElement.innerText = cureentDeposite;

   const currentTotal = newDeposite + totalValue;

   totalAmount.innerText = currentTotal;

   console.log(currentTotal);


  depositField.value ='';
});

// withdraw

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdrawField');
    const withdrawFieldString =  withdrawField.value;
    const withdrawFieldValue = parseFloat(withdrawFieldString);
    console.log(withdrawFieldValue);

    // withdraw change

    const withdrawTotalElement = document.getElementById('withdrawTotal');
  const previoswithdrawTotalElementValueString =   withdrawTotalElement.innerText;
  const previoswithdrawTotalElementValue = parseFloat(previoswithdrawTotalElementValueString ); 
  console.log(previoswithdrawTotalElementValue);


//   total update

const totalAmount = document.getElementById('total');
  const totalAmoutString = totalAmount.innerText;
  const totalValue = parseFloat(totalAmoutString);
  console.log(totalValue); 

// calculation and update 
if( withdrawFieldValue>totalValue){
    alert('Baap er bank e' + withdrawFieldValue + ' tk nai');
    withdrawField.value ='';
    return;
}



const cureentWithdraw = previoswithdrawTotalElementValue + withdrawFieldValue  ;

withdrawTotalElement.innerText = cureentWithdraw;

const currentTotal = totalValue -withdrawFieldValue ;

   totalAmount.innerText = currentTotal;

   console.log(currentTotal);

withdrawField.value ='';


})

// logout

document.getElementById('logout').addEventListener('click',function(){
    const value = document.getElementById('logout')
    const value2 = value.innerText;

    if( value2=== 'Logout'){
        window.location.href="index.html"
    }
})
