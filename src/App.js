import logo from './logo.svg';
import './App.css';
import './Home'
import JobCard from './Home';
import Filter from './components/Filter'

function App() {
  return (
    <div className="App">
      <Filter />
      <JobCard />

    </div>
  );
}

export default App;
