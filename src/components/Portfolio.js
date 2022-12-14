import React from 'react';
import './portfolio.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Portfolio = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <div className="portfolio">
    <div className="container">
        <div id='portfolio' className="portfolio-content">
          <h3>LATEST CREATIVE WORK</h3>
          <h1>Our Portfolio</h1>
          <div className="tabs">
          <Box sx={{ width: '100%' }}>
      <Box className='box' sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  value={value} onChange={handleChange} centered aria-label="basic tabs example">
          <Tab  label="All" {...a11yProps(0)} />
          <Tab label="Our Clients" {...a11yProps(1)} />
          <Tab label="Our Projects" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel className='box' value={value} index={0}>
        {/* all tabs */}
        <div className="all-tabs">
        
        <div className="tab">
          <div className="tab-overlay"></div>
            <img src="http://al-meshka.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-15-at-3.12.41-PM.jpeg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <Link to='/portfolio1'><h3>EVA PHARMA</h3></Link>
              <span>Our Clients</span>
              
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-10-01-at-2.12.39-PM.jpeg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Pepsi</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Alshaya Group</h3>
              <span>Our Clients</span>
            </div>
          </div>

          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>SAJA</h3>
              <span>Our Clients</span>
            </div>
          </div>

          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Mina Pharma</h3>
              <span>Our Clients</span>
            </div>
          </div>

          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>ARMA</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>SODIC</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Obegi</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Sodic</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Abo-Dawod For Trading</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>ASTRA</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Pharma Overseas</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>agility egypt</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>chipsy egypt</h3>
              <span>Our Clients</span>
            </div>
          </div>



          <div className="tab">
          <div className="tab-overlay"></div>
            <img src="http://al-meshka.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-15-at-3.12.41-PM.jpeg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>EVA PHARMA ,VACCINE & STERILE BLD</h3>
              <span>Our Projects</span>
              
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-10-01-at-2.12.39-PM.jpeg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Pepsi Tanta bulk line</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Admin building</h3>
              <span>Our Projects</span>
            </div>
          </div>

          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>saja pharmaceuticals</h3>
              <span>Our Projects</span>
            </div>
          </div>

          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>storage hanger</h3>
              <span>Our Projects</span>
            </div>
          </div>

          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>ARMA CHEMICALS FACTORY</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Beverly Hills</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>OBEGI FACTORY</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>October plaza</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Abo Dawod Ware House Building</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>ASTRA zink</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>pharma overseas stores</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>agility warehouses</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>chipsy warehouset</h3>
              <span>Our Projects</span>
            </div>
          </div>




        
        
        </div>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* our clients */}
        <div className="our-clients-tabs">
        <div className="tab">
          <div className="tab-overlay"></div>
            <img src="http://al-meshka.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-15-at-3.12.41-PM.jpeg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <Link to='/portfolio1'><h3>EVA PHARMA</h3></Link>
              <span>Our Clients</span>
              
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-10-01-at-2.12.39-PM.jpeg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Pepsi</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Alshaya Group</h3>
              <span>Our Clients</span>
            </div>
          </div>

          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>SAJA</h3>
              <span>Our Clients</span>
            </div>
          </div>

          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Mina Pharma</h3>
              <span>Our Clients</span>
            </div>
          </div>

          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>ARMA</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>SODIC</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Obegi</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Sodic</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Abo-Dawod For Trading</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>ASTRA</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Pharma Overseas</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>agility egypt</h3>
              <span>Our Clients</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>chipsy egypt</h3>
              <span>Our Clients</span>
            </div>
          </div>
        
        
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* projects */}
        <div className="our-projects">
        <div className="tab">
          <div className="tab-overlay"></div>
            <img src="http://al-meshka.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-15-at-3.12.41-PM.jpeg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <Link to='/portfolio1'><h3>EVA PHARMA ,VACCINE & STERILE BLD</h3></Link>
              <span>Our Projects</span>
              
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-10-01-at-2.12.39-PM.jpeg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Pepsi Tanta bulk line</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Admin building</h3>
              <span>Our Projects</span>
            </div>
          </div>

          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>saja pharmaceuticals</h3>
              <span>Our Projects</span>
            </div>
          </div>

          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>storage hanger</h3>
              <span>Our Projects</span>
            </div>
          </div>

          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>ARMA CHEMICALS FACTORY</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Beverly Hills</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>OBEGI FACTORY</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>October plaza</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>Abo Dawod Ware House Building</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>ASTRA zink</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>pharma overseas stores</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>agility warehouses</h3>
              <span>Our Projects</span>
            </div>
          </div>
          <div className="tab">
          <div className="tab-overlay"></div>

            <img src="http://al-meshka.com/wp-content/uploads/2020/09/arma.jpg" alt="" />
            <div className="tab-hover-effect">
              <AiOutlineSearch/>
              <h3>chipsy warehouset</h3>
              <span>Our Projects</span>
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
          </div>

          <div className="swiper">
          <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="http://al-meshka.com/wp-content/uploads/2020/10/logo-300x150px-01.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="http://al-meshka.com/wp-content/uploads/2020/10/logo-300x150px-02.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="http://al-meshka.com/wp-content/uploads/2020/10/logo-300x150px-03.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="http://al-meshka.com/wp-content/uploads/2020/10/logo-300x150px-04.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="http://al-meshka.com/wp-content/uploads/2020/10/logo-300x150px-05.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="http://al-meshka.com/wp-content/uploads/2020/10/logo-300x150px-06.jpg" alt="" /></SwiperSlide>
      
    </Swiper>
          </div>

        </div>
      </div>
    </div>
      
    </>
  );
}

export default Portfolio;
