import React,{useState, useEffect} from "react";
import axios from 'axios';
import {WorkSection,WorkTitle,WorkPart,Icon,PartTitle,Line,PartDesc} from './style.js';

const Work= () =>{

        const [works, setWorks] = useState([]);

        useEffect(()=>{
            axios.get('js/data.json').then(res => {setWorks(res.data.works)})
        })

        const worksList = works.map((workItem) => {
            return(
                <WorkPart first={workItem.id} key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Line/>
                    <PartDesc>
                        {workItem.body}
                    </PartDesc>
                </WorkPart>
            )
        })

        return(
            <WorkSection>
                <div className="container">
                    <WorkTitle><span>My</span> Work</WorkTitle>
                    {worksList}
                </div>
            </WorkSection>
        )
    
}

export default Work;