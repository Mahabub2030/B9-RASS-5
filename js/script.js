const homePage = document.getElementById('home');
homePage.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "./home.html";
});

const donetNowButton = document.getElementById("donateNowButton");

donetNowButton.addEventListener('click', function (event) {
    event.preventDefault();

    const firstDonetInput = getBlanceValue('firstdonetinput')
    if (firstDonetInput <= 0 || isNaN(firstDonetInput)) {
        alert("Your number is invalid");
        return;
    }
    const YourCurrentBlance = Number(document.getElementById('YourCurrentBlance').innerText);
    const mainBlance = Number(document.getElementById('main-blance').innerText);
    

    if (mainBlance < firstDonetInput) {
        alert("There is no money in your account.");
        return;
    }

    // Update balances
    const newblance = (firstDonetInput + YourCurrentBlance).toFixed(2);
    document.getElementById("YourCurrentBlance").innerText = newblance
    console.log(newblance);


    const updateBlance = (mainBlance - firstDonetInput).toFixed(2);
    document.getElementById("main-blance").innerText = updateBlance;

    // Add donation to history
    const historyItems = document.createElement('div');
    historyItems.className = "border p-8 rounded-md mb-3";
    const currentDate = new Date().toLocaleString();
    historyItems.innerHTML = `<h1 class="text-xl font-bold">${firstDonetInput.toFixed(2)} Taka is Donated for Flood at Noakhali, Bangladesh</h1>
    <p class="text-sm text-gray-500">Date: ${currentDate}</p>
    `;

    const historyConteiner = document.getElementById('history-list');
    historyConteiner.insertBefore(historyItems, historyConteiner.lastChild);


    document.getElementById('my_modal_1').showModal();

});

// Second number Card 


const donetNowButtontwo = document.getElementById("donateNowButtontwo");

donetNowButtontwo.addEventListener('click', function (event) {
    event.preventDefault();
    // const firstDonetInputtwo = Number(document.getElementById('firstdonetinputtwo').value);
    const firstDonetInputtwo = getBlanceValue('firstdonetinputtwo')
    if (firstDonetInputtwo <= 0 || isNaN(firstDonetInputtwo)) {
        alert("Your number is invalid");
        return;
    }

    const YourCurrentBlancetwo = Number(document.getElementById('YourCurrentBlancetwo').innerText);
    const mainBlancetwo = Number(document.getElementById('main-blance').innerText);
    console.log(YourCurrentBlancetwo, mainBlancetwo);



    if (mainBlancetwo < firstDonetInputtwo) {
        alert("There is no money in your account.");
        return;
    }

    // Update balances
    const newblancetwo = (firstDonetInputtwo + YourCurrentBlancetwo).toFixed(2);
    document.getElementById("YourCurrentBlancetwo").innerText = newblancetwo;

    const updateBlancetwo = (mainBlancetwo - firstDonetInputtwo).toFixed(2);
    document.getElementById("main-blance").innerText = updateBlancetwo;


    const historyItems = document.createElement('div');
    historyItems.className = "border p-8 rounded-md mb-3";
    const currentDate = new Date().toLocaleString();
    historyItems.innerHTML = `<h1 class="text-xl font-bold">${firstDonetInputtwo.toFixed(2)} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
    <p class="text-sm text-gray-500">Date: ${currentDate}</p>
    `;

    const historyConteiner = document.getElementById('history-list');
    historyConteiner.insertBefore(historyItems, historyConteiner.lastChild);



    document.getElementById('my_modal_1').showModal();

});

// Third number Card 


const donetNowButtonthird = document.getElementById("donateNowButtontwothird");

donetNowButtonthird.addEventListener('click', function (event) {
    event.preventDefault();
    // const firstDonetInputthird = Number(document.getElementById('firstdonetinputthird').value);
    const firstDonetInputthird = getBlanceValue('firstdonetinputthird')
    console.log(firstDonetInputthird);

    console.log("btn clickde");

    if (firstDonetInputthird <= 0 || isNaN(firstDonetInputthird)) {
        alert("Your number is invalid");
        return;
    }

    const YourCurrentBlancethird = Number(document.getElementById('YourCurrentBlancethird').innerText);
    const mainBlancethird = Number(document.getElementById('main-blance').innerText);
    console.log(YourCurrentBlancethird, mainBlancethird);



    if (mainBlancethird < firstDonetInputthird) {
        alert("There is no money in your account.");
        return;
    }

    // Update balances
    const newblancethird = (firstDonetInputthird + YourCurrentBlancethird).toFixed(2);
    document.getElementById("YourCurrentBlancethird").innerText = newblancethird;

    const updateBlancethird = (mainBlancethird - firstDonetInputthird).toFixed(2);
    document.getElementById("main-blance").innerText = updateBlancethird;

   
    const historyItems = document.createElement('div');
    historyItems.className = "border p-8 rounded-md mb-3";
    const currentDate = new Date().toLocaleString();
    historyItems.innerHTML = `<h1 class="text-xl font-bold">${firstDonetInputthird.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </h1>
    <p class="text-sm text-gray-500">Date: ${currentDate}</p>

    `;

    const historyConteiner = document.getElementById('history-list');
    historyConteiner.insertBefore(historyItems, historyConteiner.lastChild);

    // Modal Added 

    document.getElementById('my_modal_1').showModal();

});

// History button Clicked
const historyButton = document.getElementById('history-btn');
historyButton.addEventListener('click', function () {
    historyButton.classList.add("bg-[#B4F461]");
    historyButton.classList.remove("bg-transparent", "border");

    const mainSection = document.getElementById('main-section');
    mainSection.classList.add("hidden");

    const donationButton = document.getElementById('donation-btn');
    donationButton.classList.remove("bg-[#B4F461]");
    donationButton.classList.add("bg-transparent", "border");

    const historyConteiner = document.getElementById('history-list');
    historyConteiner.classList.remove("hidden");
});

// Donation button Clicked
const donationButton = document.getElementById('donation-btn');
donationButton.addEventListener('click', function () {
    donationButton.classList.add("bg-[#B4F461]");
    donationButton.classList.remove("bg-transparent", "border");

    const historyButton = document.getElementById('history-btn');
    historyButton.classList.remove("bg-[#B4F461]");
    historyButton.classList.add("bg-transparent", "border");

    const mainSection = document.getElementById('main-section');
    mainSection.classList.remove("hidden");

    const historyConteiner = document.getElementById('history-list');
    historyConteiner.classList.add("hidden");
});



