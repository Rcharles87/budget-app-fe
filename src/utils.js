const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "usd",
    style: "currency",
    minimumFractionDigits: 2
})


const dateFormatter = (date) => {
    if (!date) return;
    let dateArr = date.split("-").slice(1)
    switch (dateArr[0]){
        case "01":
           dateArr[0] = "January"
           break;
        case "02":
            dateArr[0] ="Febuary"
            break;
        case "03":
            dateArr[0] = "March"
            break;
        case "04":
            dateArr[0] = "April"
            break;
        case "05":
            dateArr[0] = "May"
            break;
        case "06":
            dateArr[0] = "June"
            break;
        case "07":
            dateArr[0] = "July"
            break;
        case "08":
            dateArr[0] = "August"
            break;
        case "09":
            dateArr[0] = "September"
            break;
        case "10":
            dateArr[0] = "October"
             break;
        case "11":
            dateArr[0] = "November"
            break;
        case "12":
            dateArr[0] = "December"
            break;
        default:
            console.log("invaild date")    
        
    }
   return dateArr.join("-")
}


const colorChange =(total)=>{
    if(total<0){
        return "red"
    }
    else if(total >1000){
        return "green"
    }else{
        return "grey"
    }
}


dateFormatter("2022-01-12")
module.exports = {currencyFormatter, dateFormatter, colorChange }


