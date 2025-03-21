function isPalindrome(str){
    let flag=true;      
    for (let i = 0; i < (str.length/2); i++) {
            if(str[i]!=str[str.length-1-i])
            {
                 flag=false;
                 break;
            }
    }
    if(flag==true)
    {
        console.log(`Given String "${str}" is palindrome`)
    }
    else{
        console.log(`Given String "${str}" is not palindrome`)
    }
}

isPalindrome("madam");
isPalindrome("141");
isPalindrome("sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");