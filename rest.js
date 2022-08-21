let prdctList =document.getElementById("products")
prdctList.firstElementChild('/products' , {
    method:"get" ,
    Headers:{
        "Content-type":"application/json"
    }
})

let vegList=document.getElementById("vgtbList")
vegList.firstElementChild('/vgtLlist' ,{
    method:"get" ,
    Headers:{
        "Content-type":"application/json"
    }
})

let fruitList=document.getElementById("frtsList")
fruitList.firstElementChild('/frtsList' ,{
    method:"get",
    Headers:{
        "content-type":"application/json"
    }
})

