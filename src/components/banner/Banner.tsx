import React from 'react';
import bannerImg1 from '../../assets/home-banner2.jpg';
import bannerImg2 from '../../assets/home-banner3.jpg';

const Banner = () => {
    return (
        <div className='abosute'>
<div className="carousel w-full">
  <div id="item1" className="carousel-item w-full ">
    <img src={bannerImg1} className="w-full h-80" />
   
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={bannerImg2} className="w-full h-80" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={bannerImg1}className="w-full h-80" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={bannerImg2}className="w-full h-80" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
  
<div className='flex justify-center'>
   <div>
   <a href="/add-recipes">
        <button className="btn  btn-primary ">Add Recipes </button>
    </a>
   </div>
<div className=''>
<a href="/recipes"> <button className="btn btn-secondary   "> See Recipes</button>
</a>
</div>
  </div>

        </div>
    );
};

export default Banner;
