import React from 'react'
import { graphql } from 'react-apollo'
import { getMussicQuery } from '../Queries/queries'
import faker from 'faker'
import { useQuery } from 'react-apollo-hooks'

//importing Semantic
import { Card , Container} from 'semantic-ui-react'

/*
class MussicDetails extends Component {
   
    displayBookDetails(){
        const { mussic } = this.props.data;
        if(mussic){
          return(
            <Container>
              <Card>
                <Card.Content header={ mussic.name } />
                <Card.Content description={ faker.lorem.paragraph() } />
                <Card.Content>
                  <p>Mussic Album: { mussic.album }</p>
                  <p>Mussic Lyrics: { mussic.lyrics }</p>
                  <h3>another songs by this artist:</h3>
                  <ul>
                    { mussic.artist.mussics.map(item => {
                        return <li key={item.id}>{ item.name }</li>
                    })}
                  </ul>
                </Card.Content>
              </Card>
            </Container>
          )
        } else {
          return (
            <div>No Mussic selected</div>
          )
        }
      }

    render() {
        return (
            <div>
                { this.displayBookDetails() }
            </div>
        );
    }   
}
*/

// function MussicDetails (props) {

//     const displayBookDetails = () => {
//       const { mussic } = props.data;
//       if(mussic){
//         return(
//           <Container>
//             <Card>
//               <Card.Content header={ mussic.name } />
//               <Card.Content description={ faker.lorem.paragraph() } />
//               <Card.Content>
//                 <p>Mussic Album: { mussic.album }</p>
//                 <p>Mussic Lyrics: { mussic.lyrics }</p>
//                 <h3>another songs by this artist:</h3>
//                 <ul>
//                   { mussic.artist.mussics.map(item => {
//                       return <li key={item.id}>{ item.name }</li>
//                   })}
//                 </ul>
//               </Card.Content>
//             </Card>
//           </Container>
//         )
//       } else {
//         return (
//           <div>No Mussic selected</div>
//         )
//       }
//     }

//     return (
//       <div>
//           { displayBookDetails() }
//       </div>
//     );  
// }

function MussicDetails (props) {
  const { data, error, loading } = useQuery(getMussicQuery);
  
  const displayBookDetails = () => {

      const { mussic } = props.data;
      if(mussic){
        return(
          <Container>
            <Card>
              <Card.Content header={ mussic.name } />
              <Card.Content description={ faker.lorem.paragraph() } />
              <Card.Content>
                <p>Mussic Album: { mussic.album }</p>
                <p>Mussic Lyrics: { mussic.lyrics }</p>
                <h3>another songs by this artist:</h3>
                <ul>
                  { mussic.artist.mussics.map(item => {
                      return <li key={item.id}>{ item.name }</li>
                  })}
                </ul>
              </Card.Content>
            </Card>
          </Container>
        )
      } else {
        return (
          <div>No Mussic selected</div>
        )
      }
    
  }

  return (
    <div>
        { displayBookDetails() }
    </div>
  );  
}

export default graphql(getMussicQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.mussicid
      }
    }
  }
})(MussicDetails)
