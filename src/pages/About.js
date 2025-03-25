import React from 'react';
import { Container, Typography, Grid, Paper, Box, LinearProgress, Divider, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import CircleIcon from '@mui/icons-material/Circle';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import DownloadIcon from '@mui/icons-material/Download';
import profileImage from '../assets/images/ben.jpg';
import cvPdf from '../assets/cv.pdf';

const MotionGrid = motion.create(Grid);
const MotionBox = motion(Box);

const skills = [
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Frontend Development',
    description: 'React.js, JavaScript, HTML5, CSS3, and modern frontend frameworks.',
    progress: 90,
  },
  {
    icon: <BrushIcon sx={{ fontSize: 40 }} />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with Material-UI and custom designs.',
    progress: 85,
  },
  {
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    title: 'Backend Development',
    description: 'Node.js, Express, and database management with MongoDB and SQL.',
    progress: 88,
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Security & Performance',
    description: 'Implementing best practices for web security and optimizing application performance.',
    progress: 82,
  },
];

const experiences = [
  {
    title: 'Freelance Developer',
    company: 'Self-employed',
    period: '2024 - Present',
    description: 'Working as a freelance developer, specializing in web development and creating custom solutions for clients.',
    technologies: ['React', 'Node.js', 'JavaScript', 'HTML/CSS'],
  },
];

const education = [
  {
    year: '2024 - 2029',
    title: 'Bachelor in Software and Internet Technologies',
    school: 'Technical University of Varna',
    description: 'Specialized in Software Engineering and Web Development.',
  },
];

function TimelineItem({ year, title, subtitle, description }) {
  return (
    <Box sx={{ position: 'relative', pl: 3, pb: 3 }}>
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircleIcon sx={{ fontSize: 12, color: 'primary.main' }} />
      </Box>
      <Box sx={{ position: 'absolute', left: 11, top: 0, bottom: 0 }}>
        <Divider orientation="vertical" sx={{ height: '100%' }} />
      </Box>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {year}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" color="primary" gutterBottom>
        {subtitle}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {description}
      </Typography>
    </Box>
  );
}

function About() {
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
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          About Me
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              component="img"
              src={profileImage}
              alt="Profile"
              sx={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                mb: 4,
              }}
            />
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: 'background.paper',
                mb: 4,
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Contact Info
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Email:</strong> cenkserif00@gmail.com
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Location:</strong> Varna, Bulgaria
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>GitHub:</strong>{' '}
                <a
                  href="https://github.com/cnksrf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  github.com/cnksrf
                </a>
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Button
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon />}
                href={cvPdf}
                download="CenkSerif_CV.pdf"
                fullWidth
                sx={{
                  borderRadius: 2,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 500,
                  boxShadow: '0 4px 12px rgba(103, 58, 183, 0.2)',
                  '&:hover': {
                    boxShadow: '0 6px 16px rgba(103, 58, 183, 0.3)',
                  },
                }}
              >
                Download CV
              </Button>
            </Paper>

            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 3 }}>
                <WorkIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Experience
              </Typography>
              {experiences.map((exp, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {exp.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exp.company} | {exp.period}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {exp.description}
                  </Typography>
                </Box>
              ))}
            </Paper>

            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 3 }}>
                <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Education
              </Typography>
              {education.map((edu, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {edu.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {edu.school} | {edu.year}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {edu.description}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </MotionBox>
        </Grid>

        <Grid item xs={12} md={8}>
          <MotionGrid
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
                mb: 4,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Who I Am
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                I am a passionate full-stack developer with a strong foundation in modern web technologies.
                My journey in software development has equipped me with the skills to create
                responsive, user-friendly, and efficient web applications.
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                I specialize in React.js and JavaScript development, with a keen eye for
                design and user experience. I'm constantly learning and exploring new
                technologies to stay at the forefront of web development.
              </Typography>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 4 }}>
                Skills & Expertise
              </Typography>
              <Grid container spacing={3}>
                {skills.map((skill, index) => (
                  <Grid item xs={12} key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        p: 2,
                        borderRadius: 1,
                        bgcolor: 'background.default',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ color: 'primary.main' }}>
                          {skill.icon}
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {skill.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {skill.description}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={skill.progress}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          bgcolor: 'background.paper',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </MotionGrid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About; 