
// const xhr = new XMLHttpRequest()

// xhr.open('get','https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function(e){
//     if (xhr.readyState===4){
//         if(xhr.status ===200){
//             let data = JSON.parse(xhr.response)
//             console.log(data)
//         } else{
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send()





function getRequest(url,callback){
    const xhr = new XMLHttpRequest()

    xhr.open('get', url)

    xhr.onreadystatechange = function(e){
        if (xhr.readyState===4){
            if(xhr.status ===200){
                let response = JSON.parse(xhr.response)
                callback(null,response)

                
            } else{
                callback(xhr.response,null)
            }
        }
    }
    xhr.send()

}

getRequest('https://jsonplaceholder.typicode.com/users',(err,res)=>{
    if(err){
        console.log(err)
    } else{
        res.forEach(r=> alert(r.name))
    }
})


getRequest('https://jsonplaceholder.typicode.com/posts',(err,res)=>{
    if(err){
        console.log(err)
    } else{
        res.forEach(r => 
            console.log(r.title)
            
        );
    }
})







