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

            <div class="card">
                <div class="title">
                </div>
                <div class="chip">
                    <div class="chip-lines line-left1">
                    </div>
                    <div class="chip-lines line-left2">
                    </div>
                    <div class="chip-lines-center center-line-left">
                    </div>
                    <div class="chip-lines-center center-line-right">
                    </div>
                    <div class="chip-lines line-right1">
                    </div>
                    <div class="chip-lines line-right2">
                    </div>
                </div>
                <div class="number">
                </div>
                <div class="valid-dates">
                </div>
                <div class="valid-dates-icon">
                </div>
                <div class="valid-dates-date">
                </div>
                <div class="name">
                </div>
            </div>
        </div>
    )
}

export default CurvedHeader
