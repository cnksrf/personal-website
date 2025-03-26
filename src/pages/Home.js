import React from 'react';
import { Container, Typography, Box, Button, Grid, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Helmet } from 'react-helmet';

const MotionBox = motion(Box);

function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Cenk Şerif</title>
        <meta name="description" content="Welcome to my personal website. I am a full-stack developer specializing in React and JavaScript." />
        <meta name="keywords" content="developer, web developer, full-stack, React, JavaScript" />
        <meta property="og:title" content="Cenk Şerif - Personal Website" />
        <meta property="og:description" content="Welcome to my personal website. I am a full-stack developer specializing in React and JavaScript." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #673ab7 0%, #00bcd4 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Hi, I'm <Box component="span" sx={{ color: 'secondary.main' }}>Cenk Şerif</Box>
                </Typography>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 400,
                    mb: 4,
                    opacity: 0.9,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                  }}
                >
                  <Box component="span" sx={{ color: 'secondary.main' }}>Full Stack Developer</Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    opacity: 0.8,
                    fontSize: '1.2rem',
                    maxWidth: '600px',
                    mx: 'auto',
                  }}
                >
                  I specialize in building scalable web applications with modern technologies.
                  With expertise in both frontend and backend development, I create seamless
                  digital experiences that drive business growth.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: 'center' }}>
                  <Button
                    component={RouterLink}
                    to="/projects"
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<LaunchIcon />}
                    sx={{
                      borderRadius: 2,
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    View My Work
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="outlined"
                    color="inherit"
                    size="large"
                    sx={{
                      borderRadius: 2,
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Contact Me
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                      href="https://github.com/cnksrf"
                      target="_blank"
                      sx={{ color: 'white', opacity: 0.8, '&:hover': { opacity: 1 } }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      href="https://www.linkedin.com/in/cenk-%C5%9Ferif-86547b319/"
                      target="_blank"
                      sx={{ color: 'white', opacity: 0.8, '&:hover': { opacity: 1 } }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      href="https://www.instagram.com/serif.cenk"
                      target="_blank"
                      sx={{ color: 'white', opacity: 0.8, '&:hover': { opacity: 1 } }}
                    >
                      <InstagramIcon />
                    </IconButton>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOnIcon sx={{ color: 'white', opacity: 0.8, fontSize: '1.2rem' }} />
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Varna, Bulgaria
                    </Typography>
                  </Box>
                </Box>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Home; 