import React from 'react'
import Card from 'react-bootstrap/Card'

const imgCardStyle = {
    'height': '200px',
    'overflowY': 'hidden'
}
const NewsCard = (props) => (

    <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
        <Card >
            <Card.Img className='img-card' style={imgCardStyle} variant="top" src={props.news.urlToImage} />
            <Card.Body>
                <Card.Title>{restrictText(props.news.title, 55)}</Card.Title>

                <Card.Text>
                    {restrictText(props.news.description, 140)}
                </Card.Text>
                <Button variant="primary">Full Story</Button>
            </Card.Body>
        </Card>
    </div>

)
class Home extends React.Component {

    render() {
        return (
            <AppContext.Consumer>
                {(context) =>
                    <div className='container'>
                        <div className='row'>
                            {context.news.map((item) => (<NewsCard news={item} />))}
                        </div>
                    </div>
                }
            </AppContext.Consumer>

        )
    }
}

export default Home;