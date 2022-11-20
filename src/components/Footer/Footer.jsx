import "./Footer.css";

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div>
        <p>Copyright &copy; David Mould {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
