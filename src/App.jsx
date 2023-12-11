import React, { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 6;
const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";

const JobPostng = ({ url, title, by, time }) => {
  // console.log(new Date().getTime());
  const formattedTime = new Date(time * 1000).toLocaleString();
  return (
    <div className="post">
      <h2 className="post__title">
        <a
          target="_blank"
          className={url ? "" : "post__in-active"}
          rel="noopener"
          href={url}
        >
          {title}
        </a>
        <span className=" ">
          By - {by} - {formattedTime}
        </span>
      </h2>
    </div>
  );
};

const App = () => {
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState(null);
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  //console.log(itemId);

  const fetchItems = async (currentPage) => {
    setCurrentPage(currentPage);
    setFetchingDetails(true);
    let itemsList = itemId;
    if (itemsList === null) {
      const response = await fetch(`${API_ENDPOINT}/jobstories.json`);
      itemsList = await response.json();
      setItemId(itemsList);
    }

    const itemIdforPage = itemsList.slice(
      currentPage * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
    const itemsForPage = await Promise.all(
      itemIdforPage.map((itemID) =>
        fetch(`${API_ENDPOINT}/item/${itemID}.json`).then((res) => res.json())
      )
    );
    setItems([...items, ...itemsForPage]);
    setFetchingDetails(false);
  };

  useEffect(() => {
    if (currentPage === 0) {
      fetchItems(currentPage);
    }
  }, []);

  if (itemId === null || items.length < 1) {
    return <h1 className="loading">Loding....</h1>;
  }

  return (
    <div className="app">
      <h1 className="title">Hacker news Jobs Board left </h1>
      <div className="items" role="list">
        {items.map((item) => {
          return <JobPostng key={item.id} {...item} />;
        })}
      </div>
      <button
        onClick={() => fetchItems(currentPage + 1)}
        className="app__load-jobs-btn"
        disabled={fetchingDetails}
      >
        {fetchingDetails ? "loading" : "load More Jobs"}
      </button>
    </div>
  );
};

export default App;
