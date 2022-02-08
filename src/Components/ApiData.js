import { useState, useEffect } from 'react';
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';


const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [expanded, setExpanded] = useState(1);
  

  const fetchData = () =>{
    try{
      fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(json => setPosts(json));
    } catch(error){
        console.log(`Something went wrong ${error}`);
    }
  };

  useEffect(()=>{
      fetchData();
  },[]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return <>
      {
        posts.length>0 && posts.map(item => {
            return( <Accordion style={ {width:`100%` } } item xs={4} key={ item.id } expanded={expanded === item.id } onChange={ handleChange(item.id) }>
                  <AccordionSummary  expandIcon={<ExpandMore />}><Typography>{ item.title }</Typography></AccordionSummary>
                  <AccordionDetails><Typography>{ item.body }</Typography></AccordionDetails>
                </Accordion>
                )
        })
      }
      
    </>;
}

export default ApiData;