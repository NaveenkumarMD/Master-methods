# About
Master-methods is a javascript add-on library which has some of the additional methods for arrays,objectsnumbers,strings,validations  and so on.

# usage
### es2015
    const math=require('master-methods')
### es2016
    import math from 'master-methods'
# Array methods

## Average
An array method that returns the **average** of the numbers in the array.

    const arr=[1,2,3]
    arr.average() //returns 2;
## Count
An array methods count the **cardinal value** of the given element.

    const arr=[1,1,2,3];
    arr.count(1) //returns 2;
## getElements
 An array method that **extracts** the elements from the array with the given count and condition.
 
 #### Params
 *  count -Indicates the number of elements to be extracted from the array
 * Function -a function that has the condition
 * Key (1 or -1) 
    * 1 selects the elements from the starting of the array.
    * -1 selects the elements  from the end.

Example: 

    const myarr=[1,2,3,4];
    myarr.getElements(2,x=>x%2==1);//return [1,3];
    myarr.getElements(2,-1)//return [3,4]
## Max
 An array method returns the **maximum value** in the given array.

    const arr=[12,3,4,56];
    arr.max()//returns 56;
## Min
 An array method returns the **minimum value** in the given array.

    const array=[1,2,3,4]
    arr.min()//returns 1;  
## MaxOccurence
An array method  that returns the element which **occurs** the most in the array.

    const arr=[1,2,3,4,5,3]
    arr.getmostOccurence()//returns {value:3,occurences:2}
## Median
An array method that returns the **median** of the elements in it.

    const arr=[1,2,3]
    arr.median()//returns 2;

## Optimize
An array method that removes the undefined and null values in it.

    const arr=[1,2,null,true,undefined,"naveeenkumar"]
    arr.optimize()//returns [1,2,true,"naveenkumar"]
## Remove
An array method that **removes** the **element or an array of elements** from it.

    const array=[1,2,3,4];
    array.remove(1) //returns [2,3,4]
    array.remove([3,4]) //returns [1,2]
    const arr=["naveen","kumar","md"]
    arr.remove("naveen")//returns ["kumar","md"]
    arr.remove(["naveen","md"])//returns ["kumar"]
## Sortf
An array method  that **sorts** the array in ascending or descending order.
#### Params
- key (optional, default value is **1**)
    - 1 sorts the array in ascending order.
    - -1 sorts the array in descending order.

- function It has ths condition for sorting.(Optional).
#### Example    
    const arr=[1,2,4,3]
    arr.sortf()//returns [1,2,3,4]
    arr.sortf(-1)//returns [4,3,2,1]
    const arr1=["naveen","kumar","md"]
    arr1.sortf()//returns ["kumar","md,"naveen"]

## Sum
An array method that returns the **sum** of the elements in it.

    const arr=[1,2,3]
    arr.sum()//returns 6
## Unique
An array method that **deletes** the duplicate elements in it.
   
    const arr=[1,3,5,2,3]
    arr.ditinct()//returns[1,3,5,2]
    const arr=["naveen","naveen"]
    arr.distinct()//returns ["naveen] 
  
# Number-methods
## Armstrong
A number method that checks whether the number is an **armstrong number** or not.

    const num=1634;
    num.isArmstrong()//returns true
    const num=1543;
    num.isArmstrong()//returns false
## Composite
A number method that checks whether the number is an **composite number** or not.

    const num=7;
    num.isComposite()//returns false;
    const num1=14
    num.isComposite()//returns true;
## Prime
A number method that checks whether the number is an **Prime number** or not.

    var num=3
    num.isPrime()//returns true
    num=4
    num.isprime()//returns false;
## Radian to degree
 A number method that converts the value in **radian to degree**.

    const a=0.7853981633974483
    a.toDegree()//returns 45

## Degree to radian
 A number method that converts the value in ** degree to radian**.

    const a=45;
    a.toRadian()//returns 0.7853981633974483
## Even 
A number method that checks whether a given number is **even or not**.

    var num=2;
    num.isEven()//returns true;
    num=3;
    num.isEven()//returns false;
## Odd
A number method that checks whether a given number is **odd or not**.
    
    var num=3
    num.isOdd()//returns true
    num=4
    num.isOdd()//returns false
## Length
 A number method that returns the **number of digits in it**.
    
    var num=2334
    num.length()//returns 4
## Reverse
A number method that returns the **reverse of it**.

    var num=1234
    num.reverse()//returns 4321
    num=100
    num.reverse()//returns 1
# String methods
## Reverse
A string method that returns the **reverse** of it.
     
    var str="naveen";
    str.sreverse()//returns "neevan"
## isEmpty
A string method checks whether a given string is empty or not.

    var str=""
    str.isEmpty()//returns true
    str="   "
    str.isEmpty()//returns true
## Truncate
 A string method that returns the string before the index or before the given string.

 ### Params
 index  or string  

    const str="Naveen kumar"
    str.truncate(3)//returns "Nav"
    str.truncate(" ")//returns "Naveen"

## Capitalize
A string method that capitalize the first letter itself.

    var about="i am a good boy"
    about.capitalize()//returns "I am a good boy"
## Swap case
A string method that swaps the cases in it.

    var name="Naveen Kumar"
    name.swapcase()//returns "nAVEEN kUMAr"
## Camel case
A string methods that returns the camel case version of it.

    var name="naveen kumar"
    name.camelCase()//returns naveenKumar
## Endswith
A string method that checks whether it **ends** with the specified string or not.
    
    const str="naveen kumar"
    str.endsWith("kumar")//returns true;
## Startswith
A string method that checks whether  it **starts** with the specified string or not

    const str="naveen kumar"
    str.startsWith("na")//returns true
## Casefold
A string method that converts all the letters in a string to lower case.

    const str="NaveenKumar"
    str.casefold()//returns "naveenkumar"
## Count
A string method that count the number of occurences of the given string.

    const str="Naveen kumar is a good boy"
    str.count("a");//returns 3
    str.count(" ");//returns 5
    str.count("aveen");//returns 1
## Alnum
A  string method that check whether the string contains only **aphabets and numbers**.
    
    const id="naveen9715";
    id.isAlnum()//return true
## Alpha
A  string method that check whether the string contains only **aphabets**.
    
    const id="naveen";
    id.isAlpha()//return true
## isNum
A  string method that check whether the string contains only **numbers**.
    
    const id="9715";
    id.isNum()//return true
# Math-methods
## Sum 
 A function that returns the **sum** of given two numbers.
    
    var x=sum(12,3)//returns 15
## Subtract
 A function that returns the **difference** of given two numbers.
    
    var x=subtract(12,3)//returns 9
## Multiply
 A function that returns the **product** of given two numbers.
    
    var x=product(12,3)//returns 36
## Divide
 A function that returns the **quotient** of given two numbers.
    
    var x=divide(12,3)//returns 4
## Modulo
 A function that returns the **modulo** of given two numbers.
    
    var x=subtract(12,3)//returns 0
## Roundoff
 A function that roundoff according to the given number of digits of given two numbers.
    
    var x=roundoff(12.4567,3)//returns 12.457

## Random
A function that returns the random number according to the number of digits and between two values.
### Params
- Digits -Number of digits
- Min    -Start limit
- Max    -End limit 
### Example:

    console.log(random(2))//returns 77 or something..
    console.log(random(3,450,460))//returns 451 or something between 450 and 560

## Palindrome
 A function that checks whether the given string or number is   a **palindrome** or not.

    var str="dad"
    isPalindrome(str)//returns true
    str=1234321
    isPalindrome(str)//returns true
# Validations

## Mail
 A string method that validates the mail id.
    
    const str="naveen9715568487@gmail.com"
    str.validateMail()//returns true
## Password
A string method that validates the password.

    const pass="Naveen@1234"
    pass.validatePass()//returns "strong"
    const pass1="naveen8870499146"
    pass1.validatePass()//returns "normal"
    const pass2="naveenkumar"
    pass2.validatePass()//returns "weak"
## Mobile
A string method that validates the mobile number.

    const mobile="+91 8870499146"
    mobile.validateMobile()//return true