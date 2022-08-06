// <------Toggle Buttons-------->
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
        v_hist.style.display = "grid";
        v_curr.style.display = "none";
   
}