import React from 'react'

import p1 from "../../assets/img/products/2.webp";
import p2 from "../../assets/img/products/6.webp";
import p3 from "../../assets/img/products/17.webp";
import p4 from "../../assets/img/products/19.webp";
import p5 from "../../assets/img/products/22.webp";
import p6 from "../../assets/img/products/38.webp";


const Parts = () => {
  return (
    <section id="page-content">
    <div className="container">
      <div id="blog" className="row" data-item="post-item">
          {/* <div className="post-item-wrap">
            <div className="post-image"> */}
        
        {
  Array.from({ length: 41 }).map((_, i) => {
    const imagePath = `../../../public/new.images/${i + 1}.jpeg`;
    console.log('Image Path:', imagePath); // Debugging line
    
    return (
      <div key={i} className="col-md-2 col-lg-4 text-center border py-3">
        <img src={imagePath} className='img-fluid' alt={`Image ${i + 5}`} />
        {/* <h5 className="card-title">Image {i + 1}</h5> */}
      </div>
    );
  })
}

        
      </div>
    </div>
  </section>
  )
}

export default Parts
