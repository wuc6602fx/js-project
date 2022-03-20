//https://pvt5r486.github.io/uncategorized/20190428/910365601/
function print(n){
    i = 1;
    while(i<=n){
        console.log(i);
        i++;
    }    
}

function star(n){
    s = "";
    i = 1;
    while(i<=n){
        s = s.concat('*');
        i++;
    }    
    console.log(s);
}

function starReturn(n){
    s = "";
    i = 1;
    while(i<=n){
        s = s.concat('*');
        i++;
    }    
    return s;
}

function isUpperCase(s){
    s1 = s.charAt(0);
    return s1 == s1.toUpperCase();
}
//print(3);
//star(5);
//console.log(starReturn(5));
console.log(isUpperCase("Abcd"));
console.log(isUpperCase("abcd"));