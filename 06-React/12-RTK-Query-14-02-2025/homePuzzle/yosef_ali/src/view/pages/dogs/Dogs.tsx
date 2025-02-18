import { Outlet, Link } from "react-router";

const Dogs = () => {
  return (
    <div style={containerStyle}>
      {/* רשימת הכלבים (שמאל) */}
      <div style={listStyle}>
        <h2 style={titleStyle}>Dogs 🐶</h2>
        <Link style={linkStyle} to="husky">Husky</Link>
        <Link style={linkStyle} to="puggle">Puggle</Link>
        <Link style={linkStyle} to="appenzeller">Appenzeller</Link>
        <Link style={menuStyle} to="/">Back to main</Link>
      </div>

      {/* אזור הצגת התמונה (ימין) */}
      <div style={contentStyle}>
        <Outlet />
      </div>
    </div>
  );
};

// 🎨 עיצוב CSS באמצעות אובייקטים
const containerStyle = {
  display: "flex",
  height: "100vh",
  gap: "20px",
  padding: "20px",
};

const listStyle = {
  width: "250px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  backgroundColor: "#f8f9fa",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
};

const titleStyle = {
  textAlign: "center",
  color: "#333",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  backgroundColor: "#007BFF",
  padding: "10px",
  borderRadius: "5px",
  textAlign: "center",
  transition: "0.3s",
};

const menuStyle = {
  textDecoration: "none",
  color: "white",
  backgroundColor: "red", //
  padding: "10px",
  borderRadius: "5px",
  textAlign: "center",
  transition: "0.3s",
};

const contentStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  padding: "20px",
};

export default Dogs;
