document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    
    const depositTotal = document.getElementById('deposit-total');
    const previusDepositText = depositTotal.innerText;
    const previusDepositTotal = parseFloat(previusDepositText);
    
    const totalDeposit = newDepositAmount + previusDepositTotal;
    depositTotal.innerText = totalDeposit;

    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previusBlanceTotal = parseFloat(blanceTotalText);

    const newTotalBlance = previusBlanceTotal + newDepositAmount;

    blanceTotal.innerText = newTotalBlance;

    depositInput.value = '';
});



