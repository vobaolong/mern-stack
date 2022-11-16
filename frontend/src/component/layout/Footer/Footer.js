import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h1>Technology</h1>
        <p>
          <strong>M</strong>ongoDB
        </p>
        <p>
          <strong>E</strong>xpressJS
          <p>
            <strong>R</strong>eactJS
          </p>
          <p>
            <strong>N</strong>odeJS
          </p>
        </p>
      </div>

      <div className="midFooter">
        <h1>G10 Store</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2022 &copy; G10 Store</p>
      </div>
    </footer>
  );
};

export default Footer;
