import './App.css';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <DocTitleOne/><br/>
      <DocTitleTwo/><br/>
      <CounterOne/><br/>
      <CounterTwo/><br/>
      <UserForm/>
    </div>
  );
}

export default App;
