import React, { useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
  const [search, setSearch] = useState("");
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = "pub_79686865f22d4f179523a95f58f01290";

  const getData = async (query) => {
    setLoading(true);
    setError(null);
    const topic = query || "trending";

    try {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${topic}&language=en`
      );
      const jsonData = await response.json();
      
      if (!jsonData.results || jsonData.results.length === 0) {
        setNewsData([]);
      } else {
        setNewsData(jsonData.results.slice(0, 10));
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load news. Please try again later.");
      setNewsData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData("trending");
  }, []);

  const handleInput = (e) => setSearch(e.target.value);

  const handleCategory = (event) => {
    const category = event.target.value;
    setSearch(category);
    getData(category);
  };

  const handleSearchClick = () => {
    if (search.trim() !== "") getData(search);
  };

  return (
    <div>
      {/* Navigation */}
      <nav>
        <div>
          <h1>Newsly</h1>
        </div>

        <div className="searchBar">
          <input
            type="text"
            placeholder="Search for news..."
            value={search}
            onChange={handleInput}
          />
          <button onClick={handleSearchClick} className="button">Search</button>
        </div>
      </nav>

      <p className="head">All the News You Need, in One Place</p>

      {/* Category Buttons */}
      <div className="categoryBtn">
        {["entertainment","fitness","health","politics","sports","technology"].map((cat) => (
          <button
            key={cat}
            value={cat}
            onClick={handleCategory}
            className="button"
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* News Section */}
      <div>
        {loading && <p style={{ textAlign: "center" }}>Loading news...</p>}
        {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
        {!loading && newsData?.length === 0 && <p style={{ textAlign: "center" }}>No news available.</p>}
        {!loading && newsData?.length > 0 && <Card data={newsData} />}
      </div>
    </div>
  );
};

export default Newsapp;
