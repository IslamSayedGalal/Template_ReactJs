import React, {useState, useEffect} from "react";
import {SocialMediaSection, Social, Icon, SocialP, SocialPSpan1, SocialPSpan2} from './style.js';
import axios from "axios";

const SocialMedia = () =>{

    const [social, setSocial] = useState([]);
    
    useEffect(()=>{
        axios.get('js/data.json').then(res => {setSocial(res.data.social)});
    })

    const SocialProfiles = social.map( (socialItem) =>{
        return(
            <Social item={socialItem.id} key={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <SocialP>
                    <SocialPSpan1>{socialItem.title}</SocialPSpan1>
                    <SocialPSpan2>{socialItem.body}</SocialPSpan2>
                </SocialP>
            </Social>
        )
    })

    return(
        <SocialMediaSection>
            {SocialProfiles}
        </SocialMediaSection>
    )
}

export default SocialMedia;