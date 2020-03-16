import React, {Component, Fragment} from 'react';
import './App.scss';

import { Header } from './components/Header/Header';
import { Cards } from './components/Cards/Cards';
import { Popup } from './components/Popup/Popup';
import { Form } from './components/Form/Form';

class App extends Component {

        state = {
         
            data : [

                {
                    name: "Peter",
                    lastName: "Jackson",
                    age: 35
                },
                {
                    name: "Anna",
                    lastName: "Smith",
                    age: 38
                },
                {
                    name: "Mark",
                    lastName: "Ronson",
                    age: 30
                }
            ],

            filteredData: [],
            popupOpened: false
        }

        componentDidMount(){
            this.setState({
                filteredData: this.state.data
            })
        }

        componentDidUpdate(prevProps, prevState) {

            if(prevState.data.length !== this.state.data.length){
                this.setState({
                    filteredData: this.state.data
                })
            }
        }

        filterData (searchResults) {
            this.setState({
                filteredData: searchResults
        })
    }

        onPopupOpen () {
            this.setState({
                popupOpened: true
        })
    }

        onPopupClose () {
            this.setState({
                popupOpened: false
        })
    }

        onCardAdd (data) {
            this.setState({
                data: [
                    ...this.state.data,
                    data
                ],
                popupOpened: false
        })
    }
    
    render() {

        const { data, filteredData, popupOpened } = this.state;
        
        return (
            <Fragment>
               <Header black 
                        search 
                        data={data}
                        onDataFilter={(searchResults=> this.filterData(searchResults))} />

                <Cards data={filteredData}
                       openForm={() => this.onPopupOpen ()} />

        {popupOpened && (<Popup popupClose={() => this.onPopupClose()} 
                                title={"Add Person"}>
                        <Form onFormSubmit={(data) => this.onCardAdd(data)}/>
                        </Popup>)}
            </Fragment>
        )
    }

}

export default App;



