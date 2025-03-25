import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Box,
  Chip,
  Tabs,
  Tab,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import ecommerceImage from '../assets/images/ecommerce.jpg';
import ecommerceImage2 from '../assets/images/Ekran görüntüsü 2025-03-21 005907.png';
import ecommerceImage3 from '../assets/images/Ekran görüntüsü 2025-03-21 005846.png';

const MotionGrid = motion.create(Grid);

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with advanced filtering, search capabilities, and a secure payment system.',
    image: ecommerceImage,
    images: [ecommerceImage, ecommerceImage2, ecommerceImage3],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubLink: '#',
    liveLink: '#',
    category: 'web',
    longDescription: `
      A comprehensive e-commerce solution built with modern web technologies.
      Features include:
      • User authentication and authorization
      • Product catalog with advanced filtering
      • Shopping cart functionality
      • Secure payment integration
      • Admin dashboard
      • Real-time inventory management
    `,
  },
];

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Web Applications', value: 'web' },
  { label: 'Mobile Apps', value: 'mobile' },
  { label: 'Desktop Apps', value: 'desktop' },
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'all' || project.category === selectedCategory
  );

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

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
          My Projects
        </Typography>
      </motion.div>

      <Box sx={{ mb: 6 }}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'primary.main',
              height: 3,
            },
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 500,
            },
          }}
        >
          {categories.map((category) => (
            <Tab
              key={category.value}
              label={category.label}
              value={category.value}
            />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.title}>
              <MotionGrid
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    },
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                      sx={{ mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'primary.light',
                            color: 'white',
                            '&:hover': {
                              bgcolor: 'primary.main',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      sx={{ mr: 1 }}
                    >
                      Code
                    </Button>
                    <Button
                      size="small"
                      startIcon={<LaunchIcon />}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </MotionGrid>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>

      <Dialog
        open={!!selectedProject}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {selectedProject.title}
              <IconButton onClick={handleCloseDialog}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {selectedProject.images?.map((img, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={img}
                    alt={`${selectedProject.title} - Görüntü ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 1,
                      boxShadow: 1,
                    }}
                  />
                ))}
              </Box>
              <Typography variant="body1" paragraph sx={{ mt: 3 }}>
                {selectedProject.longDescription}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {selectedProject.technologies.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    sx={{
                      bgcolor: 'primary.light',
                      color: 'white',
                    }}
                  />
                ))}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button
                startIcon={<GitHubIcon />}
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </Button>
              <Button
                startIcon={<LaunchIcon />}
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
              >
                Live Demo
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
}

export default Projects; 