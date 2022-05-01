import React from 'react'

export default function SearchGallery(props) {
  return (
    <div>
         
       
        <div className="container-fluid body">
        <center><h3 className="text-dark">Latest  Meals</h3></center>
            <div className="row">
              {props.data.map(categories=>
                <div className="col-md-3" key={categories.idMeal}>
                    <div className="card" style={{"width":"20rem","height":"20rem"}}>
                
                    <img className="card-img-top" src={categories.strMealThumb} />
                    <div className="card-body">
                    <center><h5 className="card-title">{categories.strCategory}</h5></center>
                    {/* <center><p className="card-text">{categories.strCategoryDescription}</p></center> */}
                    <center><button className="btn btn-primary buynow">BUYNOW</button></center>
                    </div>
                   
                </div>
               </div>
                 )}
       

    </div>
 </div>
</div>
  )
}
