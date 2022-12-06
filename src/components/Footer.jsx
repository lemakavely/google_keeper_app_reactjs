function Footer(){
    var date = new Date();
    var currentYear = date.getFullYear();
    return <p className="footer_content">Copyright Ⓒ {currentYear}</p>
}
export default Footer;