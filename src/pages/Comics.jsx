import { useEffect, useState } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <h2>Comics</h2>
      {data.results.map((comic) => {
        // console.log(comic.thumbnail.path);
        return (
          <article key={comic._id}>
            <h2>{comic.title}</h2>
            <img
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt={comic.title}
            />
            <p>{comic.description}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Comics;
