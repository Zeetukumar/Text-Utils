
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      
<Navbar title="textUtils" aboutText="About TextUtils"/>

<div className="container my-3">
<TextForm heading ="Enter the text"/>
</div>
    </>
  );
}

export default App;
