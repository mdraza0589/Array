        const myArr=[0,10,20,30,true,"raza"];
        console.log(myArr[5]);
        
        // Method of Array 


        myArr.push(6)   //push put the value at last index
        myArr.push(9) 
        myArr.pop() 
        console.log(myArr);
        
        myArr.unshift(9)    //unshift push the value in 0 index
        console.log(myArr);
        myArr.shift()
        console.log(myArr);

        let a= myArr.includes(6)  //check value is available or not
        console.log(a);

        let newArr = myArr.join(" hello ")
        console.log(newArr);
         
        //slice   splise

        console.log("A",myArr);
        let myn1 = myArr.slice(1,3)  //slice doesn't change the actual Array
        console.log(myn1);

        console.log("B",myArr);
        let myn2 = myArr.splice(1,3)  //splice change the actual Array
        console.log("C",myArr);
        console.log(myn2);
        
        
        