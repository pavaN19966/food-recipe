import React,{useEffect,useState} from 'react';



export default function ProductGet() {
    const [data,setData]=useState([])

    useEffect(()=>
    {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=>{
            setData(data.categories);
            //console.log(data.categories)
        })
        .catch(error=>
            {
                console.log(error)
            })
    },[])

     
  return (
    <div>
         
       
        <div className="container-fluid body">
        <center><h3 className="text-primary">Latest  Meals</h3></center>
            <div className="row">
              
               
                {data.map(categories=>
                <div className="col-md-3">
                    <div className="card" style={{"width":"20rem","height":"20rem"}}>
                
                    <img className="card-img-top" src={categories.strCategoryThumb} />
                    <div className="card-body">
                    <center><h5 className="card-title">{categories.strCategory}</h5></center>
                    {/* <center><p className="card-text">{categories.strCategoryDescription}</p></center> */}
                     <br/>
                    <center><button className="btn btn-primary">BUYNOW</button></center>
                    </div>
                   
                </div>
               </div>
                 )}
       

    </div>
 </div>
</div>
  )
}
