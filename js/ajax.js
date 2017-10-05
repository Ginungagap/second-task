function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
 
  
 function data (data) {
    document.getElementById("name").innerHTML = data["name"];
 
    var html ="<h3>" + data["position"] + "</h3>";
   
	 html += "<p>" + data["sex"] + ", " + data["age"]  + ", родился " + data["born"] + "</p>";
    document.getElementById("text").innerHTML = html;
};