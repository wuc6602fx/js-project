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

function position(s){
    for(i = 0 ; i < s.length ; i++){
        c = s.charAt(i);
        if (c == c.toUpperCase()){
            return c + ' ' + i;
        }
    }
    return -1;
}

//print(3);
//star(5);
//console.log(starReturn(5));
//console.log(isUpperCase("Abcd"));
//console.log(isUpperCase("abcd"));
console.log(position("abcd"));
console.log(position("AbcD"));
console.log(position("abCD"));