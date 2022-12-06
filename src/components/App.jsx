import Header from "./Header";
import Footer from "./Footer";

function App(){
    return (
        <div>
            <Header />,
            <div className="main_content">
                <h2 className="content_header">
                This is the note title
                </h2>
                <p className="content_body">
                This is the note content
                </p>
            </div>
            <div className="footer_div">
                <Footer />
            </div>
        </div>
    )
}
export default App;