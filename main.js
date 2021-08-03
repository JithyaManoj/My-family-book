function change_text(){
    document.getElementById("hd1").innerHTML="My dog collection ";
}

var doggy =["https://thumbs.dreamstime.com/b/dad-icon-cartoon-style-dad-icon-cartoon-style-white-background-123080092.jpg",
"https://thumbs.dreamstime.com/b/mother-portrait-beautiful-woman-long-brown-hair-young-standing-maternity-mom-vector-illustration-86364538.jpg",
"https://tse4.mm.bing.net/th?id=OIP.PWwj6pOan1hTx1g11XoMegAAAA&pid=Api&P=0&w=300&h=300",
"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213218/German-Shepherd-on-White-00.jpg"];
 
var n = ["Manoj","shreeja","Jaishnavi & Jithya","Jack"]

var d = 0;

function change(){
    document.getElementById("germansheperd").src= doggy[d];
    document.getElementById("named").innerHTML= n[d];
    d++;
    if(d>3){
        d=0;
    }
}


