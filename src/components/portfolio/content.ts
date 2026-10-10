// Replace null values only when Yog supplies the real URLs.
export const profile = {
  email: 'yogjainj@gmail.com',
  github: 'https://github.com/coderyog8021',
  linkedin: null as string | null,
  resume: null as string | null,
};
export const navigation = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];
export const skillGroups = [
  { title: 'Programming and Data', skills: ['Python', 'SQL', 'Pandas', 'NumPy'] },
  { title: 'AI and Machine Learning', skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing (NLP)', 'Scikit-learn', 'TensorFlow', 'PyTorch'] },
  { title: 'Data Analytics and Development', skills: ['Data Science', 'Power BI', 'Tableau', 'Flask', 'Streamlit', 'SQLite'] },
];
export const projects = [
  { title: 'Fake News Detection System', category: 'Machine learning · Classification', technologies: ['Python', 'OpenCV', 'Deep Learning', 'SQLite'], description: 'A machine-learning project focused on detecting potentially misleading news content through automated analysis. Designed to demonstrate AI-based classification and data handling.', github: null as string | null, demo: null as string | null, art: 'news' },
  { title: 'AI-Powered Resume Screening System', category: 'Natural language processing', technologies: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn', 'Flask'], description: 'An AI-assisted resume screening application that uses natural language processing and machine-learning techniques to help analyze resume information and support candidate screening.', github: null as string | null, demo: null as string | null, art: 'resume' },
  { title: 'Student Performance Prediction System', category: 'Data science · Predictive analytics', technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'], description: 'A predictive analytics application designed to explore student performance patterns using data processing and machine-learning techniques, with an interactive Streamlit interface.', github: null as string | null, demo: null as string | null, art: 'chart' },
];
export const education = [
  { date: '2022 — 2026', title: 'B.Tech CSE (AI/ML)', institution: 'Gyan Ganga Institute of Technology and Science, Jabalpur' },
  { date: '2022', title: 'Higher Secondary', institution: 'MP Board of Secondary Education' },
  { date: '2020', title: 'High School', institution: 'MP Board of Secondary Education' },
];
