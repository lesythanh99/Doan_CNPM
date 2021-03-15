import React, { Component, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// img intructions
// import answer from '../../assets/img/answer.png';
// import fiftyfifty from '../../assets/img/fiftyfifty.png';
// import options from '../../assets/img/options.png';
import quiz from '../../assets/img/quiz.png'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    // <Fragment>
    //     <Helmet><title>Hướng dẫn</title></Helmet>
    //     <div className="intructions container">
    //         <h1>Làm thế nào để chơi game ?</h1>
    //         <p>Ensure you read this guide from start tho finish.</p>
    //         <ul className="browser-default" id="main-list">
    //             <li>The game has a duration of 15 minutes and ends as soon as your time elapses.</li>
    //             <li>Each game consists of 15 questions.</li>
    //             <li>
    //                 Every question contains 4 options.
    //                 <img src={quiz} alt="Quiz app options example" height="400px" width="900px"></img>
    //             </li>
    //             <li>
    //                 Select the option which best answers the question by clicking (or selecting) it.
    //                 <img src={quiz} alt="Quiz app options example" height="400px" width="900px" ></img>
    //             </li>
    //         </ul>
    //         <div>
    //             <span className="left"><Link to="/">No take me back</Link></span>
    //             <span className="right"><Link to="/play/quiz">Okey, Let's do this</Link></span>
    //         </div>
    //     </div>
    // </Fragment>

    <Container maxWidth="lg">
      <h2>Hướng dẫn sử dụng trước khi dùng</h2>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Thời gian làm bài</Typography>
          {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Bài thi có thời gian làm bài theo mỗi cẫu tương ứng với 1 phút.
            Hết thời gian sẽ tự động nộp bài.
              </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Câu hỏi và đáp án</Typography>
          {/* <Typography className={classes.secondaryHeading}>
                You are currently not an owner
              </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography>
                Mỗi câu hỏi sẽ có 4 đáp án. Trong đó chỉ có một đáp án đúng. Click vào đáp án muốn chọn và bấm "Next" để chuyển câu.
              </Typography>
            </Grid>
            <Grid item xs={12}>
                <img src={quiz} alt="Quiz app options example" height="400px" width="900px" ></img>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Advanced settings</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
              </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
              </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
              </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
