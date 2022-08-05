import React, {useState, useEffect} from "react";
import {ProfileSkills,Profile,ProfileList,ProfileItem,Span,SpanWeb,SkillsSection,SkillsDesc,Bar,BarTitle,BarPerc,BarParent,ParentSpan,ProfileSkillsTitle,ProfileSkillsSpan} from './style.js';
import axios from "axios";
const SocialMedia = () =>{

    const [skills, setSkils] = useState([]);
    
    useEffect(()=>{
        axios.get('js/data.json').then(res => {setSkils(res.data.profile)});
    })

    const profileSkills = skills.map((skill) => {
        return(
            <Bar key={skill.id}>
            <BarTitle>{skill.skill}</BarTitle>
            <BarPerc>{skill.progress}</BarPerc>
            <BarParent>
                <ParentSpan number={skill.id}></ParentSpan>
            </BarParent>
        </Bar>
        )
    }) 
    
    return(
        <ProfileSkills>
            <div class="container">
                <Profile>
                    <ProfileSkillsTitle><ProfileSkillsSpan>My </ProfileSkillsSpan>Profile</ProfileSkillsTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </Profile>
                

                <SkillsSection>
                    <ProfileSkillsTitle>Some <ProfileSkillsSpan>skills</ProfileSkillsSpan></ProfileSkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                   {profileSkills}
                </SkillsSection>
                
            </div>
        </ProfileSkills>
    )
}

export default SocialMedia;



            //   <Bar>
            //             <BarTitle>Bootstrap</BarTitle>
            //             <BarPerc>100%</BarPerc>
            //             <BarParent>
            //                 <ParentSpan number="1"></ParentSpan>
            //             </BarParent>
            //         </Bar>
                    
            //         <Bar>
            //             <BarTitle>CSS3</BarTitle>
            //             <BarPerc>90%</BarPerc>
            //             <BarParent>
            //                 <ParentSpan number="2"></ParentSpan>
            //             </BarParent>
            //         </Bar>
                    
            //         <Bar>
            //             <BarTitle>Photoshop</BarTitle>
            //             <BarPerc>80%</BarPerc>
            //             <BarParent>
            //                 <ParentSpan number="3"></ParentSpan>
            //             </BarParent>
            //         </Bar>