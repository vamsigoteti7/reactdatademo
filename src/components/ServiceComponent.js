import React from 'react';
import axios from 'axios';

export default class Services extends React.Component {
    state = {
        persons: [],
        links: [
            {
                id: 1,
                name: "Link1",
                to: "/cms",
                className: "side_nav_item"
            },
            {
                id: 2,
                name: "Link2",
                to: "/cms",
                className: "side_nav_item"
            },
            {
                id: 3,
                name: "Link3",
                to: "/cms",
                className: "side_nav_item"
            },
            {
                id: 4,
                name: "Link4",
                to: "/cms",
                className: "side_nav_item"
            }
        ],
        activeLink: null,
        selectedService: null
    }

    handleClick = id => {
        this.setState({ activeLink: id });
    };

    handleSelectedService = id => {
        this.setState({ selectedService: id });
    };

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services"; // site that doesn’t send Access-Control-*

        axios.get(proxyurl + url)
            .then(res => {
                const persons = res.data.data;
                this.setState({ persons });
            })
    }

    // function switchChannel(el){
    //     // find all the elements in your channel list and loop over them
    //     Array.prototype.slice.call(document.querySelectorAll('ul[data-tag="channelList"] li')).forEach(function(element){
    //       // remove the selected class
    //       element.classList.remove('selected');
    //     });
    //     // add the selected class to the element that was clicked
    //     el.classList.add('selected');
    //   }

    render() {
        return (
            <div>
                <ul>
                    <h1>Services</h1>
                    {this.state.persons.map((user, index) =>
                        <li key={index} onClick={() => this.props.selectedService(user.attributes.name)}>{user.id}</li>
                    )}
                </ul>
                {/* <div>
                    {links.map(link => {
                        return (
                            <div key={link.id}>
                                <ul>
                                    <li
                                        onClick={() => this.handleClick(link.id)}
                                        className={
                                            link.className +
                                            (link.id === activeLink ? " active_item" : "")
                                        }
                                    >
                                        {link.name} {link.id === activeLink && "active!"}
                                    </li>
                                </ul>
                            </div>
                        );
                    })}
                </div> */}
            </div>

        )
    }
}
