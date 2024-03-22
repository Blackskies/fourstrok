import './App.css';
import HeaderBar from './Common/HeaderBar';
import FooterBar from './Common/FooterBar';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles'
import PhotoCarosol from './Common/PhotoCarosol';
import Container from '@mui/material/Container';
import ContactUs from './Pages/ContactUsPage';
import PartnerBrands from './Pages/PartnerBrands';
import { Grid } from '@mui/material';
import Reviews from './Common/Reviews';
import CarServices from './Pages/CarServices';

function App() {

  const StyleForEachBlock = {
    paddingBottom: 5,
    paddingTop: 5
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{
        // background: "#fdfeff"
      }}>
        <HeaderBar />
        <Grid>
          <PhotoCarosol />
        </Grid>

        {/* Main Content */}

        <Grid
          container
        >
          <Grid xl={1} lg={1} ></Grid>
          <Grid xl={10} lg={10} >
            <Grid
              id={"Services"}
              sx={StyleForEachBlock}
            >
              <CarServices />
            </Grid>
            <Grid
              id={"Reviews"}
              sx={StyleForEachBlock}
            >
              <Reviews />
            </Grid>
            <Grid
              id={"Partner-Brands"}
              sx={StyleForEachBlock}
            >
              <PartnerBrands />
            </Grid>
            <Grid
              id={"Contact-Us"}
              sx={{ paddingTop: 5 }}
            >
              <ContactUs />
            </Grid>
          </Grid>
          <Grid xl={1} lg={1}></Grid>
        </Grid>
        <FooterBar />
      </div>
    </ThemeProvider >
  );
}

export default App;
