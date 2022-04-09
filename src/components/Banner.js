import React from 'react'

function Banner() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img src="https://www.wallpaperflare.com/static/282/629/175/bicycle-water-landscape-reflection-wallpaper-preview.jpg" class="d-block w-100 " alt="..."/>
      <div class="carousel-caption">
        <h1> Book You Time</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://thumbs.dreamstime.com/b/bike-workshop-bicycle-mechanic-repair-process-48157778.jpg" class="mx-auto w-100 " alt="..."/>
      <div class="carousel-caption">
        <h1> PROFESSONAL REPAIR</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://d3nuqriibqh3vw.cloudfront.net/images/spw_custombikes_mountainbike.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <h1> RIDE FOR GREEN, RIDE FOR LIFE</h1>
      </div>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Banner;