import webDev from 'assets/webDev.png';
import electroDev from 'assets/electroDev.png';
import MLDev from 'assets/MLDev.png';

const skills = [
  {
    name: 'HTML, CSS',
    proficiency: 'Proficient',
    value: 90,
  },
  {
    name: 'Javascript',
    proficiency: 'Proficient',
    value: 80,
  },
  {
    name: 'Typescript',
    proficiency: 'Proficient',
    value: 80,
  },
  {
    name: 'React',
    proficiency: 'Proficient',
    value: 80,
  },
  {
    name: 'Redux',
    proficiency: 'Proficient',
    value: 80,
  },
  {
    name: 'NodeJs',
    proficiency: 'Proficient',
    value: 80,
  },
  {
    name: 'Python',
    proficiency: 'Proficient',
    value: 80,
  },
  {
    name: 'Django',
    proficiency: 'Proficient',
    value: 70,
  },
  {
    name: 'Docker',
    proficiency: 'Familiar',
    value: 60,
  },
  {
    name: 'Kubenertes',
    proficiency: 'Familiar',
    value: 60,
  },
];

const skillImages = [
  {
    image: webDev,
    title: 'Frontend & Backend',
    detail: 'React, Redux, Typescript, NodeJs, ExpressJs, Django',
  },
  // {
  //   image: MLDev,
  //   title: 'Data Science',
  //   detail: 'Python, Pytorch, Numpy, Pandas, Matplotlib, Scikit learn',
  // },
  {
    image: MLDev,
    title: 'Devops',
    detail: 'Docker, Kubernetes, Nginx',
  },
  {
    image: electroDev,
    title: 'Electronics',
    detail: 'C/C++ ,Arduino, LabView',
  },
];

export { skills, skillImages };
