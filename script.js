"use strict";

const btnReceipe = document.querySelector(".btn-receipe");
const btnAnother = document.querySelector(".btn-another");
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const getData = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data = await res.json();

  renderCard(data);
  console.log(data);
};

const renderCard = (data) => {
  const img = data.meals[0].strMealThumb;
  const name = data.meals[0].strMeal;
  const origin = data.meals[0].strArea ? data.meals[0].strArea : "excellent";
  const link = data.meals[0].strYoutube;
  const receipe = data.meals[0].strInstructions;

  const ingredients = [
    data.meals[0].strIngredient1,
    data.meals[0].strIngredient2,
    data.meals[0].strIngredient3,
    data.meals[0].strIngredient4,
    data.meals[0].strIngredient5,
    data.meals[0].strIngredient6,
    data.meals[0].strIngredient7,
    data.meals[0].strIngredient8,
    data.meals[0].strIngredient9,
    data.meals[0].strIngredient10,
  ];

  const html = `   <div class="d-flex justify-content-center mt-5">      
  <div class="card text-center ">
      <div class="d-flex justify-content-center">
          <img src='${img}'< class="card-img-top " alt="..." style="width: 30%;">
          
      </div>
      <h3>${name}</h3>
      <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                  <a class="nav-link active" aria-current="true"  data-bs-toggle="list" href="#infos" role="tab" aria-expanded="true" aria-controls="infos" >General informations</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link"  data-bs-toggle="list" href="#receipe" role="tab" aria-expanded="false" aria-controls="receipe">Receipe</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link " data-bs-toggle="list" href="#youtube" role="tab" aria-expanded="false" aria-controls="youtube">Youtube link receipe</a>
              </li>
          </ul>
      </div>
  <div class="tab-content">
  <div class="tab-pane fade show active" id="infos">
      <h5 class="card-title"> General info</h5>
      <p class="card-text"><i class="fa-solid fa-flag"></i> ${origin} dish </p>
      <p class="card-text"><i class="fa-solid fa-bowl-food"></i>With ${ingredients} </p>
  </div>
  <div class="tab-pane fade " id="receipe">
      <h5 class="card-title"><i class="fa-solid fa-utensils"></i> Receipe</h5>
      <p class="card-text">${receipe}</p>
  </div>
  <div class="tab-pane fade " id="youtube">
      <h5 class="card-title">Youtube link receipe</h5>
      <a class="card-text">${link}</a>
  </div>
</div>`;
  document.querySelector(".container").insertAdjacentHTML("beforeend", html);
};
btnReceipe.addEventListener("click", () => {
  btnReceipe.classList.add("hidden");
  btnAnother.classList.remove("hidden");
  getData();
});
btnAnother.addEventListener("click", () => {
  if (container.firstElementChild) container.firstElementChild.remove();
  getData();
});
