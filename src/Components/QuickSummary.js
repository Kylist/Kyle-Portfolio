import React from 'react';

export const QuickSummary = ({ qsname, qstitle, qspic }) => {
    return (
        <div className="quick-summary">
            <section>
                <div className="flex-container">
                    <div className="wow fadeInUp">
                        <h1>WOAH THERE !!! </h1>
                        <hr></hr>
                        <h5>My name is {qsname}. I am a {qstitle}.</h5>
                        <p>I am a developer that enjoy building websites and solve problems.</p>
                        <hr></hr>
                        <a href="#about-me"><button>More Me</button></a>
                        <a href="#project"><button>More Project</button></a>
                    </div>
                    <div className="wow fadeInUp">
                    <img src={qspic} className="rightImage" alt="" /*"logo-brand.png"*/ />
                    </div>
                </div>
            </section>
        </div>

    )
}
