import React, { useState  /* Component */ } from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { graphql, compose } from 'react-apollo'

//Queryes importing
import { getArtistsQuery, addMussicMutation, getMussicsQuery } from '../Queries/queries'

//import Semantics
import { Button, Form, Modal, Icon } from 'semantic-ui-react'

/* Warked
class AddMussic extends Component { 
   
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lyrics: '',
            album: '',
            released: '',
            genres: '',
            artistid: ''
        };
    }

    displayArtists() {
        var data = this.props.getArtistsQuery;
        if(data.loading) {
            return(
                <option disabled>
                    loading...
                </option>
            )
        } else {
            return data.artists.map(artist => {
                return(
                    <option key={ artist.id } value={ artist.id }>
                        { artist.name }
                    </option>
                )
            })
        }
    }

    submitForm(e) {
        e.preventDefault();
        this.props.addMussicMutation({
            variables: {
                name: this.state.name, 
                lyrics: this.state.lyrics, 
                album: this.state.album, 
                released: this.state.released, 
                genres: this.state.genres, 
                artistid: this.state.artistid
            },
            refetchQueries: [{ query: getMussicsQuery }]
        });
    }

    render() {
        return (
            <Modal trigger={<Button>Add Mussic</Button>}>
                <Modal.Header>Add New Mussic To The PlayList</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={ this.submitForm.bind(this) }>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Name' placeholder='Type mussic name' onChange={ (e) => this.setState({ name: e.target.value})} />
                            <Form.Input fluid label='Album' placeholder='Type album name' onChange={ (e) => this.setState({ album: e.target.value})} />
                            <Form.Input fluid label='Genres' placeholder='Type genres' onChange={ (e) => this.setState({ genres: e.target.value})} />
                        </Form.Group>
                        <Form.TextArea label='Mussic Lyrics' placeholder='Type mussic lyrics...' onChange={ (e) => this.setState({ lyrics: e.target.value})}/>
                        <Form.Input fluid label='Released' placeholder='Type released years' onChange={ (e) => this.setState({ released: e.target.value})}/>
                        <Form.Field label='Sellect Artist' control='select' onChange={ (e) => this.setState({ artistid: e.target.value})}>
                            <option>Sellect Artist</option>
                            { this.displayArtists() }
                        </Form.Field>
                        <Button animated='vertical' widths='big'>
                        <Button.Content hidden>add artist</Button.Content>
                            <Button.Content visible>
                                <Icon name='add' />
                            </Button.Content>
                        </Button>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}
/*

/*  TEST 1
function AddMussic (props) {
    const [name, setName] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [album, setAlbum] = useState('');
    const [released, setReleased] = useState('');
    const [genres, setGenres] = useState('');
    const [artistid, setArtistid] = useState('');

    const displayArtists = () => {
        var data = this.props.getArtistsQuery;
        //const { data } = useQuery(getArtistsQuery);
        if(data.loading) {
                return(
                    <option disabled>
                        loading...
                    </option>
                )
                    } else {
                return data.artists.map(artist => {
                    return(
                    <option key={ artist.id } value={ artist.id }>
                        { artist.name }
                    </option>
                )
            })
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        const mut = useMutation(addMussicMutation, {
            variables: {
                name: name,
                lyrics: lyrics,
                album: album,
                released: released,
                genres: genres,
                artistid: artistid   
            },
            refetchQueries: [{ query: getMussicsQuery }]
        });
    }
        
        return (
            <Modal trigger={<Button>Add Mussic</Button>}>
                <Modal.Header>Add New Mussic To The PlayList</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={ submitForm }>
                            <Form.Group widths='equal'>
                       <Form.Input fluid label='Name' placeholder='Type mussic name' onChange={(e) => setName(e.target.value)} />
                                <Form.Input fluid label='Album' placeholder='Type album name' onChange={ (e) => this.setState({ album: e.target.value})} />
                                <Form.Input fluid label='Genres' placeholder='Type genres' onChange={ (e) => this.setState({ genres: e.target.value})} />
                            </Form.Group>
                            <Form.TextArea label='Mussic Lyrics' placeholder='Type mussic lyrics...' onChange={ (e) => this.setState({ lyrics: e.target.value})}/>
                            <Form.Input fluid label='Released' placeholder='Type released years' onChange={ (e) => this.setState({ released: e.target.value})}/>
                                <Form.Field label='Sellect Artist' control='select' onChange={ (e) => this.setState({ artistid: e.target.value})}>
                                       <option>Sellect Artist</option>
                                        { displayArtists() }
                                </Form.Field>
                                    <Button animated='vertical' widths='big'>
                                    <Button.Content hidden>add artist</Button.Content>
                                        <Button.Content visible>
                                            <Icon name='add' />
                                        </Button.Content>
                                    </Button>
                        </Form>
                </Modal.Content>
            </Modal>
    );

}
*/


// TEST 2
function AddMussic (props) {
    
    const [name, setName] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [album, setAlbum] = useState('');
    const [released, setReleased] = useState('');
    const [genres, setGenres] = useState('');
    const [artistid, setArtistid] = useState('');

    const { data, error, loading } = useQuery(getArtistsQuery);
    const displayArtists = () => {
        if(loading) {
            return(
                <option disabled>
                    loading...
                </option>
            )
        } else {
            return data.artists.map(artist => {
                return(
                    <option key={ artist.id } value={ artist.id }>
                        { artist.name }
                    </option>
                )
            })
        }
    }

    

    const [addMusic] = useMutation(addMussicMutation, {
        refetchQueries: [{ query: getMussicsQuery }]
      });
      const submitForm = (e) => {
          e.preventDefault();
          addMusic({
              variables: {
                  name: name,
                  lyrics: lyrics,
                  album: album,
                  released: released,
                  genres: genres,
                  artistid: artistid   
              }     
          });
      }

    return (
        <Modal trigger={<Button>Add Mussic</Button>}>
            <Modal.Header>Add New Mussic To The PlayList</Modal.Header>
            <Modal.Content>
                <Form onSubmit={submitForm}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Name' placeholder='Type mussic name' onChange={ (e) => setName({ name: e.target.value})} />
                        <Form.Input fluid label='Album' placeholder='Type album name' onChange={ (e) => setAlbum({ album: e.target.value})} />
                        <Form.Input fluid label='Genres' placeholder='Type genres' onChange={ (e) => setGenres({ genres: e.target.value})} />
                    </Form.Group>
                    <Form.TextArea label='Mussic Lyrics' placeholder='Type mussic lyrics...' onChange={ (e) => setLyrics({ lyrics: e.target.value})}/>
                    <Form.Input fluid label='Released' placeholder='Type released years' onChange={ (e) => setReleased({ released: e.target.value})}/>
                    <Form.Field label='Sellect Artist' control='select' onChange={ (e) => setArtistid({ artistid: e.target.value})}>
                        <option>Sellect Artist</option>
                        { displayArtists() }
                    </Form.Field>
                    <Button animated='vertical' widths='big'>
                    <Button.Content hidden>add artist</Button.Content>
                        <Button.Content visible>
                            <Icon name='add' />
                        </Button.Content>
                    </Button>
                </Form>
            </Modal.Content>
        </Modal>
    );



}


export default compose(
    graphql(getArtistsQuery, { name: "getArtistsQuery" }),
    graphql(addMussicMutation, {name: "addMussicMutation" })
)(AddMussic)


