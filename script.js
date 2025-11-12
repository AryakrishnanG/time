function getTime()
{
 
    const time=new Date
    //console.log(time);

    const hr=time.getHours()
    //console.log(hr);
    const min=time.getMinutes()
    //console.log(min);
    const sec=time.getSeconds()

    result.innerHTML=`${hr}:${min}:${sec}`
    
    setTimeout(()=>
    {
        getTime()
    },1000)
    
    
 
}

getTime()


//Date is a predefined class to fetch data from the system. 

//Date is a clas so for access this class we need to create instance. 