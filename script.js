function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    //Before send(),change to the match encoding
    //xobj.overrideMimeType("application/json");
    //initializes a request.
    //x.open(method,url,async)
    //method-GET,POST,PUT,DELE	TE, But Ignored for non-HTTP(S) URLS
    //url-the URL to send the request to
    xobj.open('GET', 'https://api.myjson.com/bins/cvwo7', true);
    xobj.onreadystatechange = function() {
    	//check the state by .readyState
    	//0=UNSENT,1=OPENDED,2=HEADER_RECEIVED,3=LOADING,4=DONE
    	//also check the status
    	//0=UNSENT,1=OPENDED,2=HEADER_RECEIVED,200=LOADING,200=DONE
    	//get a readonly usigned short.
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            //if the condition is ok,contains the response to the request as text
            callback(xobj.responseText);
            console.log("load");

        }
    }
    xobj.send(null);

function callback(result){
    var j=JSON.parse(result);
    console.log(j);
}    
}

function status(TagName,DataType,ID){
    this.TagName=TagName;
    this.DataType=DataType;
    this.ID=ID;
    this.getData=function(){
        return this.TagName+":"+this.DataType+";";
    }
    this.addprop=function(){
        var temp=this.TagName;
        var p=document.createElement("p");
        var txt=document.createTextNode(temp);
        p.appendChild(txt);
        console.log(p);
        var tempObj=document.getElementById(this.ID);
        tempObj.appendChild(p);
        tempObj.className="HiddenClass";
        p.id=this.ID+"dis";
        console.log(tempObj);
        // document.getElementById(this.ID).appendChild(p);
    }
}



window.onload=function(){
    var lamp1=new status("lamp1","Bool","statusSet1");
    console.log(lamp1.addprop());
    var lamp2=new status("lamp2","Bool","statusSet2");
    console.log(lamp2.addprop());
}



