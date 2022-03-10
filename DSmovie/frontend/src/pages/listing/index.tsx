
import MovieCard from "../../componentes/movieCard";
import Pagination from "../../componentes/pagination"


function Listing(){
    return(
        < >
        <Pagination />

        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <MovieCard />
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <MovieCard />
                </div>
            </div>
           
        </div>
        
        </>

    );
}

export default Listing;