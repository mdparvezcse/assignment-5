const historyData = [];

// heart functionality 
const hearts = document.getElementsByClassName('heart');
for (const item of hearts) {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        const getHeart = parseInt(document.getElementById("heart-count").innerText);
        document.getElementById("heart-count").innerText = getHeart + 1;
    })
}

// call button functionality

function call(item1, item2) {
    const getCoin = parseInt(document.getElementById("coin").innerText);
    if (getCoin >= 20) {
        alert("calling " + item1 + " " + item2 + "...");
        document.getElementById("coin").innerText = getCoin - 20;
        return true;
    }
    else {
        alert("You don't have enough coins. You need at least 20 coins to make a call");
        return false;
    }

}
// add history

function addHistory() {
    const parent = document.getElementById('history');
    parent.innerText = "";

    for (const data of historyData) {
        const div = document.createElement("div");
        div.innerHTML = `
                    <div class="flex justify-between items-center p-3 my-2 bg-gray-100 rounded-[16px]">
                        <div>
                            <h1 class="font-semibold text-[18px]">${data.title}</h1>
                            <h1 class="text-[18px]">${data.id}</h1>
                        </div>
                        <div>
                            <h1 class="text-[18px]">${data.time}</h1>
                        </div>
                    </div>
        `
        parent.appendChild(div);

    }

}


// all button 
document.getElementById("call-all").addEventListener("click", function (e) {
    e.preventDefault();
    const item1 = document.getElementById("all-title").innerText;
    const item2 = document.getElementById("all-number").innerText;
    const check = call(item1, item2);
    const data = {
        title: item1,
        id: item2,
        time: new Date().toLocaleTimeString()
    }
    historyData.push(data);
    if (check === true) {
        addHistory();
    }
})

// police 

document.getElementById("police-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item1 = document.getElementById("police-title").innerText;
    const item2 = document.getElementById("police-number").innerText;
    const check = call(item1, item2);
    const data = {
        title: item1,
        id: item2,
        time: new Date().toLocaleTimeString()
    }
    historyData.push(data);
    if (check === true) {
        addHistory();
    }
})
// fire btn
document.getElementById("fire-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item1 = document.getElementById("fire-title").innerText;
    const item2 = document.getElementById("fire-number").innerText;
    const check = call(item1, item2);
    const data = {
        title: item1,
        id: item2,
        time: new Date().toLocaleTimeString()
    }
    historyData.push(data);
    if (check === true) {
        addHistory();
    }
})
// ambulance
document.getElementById("ambulance-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item1 = document.getElementById("ambulance-title").innerText;
    const item2 = document.getElementById("ambulance-number").innerText;
    const check = call(item1, item2);
    const data = {
        title: item1,
        id: item2,
        time: new Date().toLocaleTimeString()
    }
    historyData.push(data);
    if (check === true) {
        addHistory();
    }
})

// women child help line
document.getElementById("help-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item1 = document.getElementById("help-title").innerText;
    const item2 = document.getElementById("help-number").innerText;
    const check = call(item1, item2);
    const data = {
        title: item1,
        id: item2,
        time: new Date().toLocaleTimeString()
    }
    historyData.push(data);
    if (check === true) {
        addHistory();
    }
})

// anti 
document.getElementById("anti-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item1 = document.getElementById("anti-title").innerText;
    const item2 = document.getElementById("anti-number").innerText;
    const check = call(item1, item2);
    const data = {
        title: item1,
        id: item2,
        time: new Date().toLocaleTimeString()
    }
    historyData.push(data);
    if (check === true) {
        addHistory();
    }
})
// electricity 
document.getElementById("electricity-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item1 = document.getElementById("electricity-title").innerText;
    const item2 = document.getElementById("electricity-number").innerText;
    const check = call(item1, item2);
    const data = {
        title: item1,
        id: item2,
        time: new Date().toLocaleTimeString()
    }
    historyData.push(data);
    if (check === true) {
        addHistory();
    }
})

// brac 
document.getElementById("brac-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item1 = document.getElementById("brac-title").innerText;
    const item2 = document.getElementById("brac-number").innerText;
    const check = call(item1, item2);
    const data = {
        title: item1,
        id: item2,
        time: new Date().toLocaleTimeString()
    }
    historyData.push(data);
    if (check === true) {
        addHistory();
    }
})
// railway
document.getElementById("rail-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item1 = document.getElementById("rail-title").innerText;
    const item2 = document.getElementById("rail-number").innerText;
    const check = call(item1, item2);
    const data = {
        title: item1,
        id: item2,
        time: new Date().toLocaleTimeString()
    }
    historyData.push(data);
    if (check === true) {
        addHistory();
    }
})

// clear button function 

document.getElementById("clear-btn").addEventListener("click", function (e) {
    e.preventDefault();
    historyData.length = 0;
    document.getElementById('history').innerHTML = "";
})


// copy function

function copy(item) {
    const getCopyCount = parseInt(document.getElementById("copy-count").innerText);

    const text = item;

    navigator.clipboard.writeText(text);

    alert("The number has been copied: " + item);

    document.getElementById("copy-count").innerText = getCopyCount + 1;

}

document.getElementById("all-copy-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item = document.getElementById("all-number").innerText;
    copy(item);
})

document.getElementById("police-copy-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item = document.getElementById("police-number").innerText;
    copy(item);
})

document.getElementById("fire-copy-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item = document.getElementById("fire-number").innerText;
    copy(item);
})

document.getElementById("ambulance-copy-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item = document.getElementById("ambulance-number").innerText;
    copy(item);
})

document.getElementById("help-copy-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item = document.getElementById("help-number").innerText;
    copy(item);
})

document.getElementById("anti-copy-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item = document.getElementById("anti-number").innerText;
    copy(item);
})

document.getElementById("electricity-copy-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item = document.getElementById("electricity-number").innerText;
    copy(item);
})

document.getElementById("brac-copy-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item = document.getElementById("brac-number").innerText;
    copy(item);
})

document.getElementById("rail-copy-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const item = document.getElementById("rail-number").innerText;
    copy(item);
})