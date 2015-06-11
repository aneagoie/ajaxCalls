(function() {
var link = document.getElementsByTagName('a')[0];
link.onclick = function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if ((xhr.readyState==4) && (xhr.status==200 || xhr.status == 304)) {

      var body = document.getElementsByTagName('body')[0];
      var json = JSON.parse(xhr.responseText);

      var heading = json.heading;
      var h2 = document.createElement('h2');
      var h2Text = document.createTextNode(heading);
      h2.appendChild(h2Text);

      body.appendChild(h2);

      body.removeChild(link);

    }
  };
  xhr.open("GET", "files/ajax.json", true);
  xhr.send(null);
  return false;

};

})();

