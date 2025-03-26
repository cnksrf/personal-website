import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';

const MotionGrid = motion(Grid);

function Contact() {
  useEffect(() => {
    emailjs.init('Eb7Fts2eTnZ5dn1gi');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Form validasyonu
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Lütfen tüm alanları doldurun');
      }

      // Email formatı kontrolü
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Geçerli bir email adresi girin');
      }

      const response = await emailjs.send(
        'service_7c2tkkc',
        'template_h9dgp6h',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'Eb7Fts2eTnZ5dn1gi'
      );
      
      if (response.status === 200) {
        setSnackbar({
          open: true,
          message: 'Mesajınız başarıyla gönderildi!',
          severity: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Gönderim başarısız oldu');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSnackbar({
        open: true,
        message: error.message || 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      content: 'cenkserif00@gmail.com',
      link: 'mailto:cenkserif00@gmail.com',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Location',
      content: 'Varna, Bulgaria',
      link: '#',
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
          Contact Me
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
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Follow Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <IconButton
                  href="https://github.com/cnksrf"
                  target="_blank"
                  sx={{ color: 'primary.main', '&:hover': { color: 'primary.dark' } }}
                >
                  <GitHubIcon sx={{ fontSize: 32 }} />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/cenk-%C5%9Ferif-86547b319/"
                  target="_blank"
                  sx={{ color: 'primary.main', '&:hover': { color: 'primary.dark' } }}
                >
                  <LinkedInIcon sx={{ fontSize: 32 }} />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/serif.cenk"
                  target="_blank"
                  sx={{ color: 'primary.main', '&:hover': { color: 'primary.dark' } }}
                >
                  <InstagramIcon sx={{ fontSize: 32 }} />
                </IconButton>
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
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Contact Information
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                  {contactInfo.map((info, index) => (
                    <Grid item xs={12} key={index}>
                      <Box
                        component="a"
                        href={info.link}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          textDecoration: 'none',
                          color: 'inherit',
                          p: 2,
                          borderRadius: 1,
                          bgcolor: 'background.default',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'translateX(10px)',
                          },
                        }}
                      >
                        <Box sx={{ color: 'primary.main', mr: 2 }}>
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {info.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.content}
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

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact; 