import { useEffect, useState } from "react";
import axios from "axios";
// <---------------------------------------------->

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const[searchName, setSearchName] =useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/characters");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      <input type="search" name="search" placeholder="Search" onChange={(e) =>setSearchName(e.target.value)} />
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        data.result.filter((value) => {
          if (searchName==="") {
            return value;
          }else if(value.name.toLowerCase().includes(searchName.toLowerCase())
      ){
return value;
      }
      })

      .map((character) => 
        // console.log(character.thumbnail.path);
        // return (
          <article key={character._id}>
            <h2>{character.name}</h2>
            <img
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              alt={character.name}
            />
            <p>{character.description}</p>
          </article>
        // );
            )
    </div>
  );
};

export default Characters;
