import data from '../assets/data';
import JournalEntry from './JournalEntry';

function TravelJournal(props) {
	const entries = data.map( function(entry) {
		console.log(data)

		return (
			<JournalEntry key={entry.title} entry={entry} />
		)
	})

  	return (
  	  	<div className="travel-journal">
  	  		<div className="container py-5">
  	  			{entries}
  	  		</div>
  	  	</div>
  	);
}

export default TravelJournal;