import React, { useState } from 'react';
import './infoCards.css';
import '../../config';
//Images//
import bordeaux from '../../assets/actual/1bordeaux.jpg';
import overlord from '../../assets/actual/2overlord.jpg';
import ttrpg from '../../assets/actual/3ttrpg.jpg';
import threesunflowers from '../../assets/actual/4threesunflowers.jpg';
import music from '../../assets/actual/5music.jpg';
const InfoCards = () => {
    const [selected, setSelected] = useState(1);
    const handleSelect = (n) => setSelected(n);
    return (
    <section 
        style={{
            width: '100%',
            
            paddingRight: '0%',
            paddingLeft: '0%',
            paddingTop: '10rem',

        }}
    >
        {[1,2,3,4,5].map(n => (
            <input
                key={n}
                className="sr-only"
                id={`card-${n}`}
                type="radio"
                name="panel"
                checked={selected === n}
                onChange={() => handleSelect(n)}
            />
        ))}

        <article id="article-1" className={selected === 1 ? 'is-front' : ''}>
            <header>
                <h2>Languages Spoken: 3 and Counting…</h2>
                <label htmlFor="card-2">&#10539;</label>
            </header>
            <div>
                <img src={bordeaux} alt="Passion for Languages"/>
                <div className="poem">
                    <p >
                        I would never have learned English without proper incentive, specially at such a young age and in the south of Mexico; thankfully I found just that when I started consuming media outside of the spanish-speaking cultural sphere. I started with untranslated english RPG games and comics; expanding to books and shows in due time. It was thus a natural conclusion to think that speaking more languages would thus allow me to come across more of what I already like, and maybe new things I couldn’t even fathom yet. In short, I seek to expand my horizons via cultural and linguistic understanding. I can speak English, French and Spanish, with Italian being planned for next year.
                    </p>
                </div>
            </div>
        </article>

        <article id="article-2" className={selected === 2 ? 'is-front' : ''}>
            <header>
                <h2>Good Stories in All Shapes or Forms</h2>
                <label htmlFor="card-3">&#10539;</label>
            </header>
            <div>
                <img src={overlord} alt="Passion for Good Stories"/>
                <div className="poem">
                    <p> Description: Due to  my dad’s influence I have come to appreciate good stories in any way, shape or form. Manga, Comics, Interpretative Dance, Theathre, Books, Music, etc. ir don’t matter to me, as long as I like it. Naturally, I like too many things and am on the outlook for the next thing to appreciate. If you like anything lots do tell me about it! There’s a contact me form at the end of this site, so don’t hesitate to tell about your great stories and the things you like!
                    </p>
                </div>
            </div>
        </article>

        <article id="article-3" className={selected === 3 ? 'is-front' : ''}>
            <header>
                <h2>Storytelling and Tabletop Roleplaying</h2>
                <label htmlFor="card-4">&#10539;</label>
            </header>
            <div>
                <img src={ttrpg} alt="Passion for Storytelling"/>

                <div className="poem">
                    <p>
                        Description: I would have never imagined how into Tabletop Roleplaying I would get; what started as a whim, turned into a deep passion that has led me to believe the vast majority of my current friends. I have been a Dungeon Master for close to 2 years now, and have weaved countless narratives in that time. I have played many RPGs in that time, and have even participated on Game Jams for LANCER (here’s my itch.io: https://donkeyponius981.itch.io/ !).
                    </p>
                </div>
            </div>
        </article>

        <article id="article-4" className={selected === 4 ? 'is-front' : ''}>
            <header>
                <h2>Painting and Drawing</h2>
                <label htmlFor="card-5">&#10539;</label>
            </header>
            <div>
                <img src={threesunflowers} alt="Passion for Art"/>
                <div className="poem">
                    <p>
                        I have painted/drawed since I have memory (~20 years). Mostly using traditional media, having participated in numerous art contests when young. I have also dabbled in digital drawing, though not as much. Since I never thought of making this part of my career path, I never kept a detailed portfolio: a HUGE mistake, because I am nothing without art. Hopefully I can remediate this in the near future (although I have no well kept art portfolio, I can show you pisces I have worked on)! Now, regarding the techniques I employ: watercolors, coloring pencils, markers, ink and graphite.
                    </p>
                </div>
            </div>
        </article>

        <article id="article-5" className={selected === 5 ? 'is-front' : ''}>
            <header>
                <h2>Music, All Genres, Really</h2>
                <label htmlFor="card-1">&#10539;</label>
            </header>
            <div>
                <img src={music} alt="Passion for Music"/>
                <div className="poem">
                    <p>
                        Lots of people say they listen to any kind of music, when in reality they listen to slight variations of 1 or 2 genres. I listen to any music, as long as it sounds good: japanese latin folk, french rap, death metal, spanish rock, filipino house, anything goes~
                    </p>
                </div>
            </div>
        </article>
    </section>
    );
};
export default InfoCards