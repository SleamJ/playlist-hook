import React, { useState /* Component */ } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { graphql } from 'react-apollo'
import faker from 'faker'

//Queryes importing
import { getMussicsQuery } from '../Queries/queries'

//import Semantics
import { Loader, Dimmer, Card } from 'semantic-ui-react'

//importing Components
import MussicDetails from '../Components/MussicDetails'

/*
class MussicList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    displayMussics() {
        var data = this.props.data;
        console.log(this.props)
        if(data.loading){
            return (
              <Dimmer active inverted>
                <Loader inverted content='Loading' />
              </Dimmer>
            )
        } else {
            return (
                <Card.Group>
                    { data.mussics.map(mussic => {
                        return (
                            <Card key={ mussic.id } onClick={ ()=> { this.setState({ selected: mussic.id })} }>
                                <Card.Content>
                                    <Card.Header>{ mussic.name }</Card.Header>
                                    <Card.Meta>{faker.lorem.words()}</Card.Meta>
                                    <Card.Description>{faker.lorem.words()}</Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })}
                </Card.Group>
            )
        }
    }
    render() {

        return (
            <ul id="mussic-list">
                { this.displayMussics() }
                <MussicDetails mussicid={ this.state.selected }/>
            </ul>
        );
    }
}
*/


function MussicList (props) {
    
    const [selected, setSelected] = useState(null);
    const { data, error, loading } = useQuery(getMussicsQuery);

    const displayMussics = () => {
       
            console.log(props)
            if(props.data.loading){
                return (
                <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
                )
            } else {
                return (
                    <Card.Group>
                        { props.data.mussics.map(mussic => {
                            return (
                                <Card key={ mussic.id } onClick={ ()=> setSelected(mussic.id) }>
                                    <Card.Content>
                                        <Card.Header>{ mussic.name }</Card.Header>
                                        <Card.Meta>{faker.lorem.words()}</Card.Meta>
                                        <Card.Description>{faker.lorem.words()}</Card.Description>
                                    </Card.Content>
                                </Card>
                            )
                        })}
                    </Card.Group>
                )
            }

    }

    return (
        <ul id="mussic-list">
            { displayMussics() }
            <MussicDetails mussicid={ selected }/>
        </ul>
    )
}



export default graphql(getMussicsQuery)(MussicList)