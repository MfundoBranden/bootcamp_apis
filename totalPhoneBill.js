export  function totalPhoneBill(callsAndSms){
    let totalCost = 0;
    callsAndSms.split(",").forEach((item) => {
      item = item.trim();
      if (item === "call") {
        totalCost += 2.75;
      } else if (item === "sms") {
        totalCost += 0.65;
      }
    });
    return totalCost.toFixed(2);
  };
  
  