import React from 'react'
import { useHistory } from 'react-router-dom'
class Asteroid extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            txt: '',
            asteroidList: []
        }
    }


    handleText(e) {
        //alert(''+e)
        this.setState({
            txt: e.currentTarget.value
        })
        console.log('event', e.currentTarget.value);
    }


    handleSubmit() {
        var url = 'https://api.nasa.gov/neo/rest/v1/neo/' + this.state.txt + '?api_key=Qw9h9FGlLBQV90fODsYmNYP0nLEWRAmWnZyPMmf0'

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({}),
            headers: { "Content-Type": "application/json" }
        })
            .then(function (response) {
                return response.json()
                //   console.log(res)

            }).then(function (body) {
                console.log('body->', body);
                //  alert(self.refs.task.value)
            });


    }

    asteroidListApi() {
        return new Promise((resolve) => {
            const url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=Qw9h9FGlLBQV90fODsYmNYP0nLEWRAmWnZyPMmf0";
            fetch(url, {
                method: 'GET',
                headers: { "Content-Type": "application/json" }
            })
                .then(res => res.json())
                .then(res => {
                    console.log("List ::--- ", res.near_earth_objects);

                    var temp = res.near_earth_objects;
                    resolve(temp)
                    // this.setState({asteroidList:temp});
                }).catch(e => {
                    resolve([])
                })
        })
    }

    getAsteroidList() {
        // var asteroList = await this.asteroidListApi();
        const url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=Qw9h9FGlLBQV90fODsYmNYP0nLEWRAmWnZyPMmf0";
        fetch(url, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(res => {
                console.log("List ::--- ", res.near_earth_objects);

                var temp = res.near_earth_objects;
                this.setState({ asteroidList: temp });
                console.log("state :asteroidList:--- ", this.state.asteroidList)
            })
    }

    viewAsteroid(id){
        console.log("Id ::----",id)
        // const history = useHistory();
        // history.push("/asteroidList")
    }

    render() {
        // return <h1>Asteroid</h1>

        return (
            <div className="form-group">
                <form>
                    <input
                        type="number"
                        name="firstname"
                        placeholder="Enter Asteroid ID"
                        value={this.state.txt}
                        onChange={(e) => this.handleText(e)}

                    />
                    <br></br>
                    <input
                        type='submit'
                        name="submit"
                        value='Submit'
                        disabled={this.state.txt.length == 0 ? true : false}
                    />
                    <br></br>

                </form>

                {/* <input
                    type='submit'
                    name="reset"
                    value='Random Asteroid'
                    
                /> */}

                <button onClick={() => {
                    this.getAsteroidList();
                }}>
                    Random Asteroid
                </button>

                <div>
                    {
                        this.state.asteroidList.length > 0 ?
                        <table border="1">
                        <thead>
                            <tr>
                                <td>Asteroid Id</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.asteroidList.map((item, index)=>(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td><button onClick={() => {

                                        }}>View</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                        :
                        null
                    }
                    
                </div>
            </div>
        )
    }
}
export default Asteroid