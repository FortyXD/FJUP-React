import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css'
const anchors = ["About", "secondPage", "Contacts"];

const App = () => (
    <ReactFullpage
        //fullpage options
        licenseKey={'fsdfldsfldsfl;s'}
        anchors={anchors}
        navigation
        navigationTooltips={anchors}

        scrollingSpeed={1000} /* Options here */


        render={({state, fullpageApi}) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className=" section bg-amber-900">
                        <div className='w-screen h-screen'>
                            <h1>dadasdasd</h1>
                        </div>
                    </div>
                    <div className="section bg-violet-900">
                        <p>Section 2</p>
                    </div>
                    <div className=" section bg-amber-900">
                        <div className='w-screen h-screen'>
                            <h1>dadazasdasdassdasd</h1>
                        </div>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);


export default App;