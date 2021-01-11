function textarea2HtmlById(id){
    var content = document.getElementById(id).value;
    content = content.replace(/\t/g,"&nbsp;&nbsp;");
    content = content.replace(/ /g,"&nbsp;");
    content = content.replace(/\n/g,"<br/>");
    return content;
}