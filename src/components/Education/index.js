
import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    background:#008080;
    border-bottom-right-radius: 50px 20px;
    border-top-right-radius: 50px 20px;
    @media (max-width: 960px) {
        padding: 0px;
    }

    &:before {
        content: "";
        position: absolute;
        top:-73px;
        left: 0;
        z-index: -100;
        height: 13px;
        background-color:  #008080;
        border-width: 30px;
        border-style: solid;
       
        border-color: transparent transparent  #008080 ; /* Match the top div's background color */
      }
    
      &:after {
        content: "";
        position: absolute;
        top: -73px;
        left: 0;
        z-index: -100;
        height: 13px;
        background-color:#4682B4;
        border-width: 30px;
        border-style: solid;
        border-bottom-left-radius: 50px 20px;
        border-color: transparent transparent #4682B4; /* Match the top div's background color */
    }
    
    
    



`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: white;
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color:white;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    border:white;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;



const index = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {education.map((education,index) => (
                            <TimelineItem key={index} >
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="filled" color="primary" />
                                    {index !== experiences.length  && <TimelineConnector style={{ background: 'blue' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default index