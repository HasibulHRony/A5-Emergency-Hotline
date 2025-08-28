

//function of getting element by id
function gettingElementBYId(id) {
    const element = document.getElementById(id);
    return element;
}

gettingElementBYId("all-hotlines").addEventListener("click", function (e) {

    //heart count increasing functionality
    if (e.target.className.includes("heart") === true) {
        let heartCountText = gettingElementBYId("heart-count").innerText;
        let heartCountNumber = Number(heartCountText);
        heartCountNumber++;
        gettingElementBYId("heart-count").innerText = heartCountNumber;
    }

    //call buttons functionality
    if (e.target.className.includes("call-btn") === true) {
        // getting the title and number and img from cart
        const title = e.target.parentNode.parentNode.children[1].children[0].innerText;
        const hotlineNumber = e.target.parentNode.parentNode.children[2].children[0].innerText;

        //getting the coin number
        let coins = gettingElementBYId("coins").innerText;
        let coinsNumber = Number(coins);


        // sawing alert for calling
        if (coinsNumber < 20) {
            // sawing alert not sufficient coins for calling 
            return alert("You Don't Have Sufficient Coin. Try again later.");
        }
        else {
            //sawing alert for call and minus coins
            alert(`You are calling at ${title}. Hotline is ${hotlineNumber}. Are you confirm?`);
            coinsNumber = coinsNumber - 20;
            gettingElementBYId("coins").innerText = coinsNumber;
        }

        const now = new Date();
        const currentTime = now.toLocaleTimeString();
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="flex justify-between items-center my-2 p-4 bg-white rounded-lg shadow-md">
                <div class="flex flex-col">
                    <h3 class="text-lg font-semibold mb-2">${title}</h3>
                    <p>${hotlineNumber}</p>
                </div>
                <div class="flex items-center">
                    ${currentTime}    
                </div>
            </div> 
            `;
        const historyContainer = gettingElementBYId("history-container");
        historyContainer.appendChild(div);

    }



    // copy button functionality
    if (e.target.className.includes("copy-btn") === true) {

        //copy count increase
        const hotlineNumber2 = e.target.parentNode.parentNode.children[2].children[0].innerText;
        const copyCount = gettingElementBYId("copy-count").innerText;
        let copyCountNumber = Number(copyCount);
        alert(`Are you want to copy the hotline number ${hotlineNumber2}?`)
        copyCountNumber = copyCountNumber + 1;
        gettingElementBYId("copy-count").innerText = copyCountNumber;


    }
})

// clear btn functionality
gettingElementBYId("clear-btn").addEventListener("click", function () {
    const clearHistory = gettingElementBYId("history-container");
    clearHistory.innerHTML = "";
})
