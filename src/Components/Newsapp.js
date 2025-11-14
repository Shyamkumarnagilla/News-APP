import React, { useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
  const [search, setSearch] = useState("");        // empty on refresh
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "4b65ad581cc84b31af51308ca0797847";

  // Fetch data
  const getData = async (query) => {
    const topic = query || "trending";  // fallback to trending if nothing is searched
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    const dt = jsonData.articles?.slice(0, 10) || [];
    setNewsData(dt);
  };

  // Load trending news on first render
  useEffect(() => {
    getData("trending");
  }, []);

  // Input handler (just updates text, doesn't fetch)
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  // When user clicks category button
  const handleCategory = (event) => {
    const category = event.target.value;
    setSearch(category);  // show in search bar
    getData(category);    // immediately fetch results
  };

  // When user manually searches
  const handleSearchClick = () => {
    if (search.trim() !== "") {
      getData(search);
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <div>
          <h1>Newsly</h1>
        </div>
        <ul style={{ display: "flex", gap: "11px" }}>
          <a style={{ fontWeight: 600, fontSize: "17px" }}></a>
          <a style={{ fontWeight: 600, fontSize: "17px" }}></a>
        </ul>

        <div className="searchBar">
          <input
            type="text"
            placeholder="Search for news..."
            value={search}
            onChange={handleInput}
          />
          <button onClick={handleSearchClick} class="button">Search</button>
        </div>
      </nav>

      <div>
        <p className="head">All the News You Need, in One Place</p>
      </div>

      {/* Category Buttons */}
      <div className="categoryBtn">
        <button onClick={handleCategory} value="entertainment" class= "button">Entertainment</button>
        <button onClick={handleCategory} value="fitness" class= "button">Fitness</button>
        <button onClick={handleCategory} value="health" class= "button">Health</button>
        <button onClick={handleCategory} value="politics" class= "button">Politics</button>
        <button onClick={handleCategory} value="sports" class= "button">Sports</button>   
        <button onClick={handleCategory} value="technology" class= "button">Technology</button> 
      </div>

      {/* News Cards */}
      <div>
        {newsData ? <Card data={newsData} /> : <p style={{ textAlign: "center" }}>Loading news...</p>}
      </div>
    </div>
  );
};

export default Newsapp;
