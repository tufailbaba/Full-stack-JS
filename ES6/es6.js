function rattings(rate = []){
    if(rate >= 4.5){
        return "Excellent";
    }else if(rate >= 3.5){
        return "Good";
    }else if(rate >= 2.5){
        return "Average";
    }else{
        return "Poor";
    }
}
rattings (5);