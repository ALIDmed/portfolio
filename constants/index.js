import dm from "@/public/dm.png";
import whisper from "@/public/whisper.png";
import indeed from "@/public/indeed.png";
import spam from "@/public/spam.png";
import maps from "@/public/maps.png";
import reddit from "@/public/reddit.png";
import nn from "@/public/nn.png";
import certif1 from "@/public/certif1.png";
import certif2 from "@/public/certif2.png";
import certif3 from "@/public/certif3.png";
import certif4 from "@/public/certif4.png";
import certif5 from "@/public/certif5.png";
import certif6 from "@/public/certif6.png";
import certif7 from "@/public/certif7.png";
import certif8 from "@/public/certif8.png";
import certif9 from "@/public/certif9.png";
import React from "react";
import { LuSchool, LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const projects = [
  {
    title: "Movie Whisper",
    description:
      "Web app that provides movie recommendations using AI-based content-based filtering, and sentiment analysis on movie reviews.",
    tags: [
      "react",
      "tailwind",
      "vite",
      "python",
      "pandas",
      "nltk",
      "scikit-learn",
      "flask",
    ],
    imageUrl: whisper,
  },
  {
    title: "Neural Networks From Scratch",
    description:
      "neural network implementation completely from scratch using only Numpy including Activation Functions, Loss Functions, Backpropagation, Gradient Descent, and optimization techniques.",
    tags: ["python", "numpy"],
    imageUrl: nn,
  },
  {
    title: "Email/SMS Spam Filter",
    description: "An email/SMS spam filter using Naive Bayes and NLP.",
    tags: ["python", "nltk", "scikit-learn", "streamlit", "pandas"],
    imageUrl: spam,
  },
  {
    title: "Google Maps Lead Generation",
    description:
      "Lead Generation tool for collecting business information from Google Maps for B2B deals.",
    tags: ["python", "selenium", "pandas"],
    imageUrl: maps,
  },
  {
    title: "Reddit Video Generator",
    description:
      "Automated Python Reddit short video generator, These short-form videos on TikTok, YouTube and Instagram get MILLIONS of views",
    tags: ["python", "moviepy", "pytube", "selenium", "praw", "TTS"],
    imageUrl: reddit,
  },
  {
    title: "Instagram DM Bot",
    description:
      "Automated Instagram DM bot that takes a list of users and messages them. customizable message and delay time.",
    tags: ["python", "selenium", "pandas"],
    imageUrl: dm,
  },
  {
    title: "Indeed Job Scraper",
    description:
      "Automated Indeed Job scraper that takes a job and location then scrape all the jobs and save them to a CSV file.",
    tags: ["python", "selenium", "pandas"],
    imageUrl: indeed,
  },
];

export const skills = [
  {
    category: "Programming Languages",
    tags: ["Python", "JavaScript", "Java", "C", "PHP"],
  },
  {
    category: "Machine Learning",
    tags: [
      "Scikit-Learn",
      "TensorFlow",
      "NLP",
      "XGBoost",
      "Math and Statistics",
      "Deep Learning",
      "Computer Vision",
    ],
  },
  {
    category: "Data Analysis & Feature Engineering",
    tags: ["Pandas", "Numpy", "Matplotlib", "Seaborn", "Plotly", "Power BI"],
  },
  {
    category: "Database Management",
    tags: ["SQL", "NoSQL"],
  },
  {
    category: "Web Scraping & Data Mining",
    tags: ["Selenium", "Beautiful Soup"],
  },
  {
    category: "Web Dev",
    tags: ["HTML", "CSS", "Tailwind", "React"],
  },
];

export const certifications = [
  {
    imageUrl: certif1,
  },
  {
    imageUrl: certif2,
  },
  {
    imageUrl: certif3,
  },
  {
    imageUrl: certif4,
  },
  {
    imageUrl: certif5,
  },
  {
    imageUrl: certif6,
  },
  {
    imageUrl: certif7,
  },
  {
    imageUrl: certif8,
  },
  {
    imageUrl: certif9,
  },
];

export const education = [
  {
    title: "Baccalaureate",
    issuer: "Abdelkhalek Torres",
    date: "2019",
    icon: React.createElement(LuSchool),
  },
  {
    title: "AI/Software Engineer student",
    issuer: "ENSAM",
    date: "2021-2025",
    icon: React.createElement(LuGraduationCap),
  },
];
