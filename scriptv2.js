function getDogs () {
    fetch('http://localhost:3000/posts', {
        method: 'get'
    }).then((response) => {
        response.json().then((data) => {
            //am adus datele
            var body = document.getElementsByTagName("body")[0];
            //var div1 = document.createElement("div");
            //div1.setAttribute("id", "dog-list");
            for(let i = 0; i < data.length; i++) {
                var div2 = document.createElement("div");
                div2.setAttribute("class", "clearfix container1");
                var div3 = document.createElement("div");
                var div4 = document.createElement("div");
                div3.setAttribute("class","cont col-6 marg");
                div4.setAttribute("class", "cont col-6");
               
                var img = document.createElement("img");
                img.setAttribute("src", data[i].img);
                img.setAttribute("class","img2");
                div3.appendChild(img);
                
                var h1 = document.createElement("H1");
                h1.innerHTML = data[i].info;
                var h4 = document.createElement("H4");
                h4.innerHTML = data[i].desc;
                
                
                var deleteButton = document.createElement('button');
                deleteButton.appendChild(document.createTextNode("Delete dog"));
                deleteButton.setAttribute("class","buton")
                deleteButton.style.marginLeft = "3%";
                deleteButton.onclick = function() { deleteDog(data[i].id)}
                div4.appendChild(h1);
                div4.appendChild(h4);
                              
                div2.appendChild(div3);
                div2.appendChild(div4);
                
                div2.appendChild(deleteButton);
                
                div2.style.marginTop = "3%";

                //div1.appendChild(div2);
                body.appendChild(div2);
                var br = document.createElement("br");
                body.appendChild(br);
            }
            
        })
    })
}

getDogs();

function addDog() {
    var info = document.getElementById("input-info").value;
    var desc = document.getElementById("input-desc").value;
    var img = document.getElementById("input-img").value;
    var newDog = {
        info: info,
        desc: desc,
        img: img
    }
    fetch('http://localhost:3000/posts', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDog)
    }).then(function(response) {
        console.log(response);
        window.location.reload();
    })
}

function deleteDog(id) {
    var sure = confirm("Are you sure you want to delete this?");
    if (sure == true) {
    fetch('http://localhost:3000/posts/' + id, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        window.location.reload();
    })}
    else return;
}

function updateDog() {
    var id = document.getElementById("update-id").value;
    var info = document.getElementById("update-info").value;
    var desc = document.getElementById("update-desc").value;
    var img = document.getElementById("update-img").value;
    var newDog = {
        info: info,
        desc: desc,
        img: img
    }

    console.log(newDog, id)

    fetch('http://localhost:3000/posts/' + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDog)
    }).then(function(response) {
        window.location.reload();
    })
}