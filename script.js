rating = "3";

function check(id)
{
    
    arr = ["#r1","#r2","#r3","#r4","#r5"];
    for(let i=0;i<5;i++)
    {
        select = document.querySelector(arr[i]);
        select.classList.remove("active");
    }
    selected_id = document.querySelector("#"+id);
    selected_id.classList.add("active");
    rating = id.toString();
}
function changeVisibility(){
    const first = document.getElementById("first");
    const second = document.getElementById("second");

    first.style.display="none";
    second.style.display="block";

    // first.style.visibility = "hidden";
    // ty.style.visibility = "visible";

    para = document.getElementById("sel_rating");
    para.innerHTML = "You selected "+rating[1]+" out of 5";
}