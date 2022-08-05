import React from "react";
import {HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, Span, HomeBtn} from './style.js';

const Home = () =>{
    return(
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Islam Galal</HomeTitle>
                    <HomeInfo>Software Engineer</HomeInfo>
                    <HomeDesc>
                        Iam a <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together.
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home;