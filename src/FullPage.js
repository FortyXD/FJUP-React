import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css'
const anchors = ["About", "secondPage", "Contacts"];

const FullPage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey={'fsdfldsfldsfl;s'}
        anchors={anchors}
        navigation
        navigationTooltips={anchors}

        scrollingSpeed={1000} /* Options here */


        render={({state, fullpageApi}) => {
            return (
                <div className='h-screen w-screen'>

                    <ReactFullpage.Wrapper>

                        <div className=" section bg-gradient-to-b from-indigo-900 to-violet-900">
                            <div className='w-full h-full pt-16'>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, architecto consequuntur eveniet ex expedita magni pariatur quaerat sint sunt totam.</h1>
                            </div>
                        </div>
                        <div className="section bg-gradient-to-b from-violet-900 to-purple-900 pt-16">
                            <div className='w-full h-full'>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloribus dolorum eius laboriosam molestias nisi, optio placeat sapiente temporibus veniam?</h1>
                            </div>

                        </div>

                        <div className="section bg-gradient-to-b from-purple-900 to-fuchsia-900 pt-16">
                            <div className='w-full h-full'>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloribus dolorum eius laboriosam molestias nisi, optio placeat sapiente temporibus veniam?</h1>
                            </div>

                        </div>
                    </ReactFullpage.Wrapper>
                </div>


            );
        }}
    />
);


export default FullPage;