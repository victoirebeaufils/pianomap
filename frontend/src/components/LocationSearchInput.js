import React from 'react';
import { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
class LocationSearchInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
    address: '',
   location :{
     lat: 0,
     lng: 0,
   },
   selectedLocation: ''}
   this.handleChange = this.handleChange.bind(this);
   this.handleSelectSuggestions = this.handleSelectSuggestions.bind(this);
   this.handleSelect = this.handleSelect.bind(this);
   
  }


  handleChange = address => {
    this.setState({ address : address });
  console.log("this is changing")
  
  };

  handleSelectSuggestions = (address)=>{
    this.setState ({
     address : address
    })
    return address;
  }
 
  handleSelect = address => {
    var add = this.handleSelectSuggestions(address);
    console.log("add:" + add);
    this.setState({
      address: add
    })
    console.log("address: " + this.state.address)
    var latitude = 0;
    var longitude = 0;
    var that = this;
    geocodeByAddress(this.state.address)
    .then(results => getLatLng(results[0]))
    .then(({ lat, lng }) => {
   console.log(lat);
   console.log(lng);
        latitude= lat;
        longitude =  lng;
      })
      .then(() => {
        this.setState({
          location:{
            lat: latitude,
            lng: longitude
          }
        })
      });


  
    

      if(this.props.onChange != null) {
      this.props.onChange(this.state.lat, this.state.lng)
      this.setState ({
        selectedLocation: address
      })
    
      }
      this.props.handle(address);   
    };
 
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange?this.handleChange:null}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className="input-group search-input">
            {console.log(this.state.selectedLocation)}
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input form-control',
              })}
              //value={this.state.selectedLocation.address != ""? this.state.selectedLocation.address:null}
            >
             
            </input>
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
                    })
                    
                  
                  }
                  >
                    <span className='suggestion'   onClick={this.handleSelectSuggestions}> {suggestion.description}</span>
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