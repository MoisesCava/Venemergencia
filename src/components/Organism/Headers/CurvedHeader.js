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
                        Prueba tecnica
                    </Title>
                    <Content>
                        Parte 2 <br/>
                        Descripcion: <br/>
                        Esta es una landing page hecha sin libreria de 3eros. <br/>
                        Los enlaces a las otras partes de la prueba estan en la parte superior derecha de esta pagina
                    </Content>
                </div>
            </section>

            
        </div>
    )
}

export default CurvedHeader
