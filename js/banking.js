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



document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdrawInput =parseFloat(withdrawInputText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previusWithdrawTotal = parseFloat(withdrawTotalText);

    const totalWithdraw = newWithdrawInput + previusWithdrawTotal;
    withdrawTotal.innerText = totalWithdraw;

    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previusBlanceTotal = parseFloat(blanceTotalText);

    const newTotalBlance = previusBlanceTotal - newWithdrawInput;

    blanceTotal.innerText = newTotalBlance;
    
    withdrawInput.value = '';
});