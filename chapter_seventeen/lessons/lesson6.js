function getRequest(url,callback){
    const xhr = XMLHttpRequest()
    xhr.open('get',url)

    xhr.onreadystatechange = function(e){
        if(xhr.readyState === 4){
            if(xhr.status){
                
            }
        }
    }

}

