function JournalEntry(props) {
  	return (
  		<div className="journal-wrap row">
  			<div className="col-12">
  				<div className="journal-entry">
  					<div className="row">
  						<div className="col-4">
  							<div className="journal-img" style={{backgroundImage: "url(" + props.entry.imageUrl + ")"}}></div>
  						</div>
  						<div className="col-7 offset-1 d-flex flex-column justify-content-center">
  							<div className="row">
  								<div className="col-12 d-flex align-items-center justify-content-start">
  									<h3 className="m-0">{props.entry.location}</h3>
  									<a href={props.entry.googleMapsUrl} target="_blank" class="p ms-1 grey">View on Google Maps</a>
  								</div>
  							</div>
  							<div className="row">
  								<div className="col-12">
  									<h2>{props.entry.title}</h2>
  								</div>
  							</div>
  							<div className="row mt-1">
  								<div className="col-12">
  									<p><strong>{props.entry.startDate} — {props.entry.endDate}</strong></p>
  								</div>
  							</div>
  							<div className="row">
  								<div className="col-12">
  									<p>{props.entry.description}</p>
  								</div>
  							</div>
  						</div>
  					</div>	
  				</div>
  			</div>
  		</div>
  	  	
  	);
}

export default JournalEntry;