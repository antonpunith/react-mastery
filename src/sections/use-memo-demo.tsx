import { useEffect, useState, ChangeEvent, useMemo } from "react";
import { getMovies, MovieData } from "../api";

const useMemoDemo = () => {

    const [moviesList, setMoviesList] = useState<MovieData[]>([]);

    const [filterInput, setFilterInput] = useState<string>('')

    useEffect(()=>{
        getMovies().then((data) => setMoviesList(data))
    },[])
    const onInput = (event: ChangeEvent<HTMLInputElement>) => {
        setFilterInput(event?.target?.value.toLowerCase().trim());
    }


    const filteredMovies = useMemo(() => {
        return moviesList.filter((movie) => {
            return movie.name.toLowerCase().trim().includes(filterInput)
        })
     }, [moviesList, filterInput ])

    return (
        <div className="container">
            <section className="header">
                <h1>Use Memo Example </h1>
            </section>
            <section>
                <input placeholder="movie filter" onInput={onInput} />
            </section>
            <main>
                {filteredMovies?.map((movie) => (<div key={movie._id}>
                    {movie.name}
                </div>))}
            </main>
        </div>
    );
};

export default useMemoDemo;