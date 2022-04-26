// this js file is used for the goRest api html page

function hideTables(){
        for(let i=0; i<4; i++) {
            document.getElementsByClassName('fetchTables')[i].style.display = "none";
        }
}

function displayLoader(){
    let promise = new Promise(function(resolve,reject){
        document.getElementById("loader").style.display = "block";
        document.getElementById("loader").src="https://giphy.com/embed/y1ZBcOGOOtlpC";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
            resolve(true);
        }, 1000);
    })
    return promise;
   
}

async function fetchText(url) {

    await displayLoader();
    let response = await fetch(url);
    let data = await response.json();

    return data;
    
}

function getAllUsers() {

    hideTables();

    fetchText('https://gorest.co.in/public/v2/users').then((result)=>{
        document.getElementById("table1").style.display = "block";
        let text="";
        result.map((item)=> {

            text = text +
            "<td>"+item.id+"</td>"+ 
            "<td>"+item.email+"</td>"+ 
            "<td>"+item.name+"</td>"+ 
            "<td>"+item.gender+"</td>"+ 
            "<td>"+item.status+"</td></tr>" 

        });
        
        document.getElementById("target").innerHTML = text;

    });
    
}

function getAllPosts(){

    hideTables();
    
    fetchText('https://gorest.co.in/public/v2/posts').then((result)=>{

        document.getElementById("table2").style.display = "block";
        let text="";
        result.map((item)=> {

            text = text +
            "<td>"+item.id+"</td>"+ 
            "<td>"+item.user_id+"</td>"+ 
            "<td>"+item.title+"</td>"+ 
            "<td>"+item.body+"</td></tr>";
            
        });
        
        document.getElementById("target2").innerHTML = text;

    });
}

function getComments() {

    hideTables();

    fetchText('https://gorest.co.in/public/v2/comments').then((result)=>{
        
        let text="";
        result.map((item)=> {

            document.getElementById("table3").style.display = "block";
            text = text +
            "<td>"+item.id+"</td>"+ 
            "<td>"+item.post_id+"</td>"+ 
            "<td>"+item.name+"</td>"+ 
            "<td>"+item.email+"</td>"+
            "<td>"+item.body+"</td></tr>";
            
        });
        
        document.getElementById("target3").innerHTML = text;

    });

}

function getTodos() {

    hideTables();

    fetchText('https://gorest.co.in/public/v2/todos').then((result)=>{
        document.getElementById("table4").style.display = "block";
        let text="";
        result.map((item)=> {

            text = text +
            "<td>"+item.id+"</td>"+ 
            "<td>"+item.user_id+"</td>"+ 
            "<td>"+item.title+"</td>"+ 
            "<td>"+item.due_on+"</td>"+
            "<td>"+item.status+"</td></tr>";
            
        });
        
        document.getElementById("target4").innerHTML = text;

    });

}

