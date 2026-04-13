import React, { useEffect, useState } from "react";

function App() {
  // ---------------- STATE ----------------
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ---------------- API CALL ----------------
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
         console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // ---------------- LOADING UI ----------------
  if (loading) {
    return (
      <div style={styles.centerContainer}>
        <div style={styles.loader}></div>
        <p style={styles.text}>Loading data...</p>
      </div>
    );
  }

  // ---------------- ERROR UI ----------------
  if (error) {
    return (
      <div style={styles.centerContainer}>
        <div style={styles.errorBox}>
          <h2>⚠️ Something went wrong</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // ---------------- MAIN UI ----------------
  return (
    <div style={styles.container}>
      {/* <h1 style={styles.heading}>Post Details</h1>

      <div style={styles.card}>
        <h2 style={styles.title}>{data.title}</h2>

        <p style={styles.info}>
          <strong>User ID:</strong> {data.userId}
        </p>

        <p style={styles.info}>
          <strong>Post ID:</strong> {data.id}
        </p>

        <p style={styles.body}>{data.body}</p>
      </div> */}
      <h1 style={styles.heading}>All Posts</h1>

    {data.map((post) => (
      <div key={post.id} style={styles.card}>
        <h2 style={styles.title}>{post.title}</h2>

        <p style={styles.info}>
          <strong>User ID:</strong> {post.userId}
        </p>

        <p style={styles.info}>
          <strong>Post ID:</strong> {post.id}
        </p>

        <p style={styles.body}>{post.body}</p>
      </div>
    ))}
    </div>
  );
}

// ---------------- STYLES ----------------
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },

  heading: {
    marginBottom: "20px",
  },

  card: {
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "320px",
    backgroundColor: "#fff",
  },

  title: {
    marginBottom: "15px",
    fontSize: "18px",
  },

  info: {
    margin: "5px 0",
    fontSize: "14px",
  },

  body: {
    marginTop: "10px",
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#444",
  },

  centerContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    marginTop: "10px",
  },

  errorBox: {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#ffe5e5",
    color: "#b30000",
    textAlign: "center",
  },

  loader: {
    width: "40px",
    height: "40px",
    border: "4px solid #ccc",
    borderTop: "4px solid #333",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

// ---------------- KEYFRAMES ----------------
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`,
  styleSheet.cssRules.length
);

export default App;