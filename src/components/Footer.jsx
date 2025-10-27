import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>@ {new Date().getFullYear()} Beyond Borders</p>
      </div>
    </footer>
  );
}