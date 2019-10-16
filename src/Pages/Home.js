import React, { useEffect } from 'react'
import UrlCall from './../ContextApi/UrlCall'
import Button from 'react-bootstrap/Button'
import UseBaseContext from './../ContextApi/UseBaseContext'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


function Home() {
    let apiCall = UrlCall();
    const { showMovies } = UseBaseContext();
    /* react hooks - works like 'onRender' */
    useEffect(() => {
        // apiCall.defaultCall();
    });

    const loadDefault = () => {
        apiCall.getCustomCall();
    }
    /* load the initial set of movies */
    return (
        <section className="home-page m-top-3">
            <div className="row ov-y-hide">
                <div className="container">
                    <div className="col-lg-12">
                        {/* main page for managing all the tiles */}
                        <section id="home-page-tile">
                            {/* header of the tiles goes here */}
                            <div className="row">
                                <div className="center">

                                    {(showMovies && showMovies.length == 0) ?
                                        <Button variant="primary" onClick={loadDefault} >
                                            Click To Start
                                    </Button> : ''
                                    }


                                </div>
                                {/* individual tiles goes here */}
                                {
                                    showMovies.map((item) => (
                                        <OverlayTrigger
                                            key={item.id}
                                            placement={'bottom'}
                                            overlay={
                                                <Tooltip id={item.id}>
                                                    <strong>{item.title}</strong>
                                                    <hr/>
                                                    <p>Release Date: {item.release_date || 'NA'}</p>
                                                </Tooltip>
                                            }
                                        >
                                            <div key={item.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <img alt={item.title} className='image-tile' src={item.poster_path ? 'https://image.tmdb.org/t/p/w500' + item.poster_path : 'https://ffp4g1ylyit3jdyti1hqcvtb-wpengine.netdna-ssl.com/wp-content/themes/frontierline/img/place-thumb.png'} />
                                            </div>
                                        </OverlayTrigger>
                                    ))}
                                ))
                            }



                            </div>

                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;