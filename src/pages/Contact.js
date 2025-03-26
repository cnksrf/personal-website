import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  IconButton,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';

const MotionGrid = motion(Grid);

function Contact() {
  const theme = useTheme();

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      content: 'cenkserif00@gmail.com',
      link: 'mailto:cenkserif00@gmail.com',
      description: 'Feel free to reach out to me via email',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Location',
      content: 'Varna, Bulgaria',
      link: '#',
      description: 'Currently based in Varna, Bulgaria',
    },
  ];

  const socialLinks = [
    {
      icon: <GitHubIcon sx={{ fontSize: 32 }} />,
      title: 'GitHub',
      link: 'https://github.com/cnksrf',
      description: 'Check out my code repositories',
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/cenk-%C5%9Ferif-86547b319/',
      description: 'Connect with me professionally',
    },
    {
      icon: <InstagramIcon sx={{ fontSize: 32 }} />,
      title: 'Instagram',
      link: 'https://www.instagram.com/serif.cenk',
      description: 'Follow me on Instagram',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 8, maxWidth: '600px', mx: 'auto' }}
        >
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <MotionGrid
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: theme.palette.mode === 'dark' 
                  ? 'linear-gradient(145deg, #1e1e1e 0%, #2d2d2d 100%)'
                  : 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                Contact Information
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Grid container spacing={3}>
                  {contactInfo.map((info, index) => (
                    <Grid item xs={12} key={index}>
                      <Box
                        component="a"
                        href={info.link}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          textDecoration: 'none',
                          color: 'inherit',
                          p: 3,
                          borderRadius: 2,
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateX(10px)',
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                          },
                        }}
                      >
                        <Box sx={{ color: 'primary.main', mr: 2, mt: 0.5 }}>
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {info.title}
                          </Typography>
                          <Typography variant="body1" color="primary" sx={{ mb: 1 }}>
                            {info.content}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </MotionGrid>
        </Grid>

        <Grid item xs={12} md={6}>
          <MotionGrid
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: theme.palette.mode === 'dark' 
                  ? 'linear-gradient(145deg, #1e1e1e 0%, #2d2d2d 100%)'
                  : 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                Connect With Me
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Grid container spacing={3}>
                  {socialLinks.map((social, index) => (
                    <Grid item xs={12} key={index}>
                      <Box
                        component="a"
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          textDecoration: 'none',
                          color: 'inherit',
                          p: 3,
                          borderRadius: 2,
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateX(10px)',
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                          },
                        }}
                      >
                        <Box sx={{ color: 'primary.main', mr: 2, mt: 0.5 }}>
                          {social.icon}
                        </Box>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {social.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {social.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </MotionGrid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact; 