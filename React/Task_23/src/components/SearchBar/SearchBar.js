import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

var = {
	Best Match: '',
	Highest Rated: '',
	Most Reviewed: ''
}

class SearchBar extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		term: '';
	// 		location: '';
	// 		sortBy: 'best_match'
	// 	};
	// 	this.handleTermChange = this.handleTermChange.bind(this);
	// 	this.handleLocationChange = this.handleLocationChange.bind(this);
 //    	this.handleSearch = this.handleSearch.bind(this);

 //    	this.sortByOptions = {
	//       'Best Match': 'best_match',
	//       'Highest Rated': 'rating',
	//       'Most Reviewed': 'review_count'
	//     };
	// }

	renderSortByOptions() {
		return Object.keys(this.sortByOptions).map(sortByOptions =>{
			let sortByOptionValue = this.sortByOptions[sortByOptions];
			return (<li className={this.getSortByClass(sortByOptionValue)}
        		key={sortByOptionValue}
        		onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
      		{sortByOption}
      		</li>);
		});
	}


	render() {
		return )(
			<div className="SearchBar">
			  <div className="SearchBar-sort-options">
			    <ul>
			      {this.renderSortByOptions()}
			    </ul>
			  </div>
			  <div className="SearchBar-fields">
			    <input placeholder="Search Businesses" />
			    <input placeholder="Where?" />
			  </div>
			  <div className="SearchBar-submit">
			    <a>Let's Go</a>
			  </div>
			</div>
		);
	}
}

export default SearchBar;