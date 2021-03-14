import React, { Fragment } from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiCubeOutline  } from '@mdi/js'
import Test from './Etest/test';
const Home = () =>(
    <Fragment>
        <Helmet><title>Trắc nghiệm tiếng Anh</title></Helmet>
        <div id = "home">
            <section>
                <div className="cube">
                   <span ><Icon  
                        path={mdiCubeOutline}
                        size={7}
                        color="orange"
                        spin
                    /></span>
                </div>
                <h1>Trắc nghiệm Tiếng Anh</h1>
                <div className="play">
                    <ul>
                        <li><Link className="buttonplay"  to="/test">Play</Link></li>
                    </ul>
                </div>
                <div className="authcontainer">
                    <Link className="authbutton1"  to="/login" >Login</Link>
                    <Link className="authbutton2"  to="/register" >Register</Link>
                </div>
            </section>
        </div>
    </Fragment>
        
);

export default Home;

