import * as React from "react";
import icon1 from "../images/icon1.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./mcontracting.css";
import tubes from '../images/tubes.jpg'
import sprinkler from '../images/sprinkler.jpg'


const MContracting = () => {
  return (
    <>
      <div className="container">
        <div className="mep-contracting">
          <div className="mep-contracting-header">
            <h1>MEP Contracting</h1>
            <div className="mep-contracting-header-text">
              <img src={icon1} alt="" />
              <div className="mep-contracting-header-text-col">
                <p>
                  We are offering complete MEP contracting solutions including
                  HVAC,
                </p>
                <p>
                  Firefighting, Electrical works, fire alarm, access control,
                  CCTV, and BMS.
                </p>
                <p>
                  We can do the job either as contractor or as design & build.
                </p>
              </div>
            </div>
          </div>

          <div className="mep-contracting-showcase">
            <div className="mep-contracting-showcase-left">
              <h2>Fire Fighting</h2>
              <p>- Fire Alarm System</p>
              <p>- Gas & Flame detection System</p>
              <p>- Cabinets</p>
              <p>- Foam System</p>
              <div className="accordions">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <h3>Manual</h3>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="accordion-p">
                      <p>1-Cabinets</p>
                      <p> 2- Portable</p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <h3>GAS suppression System</h3>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="accordion-p">
                      <p>1- FM200</p>
                      <p>2- NOVEC1230</p>
                      <p>3- CO2</p>
                      <p>4- Fire trace</p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <h3>Automatic Sprinkler System</h3>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="accordion-p">
                      <p>1- Valves</p>
                      <p>2- Sprinklers & Nozzles</p>
                      <p>3- Deluge & Reaction System</p>
                      <p>4- HYDRANTS</p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="mep-contracting-header-text-col">
                <h1>HVAC</h1>
                <p>1-VRV System</p>
                <p>2-Split and Concealed A/C System</p>
                <p>3-Ventilation System</p>
                <p>4-Duct Work</p>
                <div className="accordions">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <h3>Automatic Sprinkler System</h3>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="accordion-p">
                        <p>1- Valves</p>
                        <p>2- Sprinklers & Nozzles</p>
                        <p>3- Deluge & Reaction System</p>
                        <p>4- HYDRANTS</p>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>

            <div className="mep-contracting-showcase-right">
              <div className="mep-contracting-showcase-right-img">
                
              <h2>GAS Detection</h2>
              <img src={tubes} alt="" />
              </div>
              <div className="mep-contracting-showcase-right-img">
                
              <h2>Sprinkler </h2>
              <img src={sprinkler} alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MContracting;
