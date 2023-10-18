import React  from "react";
import axios from 'axios';
import '../App.css';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            apiKey:"8e9009737724ac6cab6b98819e712fb1",
            ville: "",
            results: null
        }
    }

    recherche = (e) => {
        this.setState({
            ville: e.target.value
        })
    }

    addSearch = (e) => {
        e.preventDefault();
        // if (this.state.ville !== "") {
            this.query();
            console.log('success')
        // }
    }

    query = () => {

      const {ville, apiKey} = this.state;

      if (ville) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}`)

        .then(response => {
            this.setState({results: response.data})
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });  
      }
      
    }

    render() {

        const { results } = this.state;

        return(
            <div className="container pt-5 px-3">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                    
                        <form onSubmit={this.addSearch} className="mt-2 mx-3 text-center">
                            <input onChange={this.recherche} type="search"  placeholder="Entrez le nom de la ville"
                            value={this.state.ville} className="rounded-5 border-warning"></input>
                            <p className="mt-5"><button type="submit" className="btn">Search</button></p>
                        </form>
                        {results && (
                            <div className="Api mt-5 rounded-5 text-center">
                                <h4  className="fs-5 mb-3">{results.name} <span className="fs-6 country">{results.sys.country}</span></h4>
                                <p className="mb-3 fw-bold h4">{results.main.temp}°C</p>
                                <p className="sun mb-3"></p> 
                                {results.main.humidity && <p className="mb-3 fw-bold h4"> {results.main.humidity}%</p>}
                                {results.weather[0] && <p className="mb-3"> {results.weather[0].description}</p>}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
export default App;