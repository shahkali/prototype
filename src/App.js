import PrimarySearchAppBar from "./main";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import SearchIcon from '@mui/icons-material/Search';
import { ExpandCircleDown } from "@mui/icons-material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import GoogleIcon from '@mui/icons-material/Google';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,

  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function App() {

  const selectArt=()=>{
    if (window.triggerNodeHover) {
      window.triggerNodeHover();
    }
  }
  
  return (
    <div className="App">
      <PrimarySearchAppBar></PrimarySearchAppBar>
     
      <Box sx={{ padding:4 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        <Item>
        <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          
        </InputLabel>
        <Input
          fullWidth
          id="input-with-icon-adornment"
          color="secondary"
          defaultValue={'Search....'}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon></SearchIcon>
            </InputAdornment>
          }
        />
       
      </FormControl> &nbsp;
      <Button variant="text" size="small" sx={{verticalAlign:'bottom',textTransform:'capitalize'}}>
        <OpenInFullIcon fontSize="small"></OpenInFullIcon>&nbsp;Expand
      </Button>
          <Box mt={1}></Box>
        {
        [1,2,3,4,5].map((number) =>
        <>
        <Card onClick={selectArt} sx={{ boxShadow:'none',textAlign:'left',padding:0}}>
        <CardContent>
        <Typography variant="body1"  gutterBottom>
        Science mapping software tools: Review, analysis, and cooperative 
        </Typography>
        
        
        <Stack direction="row" spacing={2}>
        <Typography variant="body2" color="text.secondary">
        M. Cobo, A. G. López-Herrera, E......
        </Typography>
        <Typography sx={{float:'right',textAlign:'right'}} variant="body2" color="text.secondary">
          2011
        </Typography>
        </Stack>
        
      </CardContent>
      
        </Card>
        {number!==5?<Divider  />:''}
        </>
        )}
      
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <div id="mynetwork"></div>
          

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
      <Card sx={{textAlign:'left' }}>
      <CardContent>
        
        <Typography variant="body1"  >
        Software survey: VOSviewer, a computer program for bibliometric mapping - <span style={{fontWeight:'bold'}} id="artid"></span>
        </Typography>
        
        <Typography variant="body2" mt={1} color="text.secondary">
        Nees Jan van Eck, L. Waltman
         
          
        </Typography>
        <Typography variant="body2" mt={1} mb={1} color="text.secondary">
         2009, Scientometrics
        </Typography>
        <span style={{verticalAlign:'super',color:'rgba(0, 0, 0, 0.6)'}}>Open in:</span>&nbsp;&nbsp;<PictureAsPdfIcon sx={{color:'rgba(0, 0, 0, 0.6)'}}></PictureAsPdfIcon>&nbsp;
        <GoogleIcon sx={{color:'rgba(0, 0, 0, 0.6)'}}></GoogleIcon>

        <Typography variant="body1" mt={2}>
        S2 TL;DR: VOSviewer’s ability to handle large maps is demonstrated by using the program to construct and display a co-citation map of 5,000 major scientific journals.
        </Typography>
      </CardContent>
      
    </Card>
          </Item>
        </Grid>
        
      </Grid>
 
      </Box>
    </div>
  );
}

export default App;
