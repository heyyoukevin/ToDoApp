const ip = document.getElementById("inptxt");
const ls = document.getElementById("data");

function add()
{
    if(ip.value === '')
    {
        alert("Enter Thr Task! ! !");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = ip.value;
        ls.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    ip.value = "";
    save();
}

ls.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        save();
    }
}, false);

function save()
{
    localStorage.setItem("data", ls.innerHTML);
}

function show()
{
    ls.innerHTML = localStorage.getItem("data");
}

show();