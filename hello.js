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

function stars(n){
    for(j=1;j<=n;j++){
        star(j)
    }
}

function makeStars(n){
    ans = "";
    for(i=1;i<=n;i++){
        if(i>1){
            ans = ans.concat("\\n");
        }
        for(j=1;j<=i;j++){
            ans = ans.concat("*");
        }
    }
    return ans;
}

function reverseStars(n){
    for(j=n;j>=1;j--){
        star(j)
    }
}

function stars2(n){
    stars(n);
    reverseStars(n-1);
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

function findSmallCount(a,n){
    ans = 0;
    for(i=0;i<a.length;i++){
        if (a[i] < n){
            ans++;
        }
    }
    return ans;
}

function findSmallerTotal(a,n){
    ans = 0;
    for(i=0;i<a.length;i++){
        if (a[i] < n){
            ans+=a[i];
        }
    }
    return ans;
}

function findAllSmall(a,n){
    ans = [];
    for(i=0;i<a.length;i++){
        if (a[i] < n){
            ans.push(a[i]);
        }
    }
    return ans;
}

function sum(a){
    ans = 0;
    for(i=0;i<a.length;i++){
        ans+=a[i];
    }
    return ans;
}

function table(n){
    for(i=1;i<=9;i++){
        console.log(n+"*"+i+" = "+n*i);
    }
}

function table9to9(){
    for(j=1;j<=9;j++){
        table(j);
    }
}
//print(3);
//star(5);
//console.log(starReturn(5));
//console.log(isUpperCase("Abcd"));
//console.log(isUpperCase("abcd"));
//console.log(position("abcd"));
//console.log(position("AbcD"));
//console.log(position("abCD"));
// console.log(findSmallCount([1, 2, 3], 2));
// console.log(findSmallCount([1, 2, 3, 4, 5], 0));
// console.log(findSmallerTotal([1, 2, 3], 3));
// console.log(findSmallerTotal([1, 2, 3], 1));
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 999));
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 0));
// console.log(findAllSmall([1, 2, 3], 10));
// console.log(findAllSmall([1, 2, 3], 2));
// console.log(findAllSmall([1, 3, 5, 4, 2], 4));
// console.log(sum([1, 2, 3]));
// console.log(sum([-1, 1, 2, -2, 3, -3]));
// stars(3);
// console.log(makeStars(5));
// stars2(3);
// table(1);
table9to9();