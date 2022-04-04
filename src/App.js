import logo from './logo.svg';
import './App.css';
import $ from "jquery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <div className="two-row-wrapper">
              <div  className="gmail">Gmail</div>
              <div className="images">Images</div>
              <div className="ninedots-wrapper">
              <img data-toggle="tooltip" title="Google apps" data-placement="bottom" className="ninedots" src="/ninedots.png"></img>

              </div>
              <div data-toggle="tooltip" title="Google Account" data-placement="bottom"  className="email-login">A</div>
            </div>
         </div>
        </div>
      </header>
      <div>
        <div className="google-logo">
          <img src="/google_logo.svg"></img>
        </div>
        <div className="search-input">
          <img className="search-icon" src="/search.svg" />

          <input type="search"  autocomplete="on"  className="input-class" placeholder="Search Google or type a URL"/>

          <img data-toggle="tooltip" title="search by voice" data-placement="bottom" className="assistent" src="/googlemic_clr_24px.svg"></img>
        </div>
        
        <div className="plus-wrapper">
          <div className="plus-add-wrapper">
            <div className="add-icon-wrapper">
              <img className="add-icon" src="/add.svg"></img>
            </div>
            <div className="add-shortcut">Add Shortcut</div>
          </div>
        </div>
      </div>
      <footer className="footer-div">
        <div className="customise">Customise Chrome</div>
        
        <i className="fa fa-pencil pencil11" aria-hidden="true"></i>

      </footer>
    </div>
  );
}
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip()
});
export default App;

