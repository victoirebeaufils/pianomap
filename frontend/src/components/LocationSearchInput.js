import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
 
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    address: '',
    lat: 0,
    lng: 0 };
   
  }


  handleChange = address => {
    this.setState({ address });
  console.log("this is changing")
  
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(results =>  this.setState({
        lat: results.lat,
        lng: results.lng,
    }))
      .catch(error => console.error('Error', error));
      this.props.onChange(this.state.lat, this.state.lng)
  };
 
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className="input-group search-input">
            
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input form-control',
              })}
            />
             <div class="input-group-append">
             <button type="button" className="btn btn-dark" onChange={this.props.addMarker}>Add marker</button>
  </div>
            </div>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span className='suggestion'> {suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;