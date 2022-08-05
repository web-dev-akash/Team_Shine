// var left=1;
// var right=5;
// function showImg(){
//     for(i=left; i<=right; i++){
//      document.getElementById("v"+i).style.display("inline-block");
//     }
    
// }
// function moveLeft(){
//     if(left<=3 && right <=7){
//         document.getElementById(v${left}).style.display("none");
//         left+=1;
//         right+=1;

//         for(i=left; i<=right; i++){
//             document.getElementById("v"+i).style.display("inline-block");
//         }
//     } 
//     else
//     return;
// }

// function moveRight(){
//     if(left>=2 && right >= 6){
//         document.getElementById("v"+right).style.display("none");
//         left-=1;
//         right-=1;

//         for(i=left; i<=right; i++){
//             document.getElementById("v"+i).style.display("inline-block");
//         }
//     } 
//     else
//     return;
// }
var v_curr = document.getElementById("v_cool_places");
var v_hist = document.getElementById("v_top_companies");
console.log(v_curr,v_hist);
function v_btnFun1(){
    console.log("run");
   
   // if (v_curr.style.display === "none"){
        v_hist.style.display = "none";
        v_curr.style.display = "flex";
 //   }
  //  else{
   // }
}
function v_btnFun2(){
    console.log("run");

   // if (v_hist.style.display === "none"){
        v_hist.style.display = "flex";
        v_curr.style.display = "none";
   
}