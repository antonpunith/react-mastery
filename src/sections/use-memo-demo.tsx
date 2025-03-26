import { useEffect, useState, ChangeEvent, useMemo } from "react";
import { getMovies, MovieData } from "../api";

const useMemoDemo = () => {
    // State to store list of movies
    const [moviesList, setMoviesList] = useState<MovieData[]>([]);

    // State to store use input
    const [filterInput, setFilterInput] = useState<string>('')

    // Fetch movies using the API when the component mounts
    useEffect(() => {
        getMovies()
            .then((data) => setMoviesList(data))
            .catch((error) => console.error("Failed to fetch movies:", error))
    }, [])

    let debounceTimer: NodeJS.Timeout;
    // set filterInput when user types into the input field
    const onInput = (event: ChangeEvent<HTMLInputElement>) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            setFilterInput(event?.target?.value.toLowerCase().trim());
        }, 300); // Adjust debounce delay as needed
    }
    // use Memo caches the filteredMovies result and recalculates it only when moviesList or filterInput changes
    const filteredMovies = useMemo(() => {
        return moviesList.filter((movie) => {
            return movie.name?.toLowerCase().trim().includes(filterInput)
        })
    }, [moviesList, filterInput])

    return (
        <div>
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

// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

export default useMemoDemo;