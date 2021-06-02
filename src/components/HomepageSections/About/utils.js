import webDev from 'assets/webDev.png';
import electroDev from 'assets/electroDev.png';
import MLDev from 'assets/MLDev.png';

const skills = [
  {
    name: 'HTML',
    proficiency: 'Proficient',
    value: 90,
  },
  {
    name: 'CSS',
    proficiency: 'Proficient',
    value: 90,
  },
  {
    name: 'Javascript',
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
    proficiency: 'Familiar',
    value: 70,
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
    name: 'Data',
    proficiency: 'Familiar',
    value: 60,
  },
  {
    name: 'DevOps',
    proficiency: 'Familiar',
    value: 60,
  },
];

const skillImages = [
  {
    image: electroDev,
    title: 'Electronics',
    detail: 'C/C++ ,Arduino, LabView',
  },
  {
    image: webDev,
    title: 'Web Developments',
    detail: 'React, Redux, Django, Flask',
  },
  {
    image: MLDev,
    title: 'Data Science',
    detail: 'Python, Pytorch, Numpy, Pandas, Matplotlib, Scikit learn',
  },
];

export { skills, skillImages };
