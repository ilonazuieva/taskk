function finalGrade (e, p) {
    if (e > 90 || p > 10){
        return 100;
    } else if (e > 75 && p >= 5) {
        return 90;
    } else if (e > 50 && p >= 2){
        return 75
    } else{
        return 0
    }
}
//https://www.codewars.com/kata/5ad0d8356165e63c140014d4