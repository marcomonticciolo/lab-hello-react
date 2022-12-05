import logo from './logo.svg';
import './App.css';
import NavImgLeft from "./images/ironhack-logo-xs.png"
import NavImgRight from "./images/menu-top-xs.png"
import Declaritive from "./images/declaritive.png"
import Comp from "./images/components.png"
import singleWay from "./images/single-way.png"
import Jsx from "./images/JSX.png"


function App() {
  return (
<div className="App">
  <div className='background'>
    <nav className="navbar">
  <img src={NavImgLeft} />
  <img className='navImageRight' src={NavImgRight}/>
    </nav>

<div className='bodyDirection'>
<div className='Textbody'>
  <h1 className='headerText'>Say hello to ReactJS</h1>

  <p className='innerText'> You will learn how to use the most popular front end library, and become a super ninja developper</p>

  <button className='Btn'>Awesome!</button>

  </div>
  </div>

  </div>
  


<div className="Image-body">
<div >
<img className='image1' src={Declaritive}/>
<h3>Declaritive</h3>
<p>React makes it painless to create interactive UIs</p>
</div>

<div>
<img className='image2' src={Comp}/>
<h3>Componenets</h3>
<p>Build encapsulated componenets that manage their state.</p>
</div>

<div>
  <img classname="image3"src={singleWay}/>
  <h3>Single-Way</h3>
  <p>A set of immutable values are passed to the componenet's</p>
</div>

<div>
<img className='image4' src={Jsx}/>
<h3>JSX</h3>
<p>Staticsally-typed designed to run on modern browsers.</p>
</div>

</div>
</div>
  );
}
export default App;