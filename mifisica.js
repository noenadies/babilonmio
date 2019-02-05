var ctime=0;
        var hy=0;
var cmtopx=20/0.988;
var ay=new BABYLON.Vector3(0, 1, 0);
var vts=new BABYLON.Vector3(0, 1, 0);

var tnstime=0;
function sc(st){
    document.getElementById("idp").innerHTML=st;
}
 function  caida(mesh){
mesh.translate(ay, (-cmtopx*ctime*ctime/7200*9.81)*0.0002);
 }  

 function  trasladatey(mesh,t1,t2){

if(t2<t1){
  //  mesh.translate(vts, (-0.15*t2+18)*t2*t2/2);
   
    mesh.translate(ay, (cmtopx*t2*t2/7200*9.81)*0.0002);
}

else{ctime=0;}



  

     }  