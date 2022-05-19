import './assets/scss/App.scss';
import PageHeader from './components/PageHeader.js';
import TravelJournal from './components/TravelJournal.js';

// App root
function App() {
  	return (
  	  	<div className="App">  	  		
  	  		<PageHeader/>
  	  		<TravelJournal/>
  	  	</div>
  	);
}

export default App;