#  Newsly – Real-Time News Application

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://javascript.info/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![REST API](https://img.shields.io/badge/REST%20API-005571?style=for-the-badge&logo=google-cloud&logoColor=white)](https://newsdata.io/)

**🔗 View Live Project:** [https://shyamkumarnagilla.github.io/News-APP/](https://shyamkumarnagilla.github.io/News-APP/)
</div>

---
Newsly is a modern, responsive Single Page Application (SPA) built with React that delivers real-time news headlines from across the globe. By integrating with the **NewsData.io API**, it allows users to stay updated with the latest stories across various categories.

##  Key Features

-   **Real-Time Data:** Fetches the latest global headlines instantly using REST API.
-   **Category Filtering:** Browse news by categories such as Business, Technology, Sports, Health, and Entertainment.
-   **Robust Search:** Quickly find specific news stories using a built-in search functionality.
-   **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.
-   **Infinite Scroll/Pagination:** Seamlessly navigate through multiple pages of news articles.
-   **Detailed View:** Clickable cards that redirect users to the full source article.

##  Tech Stack

-   **Frontend:** React.js, CSS(Custom Modules/Flexbox)
-   **Styling:** CSS3 (Custom Modules/Flexbox)
-   **API Integration:** Fetch API / Axios
-   **External API:** [NewsData.io](https://newsdata.io/)

## Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Shyamkumarnagilla/News-APP.git](https://github.com/Shyamkumarnagilla/News-APP.git)
    cd News-APP
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Get your API Key:**
    -   Sign up at [NewsData.io](https://newsdata.io/) to get a free API key.
    -   Create a `.env` file in the root directory.
    -   Add your key: `REACT_APP_NEWS_API_KEY=your_key_here`

4.  **Start the Application:**
    ```bash
    npm start
    ```
    The app will be available at `http://localhost:3000`.

## Project Structure

```text
├── public/
├── src/
│   ├── components/       # Reusable UI components (Navbar, Footer, NewsItem)
│   ├── pages/            # Main views (Home, Category pages)
│   ├── App.js            # Main application component
│   ├── index.js          # Entry point
│   └── styles/           # Global and component-specific CSS
├── .env                  # Environment variables (API Key)
└── package.json          # Project dependencies
```

## Contact

**Shyam Kumar Nagilla**

* **GitHub:** https://github.com/Shyamkumarnagilla
* **LinkedIn:** https://www.linkedin.com/in/nagilla-shyam
* **Email:** nagillashyamkumar7@gmail.com
---
*If you liked this project, feel free to give it a star!*