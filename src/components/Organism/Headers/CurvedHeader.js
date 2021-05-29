import React from 'react';
import Content from '../../Atom/Texts/Content';
import Title from '../../Atom/Texts/Title';
import AppBar from './AppBar';
import './CurvedHeader.scss';

const CurvedHeader = () => {
    return (

        <div>
            <AppBar />
            <section className="section" >

                <div className="content" >
                    <Title>
                        Be Smart Take Card
                    </Title>
                    <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec aliquet leo, vel laoreet leo. Donec ut viverra turpis. Curabitur commodo.
                    </Content>
                </div>
            </section>

            
        </div>
    )
}

export default CurvedHeader
