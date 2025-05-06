  // You can also destructure your props directly from the parameter list
export default function MovieDisplay({ movie }) { 
{/* export default function MovieDisplay({ props }) { */}
 {/*  const { movie } = props;*/}

  // Function to return loaded JSX
  const loaded = () => {
    return (
      <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
      </>
    );
  };

  // Function to return loading JSX
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  // Ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();



 {/*}
  if (!movie || !movie.Title) return <h1>No movie loaded yet</h1>; 
  return (
    <>
      <h1>{movie.Title}</h1>
      <h2>{movie.Genre}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Year}</h2>
    </>
  );
*/}

}
