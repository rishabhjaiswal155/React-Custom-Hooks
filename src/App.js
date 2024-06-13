import logo from './logo.svg';
import './App.css';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

function App() {
  return (
    <div className="App">
      <DocTitleOne/><br/>
      <DocTitleTwo/><br/>
      <CounterOne/><br/>
      <CounterTwo/>
    </div>
  );
}

export default App;
