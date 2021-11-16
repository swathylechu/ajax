function list(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){



        if(this.readyState==4 &&this.status== 200){
            var response=json.parse(this.responseText);
            var jlist=response.list;
            var output=" "
            for(var i=0;i<jlist.length;i++){
                
                output +=" <tr>" + jlist[i].SlNo + "</tr>";
                output +=" <tr>" + jlist[i].item + "</tr>"; 
                output +=" <tr>" + jlist[i].qty + "</tr>";
                output +=" <tr>" + jlist[i]. Notes+ "</tr>";
            }
            document.getElementById("table").innerHTML=output;
        }
     
     xhttp.open("GET","ajax.json",true);
     xhttp.send();
    }