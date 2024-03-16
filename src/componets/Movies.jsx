import {Movie} from "./Movie";

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
        {movies.length ? (
            movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
            <div className="block-not-found">
            <p3>There's nothing here but a dancing minion!😇</p3>
            <img className="not-found" src="https://99px.ru/sstorage/86/2015/08/image_861208150325161407018.gif" alt=""/>
            </div>
            )}
            
      
    </div>
)}
export { Movies };