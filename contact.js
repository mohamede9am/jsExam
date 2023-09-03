$(".fa-bars").on("click", function() {
    if ($(".navTwo").is(":hidden")) {
    $(".navTwo").show(700)
    $(".fa-bars").toggleClass("fa-xmark")
    $(".main-menu").removeClass("animate__bounceOutDown")
    }else {
        $(".navTwo").hide(800)
        $(".fa-bars").toggleClass("fa-xmark")
        $(".main-menu").addClass("animate__bounceOutDown  animate__fast	50ms")
    }
});


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Start Categoy Start Categoy Start Categoy Start Categoy Start Categoy Start Categoy

// Start Categoy 111
// Start Categoy 111

$("#categoryli").on("click", async function() {
    async function getapiCat() {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
        response = await response.json();
        return response.meals;
    }

    async function display() {
        const meals = await getapiCat();
        let allDesign = '';
        for (let i = 0; i < meals.length; i++) {
            const category = meals[i].strCategory;
            allDesign += `<div class="col-md-3">
                <div class="meal  position-relative overflow-hidden rounded-2 cursor-pointer" onclick="displayCat2('${category}')">
                    <img class="w-100 cater" src="https://www.themealdb.com/images/category/${category}.png" alt="${category}">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h4 class="text-danger">${category}</h4>
                    </div>
                </div>   
            </div>`;
        }
        document.querySelector(".row").innerHTML = allDesign;
    }
    await display();
});
// end Categoy 111
// end Categoy 111


// Start Categoy 222
// Start Categoy 222
async function getApicatCat(category) {
    const mealElement = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const mealElementData = await mealElement.json();
    return mealElementData.meals;
}
async function displayCat2(category) {
    const CatCat = await getApicatCat(category);
    let mealDetails = '';
    for (let i = 0; i < CatCat.length; i++) {
        const number = await CatCat[i].idMeal
        mealDetails += `<div class="col-md-3">
            <div class="meal position-relative overflow-hidden rounded-3 cursor-pointer" onclick="displayCat3('${number}')" id="${CatCat[i].idMeal}">
                <img class="w-100" src="${CatCat[i].strMealThumb}">
                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                    <h4 class="text-danger">${CatCat[i].strMeal}</h4>
                </div>
            </div>   
        </div>`;
    }
    document.querySelector(".row").innerHTML = mealDetails;
}
// end Categoy 222
// end Categoy 222

// Start Categoy 333
// Start Categoy 333

async function getApiArtical(number) {
    const mealElement = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${number}`);
    const mealElementData = await mealElement.json();
    console.log(mealElementData);
    return mealElementData.meals;
}
async function displayCat3(number) {
    const CatCat = await getApiArtical(number);
    let mealDetails = '';
    for (let i = 0; i < CatCat.length; i++) {
        mealDetails += `
            <div class="col-md-4">
            <div class="img rounded-2 me-5 cursor-pointer">
                <img class="w-100 rounded-2" src="${CatCat[i].strMealThumb}">
                <h4 class="text-danger">${CatCat[i].strMeal}</h4>
            </div>   
            </div>

            <div class="col-md-8 text-white">
            <h2>Instructions :</h2>
            <p>${CatCat[i].strInstructions}</p>
            <div class="info1 d-flex align-items-center">
                <h4>Area :</h4><span>${CatCat[i].strArea}</span>
            </div>
            <div class="info2 d-flex align-items-center">
                <h4>Category :</h4><span>${CatCat[i].strCategory}</span>
            </div>
            <div class="info3">
                <h5>Recipes :</h5> 
                <ul class="d-flex flex-wrap g-3 m-2 p-1">
                <li class="alert alert-info m-2 p-1">${CatCat[i].strMeasure1}</li>             
                <li class="alert alert-info m-2 p-1">${CatCat[i].strMeasure2}</li>             
                <li class="alert alert-info m-2 p-1">${CatCat[i].strMeasure3}</li>             
                <li class="alert alert-info m-2 p-1">${CatCat[i].strMeasure4}</li>             
                <li class="alert alert-info m-2 p-1">${CatCat[i].strMeasure5}</li>             
                <li class="alert alert-info m-2 p-1">${CatCat[i].strMeasure6}e</li>             
                <li class="alert alert-info m-2 p-1">${CatCat[i].strMeasure7}e</li>             
                <li class="alert alert-info m-2 p-1">${CatCat[i].strMeasure8}e</li>             
                </ul>
            </div>
            <div class="info3">
                <h5>Tags:</h5>
                <a href="${CatCat[i].strSource}" class="btn btn-success" target="_blank">Source</a>
                <a href="${CatCat[i].strYoutube}" class="btn btn-danger" target="_blank">Youtube</a>
            </div>
            </div>`
    }
    document.querySelector(".row").innerHTML = mealDetails;
}
// end Categoy 333
// end Categoy 333
    

// End Category End Category End Category End Category End Category End Category End Category


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Start area Start area Start area Start area Start area Start area
// Start area 111
// Start area 111
$("#areali").on("click", async function() {
    async function getapiarea() {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        response = await response.json();
        return response.meals;
    }

    async function displayArea() {
        const meals = await getapiarea();
        let allDesign = '';
        for (let i = 0; i < meals.length; i++) {
            const categoryArea = meals[i].strArea;
            allDesign += `<div class="col-md-3">
                <div class="meal  position-relative overflow-hidden rounded-2 cursor-pointer" onclick="displayArea2('${categoryArea}')">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h4 class="text-danger">${categoryArea}</h4>
                    </div>
                </div>   
            </div>`;
        }
        document.querySelector(".row").innerHTML = allDesign;
    }
    await displayArea();
});

// end area 111
// end area 111

// Start area 222
// Start area 222area
async function getApicatArea(categoryArea) {
    const mealElement = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${categoryArea}`);
    const mealElementData = await mealElement.json();
    return mealElementData.meals;
}
async function displayArea2(categoryArea) {
    const CatCat = await getApicatArea(categoryArea);
    let mealDetails = '';
    for (let i = 0; i < CatCat.length; i++) {
        const number = await CatCat[i].idMeal
        mealDetails += `<div class="col-md-3">
            <div class="meal position-relative overflow-hidden rounded-3 cursor-pointer" onclick="displayCat3('${number}')" id="${CatCat[i].idMeal}">
                <img class="w-100" src="${CatCat[i].strMealThumb}">
                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                    <h4 class="text-danger">${CatCat[i].strMeal}</h4>
                </div>
            </div>   
        </div>`;
    }
    document.querySelector(".row").innerHTML = mealDetails;
}
// end area 222
// end area 222
// end area end area end area end area end area end area end area

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Start Ingredients Start Ingredients Start Ingredients Start Ingredients Start Ingredients Start Ingredients
// Start Ingredients 111
// Start Ingredients 111
$("#ingrli").on("click", async function() {
    async function getapiingrli() {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        response = await response.json();
        return response.meals;
    }

    async function displayingrli() {
        const meals = await getapiingrli();
        let allDesign = '';
        for (let i = 0; i < meals.length; i++) {
            const categoryIngr = meals[i].strIngredient;
            allDesign += `<div class="col-md-3 text-white">
                <div class="meal  position-relative overflow-hidden rounded-2 cursor-pointer" onclick="displayingr('${categoryIngr}')">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h4 class="text-danger">${categoryIngr}</h4>
        
                    </div>
                </div>   
            </div>`;
        }
        document.querySelector(".row").innerHTML = allDesign;
    }
    await displayingrli();
});

// end Ingredients 111
// end Ingredients 111

// Start Ingredients 222
// Start Ingredients 222
async function getApicatIngr(categoryIngr) {
    const mealElement = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${categoryIngr}`);
    const mealElementData = await mealElement.json();
    return mealElementData.meals;
}
async function displayingr(categoryIngr) {
    const ingr = await getApicatIngr(categoryIngr);
    let mealDetails = '';
    for (let i = 0; i < ingr.length; i++) {
        const number = await ingr[i].idMeal
        mealDetails += `<div class="col-md-3">
            <div class="meal position-relative overflow-hidden rounded-3 cursor-pointer" onclick="displayCat3('${number}')" id="${ingr[i].idMeal}">
                <img class="w-100" src="${ingr[i].strMealThumb}">
                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                    <h4 class="text-danger">${ingr[i].strMeal}</h4>
                </div>
            </div>   
        </div>`;
    }
    document.querySelector(".row").innerHTML = mealDetails;
}
// end Ingredients 222
// end Ingredients 222
// end Ingredients end Ingredients end Ingredients end Ingredients end Ingredients end Ingredients end Ingredients

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
    function validateName() {
        const nameInput = document.getElementById('nameInput');
        const nameAlert = document.getElementById('nameAlert');
        const nameRegex = /^[a-zA-Z\s]*$/;
        const isNameValid = nameRegex.test(nameInput.value);
        nameAlert.classList.toggle('d-none', isNameValid);
    }
    
    function validateEmail() {
        const emailInput = document.getElementById('emailInput');
        const emailAlert = document.getElementById('emailAlert');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(emailInput.value);
        emailAlert.classList.toggle('d-none', isEmailValid);
    }
    
    function validatePhone() {
        const phoneInput = document.getElementById('phoneInput');
        const phoneAlert = document.getElementById('phoneAlert');
        const phoneRegex = /^\d{10}$/;
        const isPhoneValid = phoneRegex.test(phoneInput.value);
        phoneAlert.classList.toggle('d-none', isPhoneValid);
    }
    
    function validateAge() {
        const ageInput = document.getElementById('ageInput');
        const ageAlert = document.getElementById('ageAlert');
        const ageRegex = /^\d+$/;
        const isAgeValid = ageRegex.test(ageInput.value);
        ageAlert.classList.toggle('d-none', isAgeValid);
    }
    
    function validatePassword() {
        const passwordInput = document.getElementById('passwordInput');
        const passwordAlert = document.getElementById('passwordAlert');
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const isPasswordValid = passwordRegex.test(passwordInput.value);
        passwordAlert.classList.toggle('d-none', isPasswordValid);
    }
    
    function validateRepassword() {
        const passwordInput = document.getElementById('passwordInput');
        const repasswordInput = document.getElementById('repasswordInput');
        const repasswordAlert = document.getElementById('repasswordAlert');
        const isRepasswordValid = passwordInput.value === repasswordInput.value;
        repasswordAlert.classList.toggle('d-none', isRepasswordValid);
    }

    document.getElementById('nameInput').addEventListener('keyup', validateName);
    document.getElementById('emailInput').addEventListener('keyup', validateEmail);
    document.getElementById('phoneInput').addEventListener('keyup', validatePhone);
    document.getElementById('ageInput').addEventListener('keyup', validateAge);
    document.getElementById('passwordInput').addEventListener('keyup', validatePassword);
    document.getElementById('repasswordInput').addEventListener('keyup', validateRepassword);