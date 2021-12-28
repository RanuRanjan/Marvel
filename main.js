// serach result div
let search_res=document.getElementById("search-res")

// api fetch
async function search1(char_search){
    
    // console.log(n)
        
    let res=await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${char_search}&apikey=a5030f5a54e8caea4219ed4d1e2e3c18`)   //here i fetch the data from api {n} search  

    let data =await res.json()
    // console.log(data.data.results);
    return data.data.results;
   
}


// search append function for
function append_res(res){
    search_res.innerHTML=null;

    res.forEach(({name})=>{
        let p=document.createElement('p')
        p.innerText=name;
        search_res.append(p)
    })
}


// main function
async function main(){
    let char_search=document.getElementById("search3").value

    let charter_res=await search1(char_search)
    if(charter_res===undefined){
       return false
    }
    append_res(charter_res)
    
}

var timerId;
function debounce(func,delay){
    // console.log("fired");
 let  char_search=document.getElementById("search3").value;
//  console.log(cha);
    if(char_search.length<2){
        return false
    }
    if (timerId) {
            clearTimeout(timerId);
        }
    timerId= setTimeout(() => {
         func();
     },delay);



 }

 async function search7(){
    
    // console.log(n)
        
    let res=await fetch(`https://gateway.marvel.com:443/v1/public/comics?&apikey=a5030f5a54e8caea4219ed4d1e2e3c18`)   //here i fetch the data from api {n} search  

    let data =await res.json()
    // console.log(data.data.results);
    // console.log(data.data.results);
    let fi=data.data.results
    return fi;
     
}
 fi.forEach(({series})=>{

 })

search7()