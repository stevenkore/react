import React, {Component} from 'react';
import axios from "axios";
import {API_URL} from "../../config/config";

class ListingView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            documents: [],
            id: '1',
        }
    }

    componentDidMount() {
        this.getStorageInfo()
    }


    getStorageInfo() {
        const documents = JSON.parse(localStorage.getItem('document')) || [];


        this.setState({
            documents: documents
        })

        this.getDocumentsList();
    }

    async getDocumentsList() {
        let response = await this.axiosListRequest();
        response = response.map((document) => {
            return {id: document.id}
        });


        this.setState({
            documents: response,

        })

        localStorage.setItem('document', JSON.stringify(response));


    }

    async axiosListRequest() {
        const {id} = this.state;

        return axios({
            method: 'GET',
            url: `${API_URL}/documents/favorite/${id}`,
            data: {
                userID: '1',
            }
        }).then(response => {
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }


    render() {
        const {documents} = this.state;

        return (
            <div>
                <div>im a listing view</div>
                {
                    documents.map((document) => (
                        <div key={document.id}>{document.id}</div>
                    ))
                }
            </div>
        )
    }
}

export default ListingView
