import React from 'react';
import './infoCards.css';
import '../../config';

const InfoCards = () => {
    return (
    <section 
        style={{
            width: '100%',

            paddingRight: '20%',
            paddingLeft: '25%',
            paddingTop: '5%',
        }}
    >
        <input className="sr-only" id="card-1" type="radio" name="panel" defaultChecked />
        <input className="sr-only" id="card-2" type="radio" name="panel" />
        <input className="sr-only" id="card-3" type="radio" name="panel" />

        <article id="article-1">
            <header>
                <h2>Watchtower</h2>
                <label for="card-2">&#10539;</label>
            </header>
            <div>
                <img src="https://picsum.photos/id/641/200/200" alt="watch tower"/>
                <div class="poem">
                    <p >
                        A lone watchtower stands by the moaning shore,
                        Its shadow long, though eyes watch no more.
                        Salt-kissed winds whisper secrets of the sea
                        But no soul stirs in its silent decree.
                    </p>
                </div>
            </div>
        </article>

        <article id="article-2">

            <header>
                <h2>Whispers in the Mist</h2>
                <label for="card-3">&#10539;</label>
            </header>
            <div>
                <img src="https://picsum.photos/id/634/200/200" alt="forest mist"/>
                <div class="poem">
                    <p> The forest sleeps beneath a shroud of grey,
                        Where dawn forgets to find its way.
                        Each branch is cloaked in silver breath,
                        Suspended still, in quiet death.
                    </p>
                </div>
            </div>
        </article>

        <article id="article-3">

            <header>
                <h2>The Pineapple in the Field</h2>
                <label for="card-1">&#10539;</label>
            </header>
            <div>
                <img src="https://picsum.photos/id/824/200/200" alt="computer"/>

                <div class="poem">
                    <p>
                        There once was a pineapple, proud and round,
                        Who somehow sprouted in farming ground.
                        Among the wheat and rows of corn,
                        He stood confused, alone, forlorn.
                    </p>
                </div>
            </div>
        </article>
    </section>
    );
};
export default InfoCards