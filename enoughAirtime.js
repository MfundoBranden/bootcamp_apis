export function enoughAirtime(usage, airtime){
    let call = 1.88;
    let data = 12;
    let sms = 0.75;
 
    let total = 0;
    let callCount = 0;
    let smsCount = 0;
    let dataCount = 0;
  

    let usageArr = usage.split(",");

    for(let i in usageArr){

        let trimmed = usageArr[i].trim();

        if(trimmed.includes("call")){
            callCount += 1;

        }else if(trimmed.includes("data")){
            dataCount +=1;

        }else if(trimmed.includes("sms")){
            smsCount +=1 
        }
    }

    let change = airtime - (callCount*call + dataCount*data + smsCount*sms);

    if(change > 0){
        return "R"+change.toFixed(2);
    }else{
        return "R0.00";
    }
}

