import React from 'react';
import axios from 'axios';

export default class Providers extends React.Component {
    state = {
        providers: [],
        globalProviders: [],
        schedules: [],
        services: []
    }

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10"; // site that doesn’t send Access-Control-*

        axios.get(proxyurl + url)
            .then(res => {
                const providers = res.data.data;
                const globalProviders = res.data.data;

                this.setState({ providers });
                this.setState({ globalProviders: globalProviders });
                const schedules = res.data.included.filter(t => t.type = 'schedules' && t.attributes.service !== undefined);
                schedules.forEach(s => this.state.schedules.push({ "scheduleId": s.id, "serviceName": s.attributes.service }))

                this.state.providers.forEach(t =>
                    t.relationships.schedules.data.forEach(s => {
                        this.state.services.push({ "scheduleId": s.id, "providerId": t.id, "serviceName": '' })
                    }
                    )
                );

                this.state.schedules.forEach(s => {
                    let filteredservices = this.state.services.find(t => t.scheduleId === s.scheduleId);
                    filteredservices.serviceName = s.serviceName.toUpperCase();;
                }
                );
            })
    }

    handleSelectedService(serviceName) {
        let schedules = this.state.services.filter(t => t.serviceName === serviceName.toUpperCase());

        if (schedules !== undefined) {

            let filterBender = data => {
                var sch = schedules.filter(s => s.providerId === data.id)
                if (sch.length === 0) return false;
                return true;
            }

            const provi = this.state.globalProviders.filter(filterBender);
            this.setState({ providers: provi });
        }
    };

    render() {
        return (
            <div>
                <h1>Providers</h1>
                {this.state.providers.map((user, index) => {
                    return(
                    <div key={index}>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    <img alt='new' height="100" width="200" src={user.attributes['profile-image'] === '' ? null : user.attributes['profile-image']} />
                                </div>
                                <div class="col-sm">
                                    <div class="container">
                                        <div class="row">
                                            {user.id}
                                        </div>
                                        <div class="row">
                                            { user.attributes.subspecialties !== null ? user.attributes.subspecialties.map(t=>(<div class="container"><div class="row">{t}</div></div>)) : null} 
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>);
                }
                )}
            </div>
        )
    }
}
