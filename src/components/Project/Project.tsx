import React, { useState, useEffect, useRef } from 'react';
import { Container } from "./styles";
import facebookIcon from "../../assets/facebook.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpg'
import product5 from '../../assets/product5.jpg'
import product6 from '../../assets/product6.jpg'
import product7 from '../../assets/product7.jpg'
import Modal from '../Modal/Modal';

// Define TypeScript types
interface ProjectType {
  title: string;
  description: string;
  imageSrc: string;
}

const projects: ProjectType[] = [
  {
    title: 'COLOURFULL TUFF TILE',
    description: 'A full-stack application developed with React and Node.js, featuring a modern UI and RESTful API integration.',
    imageSrc: product1,
  },
  {
    title: 'SIMPLE TUFF TILE',
    description: 'An e-commerce platform built with Vue.js and Firebase, offering real-time product updates and user authentication.',
    imageSrc: product2,
  },
  {
    title: 'SEWAGE PIPE',
    description: 'A personal blog website developed using Gatsby.js and GraphQL, with a focus on performance and SEO optimization.',
    imageSrc: product3,
  },
  {
    title: 'WALL DESIGN',
    description: 'A mobile app built with React Native and Expo, featuring a sleek interface and integration with various APIs for data retrieval.',
    imageSrc: product4,
  },
  {
    title: 'WALL DESIGN',
    description: 'A real-time chat application using WebSocket and Django Channels, providing instant messaging capabilities and notifications.',
    imageSrc: product5,
  },
  {
    title: 'WALL DESIGN',
    description: 'An analytics dashboard built with Angular and Chart.js, offering dynamic visualizations and interactive data reports.',
    imageSrc: product6,
  },
  {
    title: 'WALL DESIGN',
    description: 'An analytics dashboard built with Angular and Chart.js, offering dynamic visualizations and interactive data reports.',
    imageSrc: product7,
  }
];

export function Project() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Set up IntersectionObserver to show tooltip
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTooltipVisible(true);
        } else {
          setTooltipVisible(false);
        }
      });
    }, { threshold: 0.5 });

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Container id="project">
      <h2>Our Products</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation key={index} animateIn="flipInX">
            <div
              className="project"
              ref={el => projectRefs.current[index] = el}
            >

              <div className="body">
                <h3>{project.title}</h3>
              
                <div className="project-image">
                  <img src={project.imageSrc} alt={project.title} />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
      <Modal imageSrc={selectedImage} onClose={closeModal} />
    </Container>
  );
}
