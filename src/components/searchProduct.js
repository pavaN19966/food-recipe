import React,{useState}from 'react';
import  ProductGet  from './productGet';
import SearchGallery from './searchGallery';

export default function SearchProduct() {
    const [search,setSearch]=useState('');
    const [data,setData] =useState([]);
    const [loader,setLoader]=useState(false);
    const [error,setError]=useState(false)
    
   

    const submitHandler = e =>{
       console.log(search)
        e.preventDefault();
        setLoader(true)
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
         .then( 
         response =>response.json()
         )
         .then(
             data => {
               setData(data.meals);
               setLoader(false)
               setError(false)
               }) 
             .catch(error=>{
              
              setLoader(false)
              setError(true)

            })
         }
      return (
    <div>
       
        <center>
            <h1 className="text-warning">FOOD RECIPE</h1>
           </center>
              <center>
                <form onSubmit={submitHandler}>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}  className="form-control" placeholder="Please Enter Food Name"/> <br/>
                 <input type="submit" className="btn btn-primary" value="search" />
                 </form>
                 { loader &&
                  <div className="text-success">
                   Loading...
                  </div>
                   }
                   { error &&
                  <div className="text-danger">
                   Error...
                  </div>
                   }
                {data.length>0 ?<SearchGallery data={data}/>:<ProductGet />
                 }
                  </center>
                     </div>
                 )
                }
