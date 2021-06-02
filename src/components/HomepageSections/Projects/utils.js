// import projects_idealist from 'assets/projects/projects_idealist.png';
// import projects_idealist2 from 'assets/projects/projects_idealist2.png';
// import projects_idealist3 from 'assets/projects/projects_idealist3.png';

// import projects_codeMaster from 'assets/projects/projects_codeMaster.png';
// import projects_codeMaster2 from 'assets/projects/projects_codeMaster2.png';
// import projects_codeMaster3 from 'assets/projects/projects_codeMaster3.png';

// import projects_skinTech from 'assets/projects/projects_skinTech.png';
// import projects_skinTech2 from 'assets/projects/projects_skinTech2.png';
// import projects_skinTech3 from 'assets/projects/projects_skinTech3.png';

// import Projects_pytorch from 'assets/projects/projects_pytorch.png';

// import projects_togo from 'assets/projects/projects_togo.png';
// import projects_togo2 from 'assets/projects/projects_togo2.png';
// import projects_togo3 from 'assets/projects/projects_togo3.png';
// import projects_togo4 from 'assets/projects/projects_togo4.png';

// import projects_myblog from 'assets/projects/projects_myblog.png';
// import projects_myblog2 from 'assets/projects/projects_myblog2.png';
// import projects_myblog3 from 'assets/projects/projects_myblog3.png';
// import projects_myblog4 from 'assets/projects/projects_myblog4.png';

// import projects_drumMachine from 'assets/projects/projects_drumMachine.png';
// import projects_markdownPreviewer from 'assets/projects/projects_markdownPreviewer.png';
// import projects_memeGenerator from 'assets/projects/projects_memeGenerator.png';
// import projects_pomodoroClock from 'assets/projects/projects_pomodoroClock.png';
// import projects_quoteGenerator from 'assets/projects/projects_quoteGenerator.png';

// import projects_reduxtagram from 'assets/projects/projects_reduxtagram.png';
// import projects_reduxtagram2 from 'assets/projects/projects_reduxtagram2.png';
// import projects_reduxtagram3 from 'assets/projects/projects_reduxtagram3.png';

// import projects_capture from 'assets/projects/projects_capture.png';
// import projects_capture2 from 'assets/projects/projects_capture2.png';
// import projects_capture3 from 'assets/projects/projects_capture3.png';

/*
{
        image:<sourceImage>.
        alt:<imageAlternative>,
        title:<projectTitle>,
        techStack:<projectTechStack, ex: React + NodeJs>,
        description:[ <descriptionParagprah>],
        link:<projectDemoLink>,
        sourceCode:<sourceCodeLink>,
        otherImage : [
            {
                image:<sourceImage>.
                alt:<imageAlternative>,
            },
        ],
        
    },
*/

const projectsData = [
  {
    image:
      'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651368/vegan-recipe-app/andreas-website/projects/projects_codeMaster_oqbwcj.png',
    alt: 'Website CodeMaster',
    title: 'codeMaster',
    techStack: 'React',
    description: [
      'codeMaster is an online programming course. There are different kind of tracks available such as front end track, back end track, and data science track',
    ],
    link: 'https://andreas-sujono.github.io/codeMaster',
    sourceCode: 'https://github.com/Andreas-Sujono/codeMaster',
    otherImage: [
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651368/vegan-recipe-app/andreas-website/projects/projects_codeMaster2_vlkjut.png',
        alt: 'Website CodeMaster',
      },
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651368/vegan-recipe-app/andreas-website/projects/projects_codeMaster3_kug94f.png',
        alt: 'Website CodeMaster',
      },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651369/vegan-recipe-app/andreas-website/projects/projects_idealist_rq2jjb.png',
    alt: 'Website Idealist',
    title: 'Idealist',
    techStack: 'React + NodeJs',
    description: [
      'Idealist is an online news platform, it allows user to signup and login and create post to share their experience or knowledge.',
      'Other features including user comments, news admin that allows user to update/delete their own post.',
    ],
    link: 'https://andreas-sujono.github.io/ideaList',
    sourceCode: 'https://github.com/Andreas-Sujono/ideaList',
    otherImage: [
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651369/vegan-recipe-app/andreas-website/projects/projects_idealist2_qmaoto.png',
        alt: 'idealist2',
      },
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651369/vegan-recipe-app/andreas-website/projects/projects_idealist3_h3jwvh.png',
        alt: 'idealist3',
      },
    ],
  },

  {
    image:
      'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651371/vegan-recipe-app/andreas-website/projects/projects_skinTech_rikbrd.png',
    alt: 'SkinTech website',
    title: 'SkinTech',
    techStack: 'Django + Tensorflow',
    description: [
      'SkinTech is skin cancer detector, it use machine learning to classify whether skin image is consider a malignant or benign cancer.',
      'Future improvement: Add chat for doctor consultation, seperate page for doctor and patient',
    ],
    sourceCode: 'https://github.com/Andreas-Sujono/skinTech',
    otherImage: [
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651371/vegan-recipe-app/andreas-website/projects/projects_skinTech2_uculws.png',
        alt: 'skinTech2',
      },
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651371/vegan-recipe-app/andreas-website/projects/projects_skinTech3_lqiupn.png',
        alt: 'skinTech3',
      },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651370/vegan-recipe-app/andreas-website/projects/projects_pytorch_th8ufb.png',
    alt: 'deep learning research',
    title: 'Deep Learning Research',
    techStack: 'Pytorch',
    description: [
      'Research Projects: Image Blending with poisson and style refinement',
    ],
    sourceCode: 'https://github.com/Andreas-Sujono/Deep_Image_Blending',
    otherImage: [],
  },
  {
    image:
      'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651371/vegan-recipe-app/andreas-website/projects/projects_togo_jvni5n.png',
    alt: 'ToGo mobile app',
    title: 'ToGo',
    techStack: 'ReactNative',
    description: [
      'ToGo is a travel mobile app, it allows user to search nearby restaurant',
    ],
    sourceCode: 'https://github.com/Andreas-Sujono/TOGO-Travel-App',
    otherImage: [
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651371/vegan-recipe-app/andreas-website/projects/projects_togo2_hwwc3p.png',
        alt: 'ToGo2',
      },
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651371/vegan-recipe-app/andreas-website/projects/projects_togo3_xo9ysu.png',
        alt: 'ToGo3',
      },
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651371/vegan-recipe-app/andreas-website/projects/projects_togo4_qua9wl.png',
        alt: 'ToGo4',
      },
    ],
  },

  {
    image:
      'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651370/vegan-recipe-app/andreas-website/projects/projects_myblog_txdzka.png',
    alt: 'MyBlog website',
    title: 'myBlog',
    techStack: 'Django',
    description: ['Personal Blog website '],
    sourceCode: 'https://gitlab.com/AndreasSujono/myblog',
    otherImage: [
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651370/vegan-recipe-app/andreas-website/projects/projects_myblog2_hpmbxe.png',
        alt: 'MyBlog website',
      },
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651370/vegan-recipe-app/andreas-website/projects/projects_myblog3_qthsjt.png',
        alt: 'MyBlog website',
      },
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651370/vegan-recipe-app/andreas-website/projects/projects_myblog4_kpszzy.png',
        alt: 'MyBlog website',
      },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651370/vegan-recipe-app/andreas-website/projects/projects_reduxtagram_urom19.png',
    alt: 'reduxtagram',
    title: 'Reduxtagram',
    techStack: 'React + Redux',
    description: [
      'Reduxtagram is an instagram clone where people can comment on other people images. ',
      'future improvement: crate sign in and sign up mechanism, let user to upload images,',
    ],
    sourceCode: 'https://github.com/Andreas-Sujono/reduxtagram',
    link: 'https://andreas-sujono.github.io/reduxtagram',
    otherImage: [
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651370/vegan-recipe-app/andreas-website/projects/projects_reduxtagram2_dpfttw.png',
        alt: 'Reduxtagram',
      },
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651370/vegan-recipe-app/andreas-website/projects/projects_reduxtagram3_vjkrvc.png',
        alt: 'Reduxtagram',
      },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651368/vegan-recipe-app/andreas-website/projects/projects_capture_nqugnw.png',
    alt: 'projects_capture',
    title: 'Capture',
    techStack: 'React + Firebase',
    description: ['Capture is an ecommerce website'],
    sourceCode: 'https://github.com/Andreas-Sujono/Capture',
    link: 'https://andreas-sujono.github.io/Capture/',
    otherImage: [
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651368/vegan-recipe-app/andreas-website/projects/projects_capture2_rrjzoh.png',
        alt: 'Capture',
      },
      {
        image:
          'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651368/vegan-recipe-app/andreas-website/projects/projects_capture3_cswzwb.png',
        alt: 'Capture',
      },
    ],
  },

  {
    image:
      'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651369/vegan-recipe-app/andreas-website/projects/projects_markdownPreviewer_ywdr6s.png',
    alt: 'MarkdownPreviewer website',
    title: 'MarkdownPreviewer',
    techStack: 'React',
    description: ['MarkdownPreviewer'],
    otherImage: [],
  },
  {
    image:
      'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651370/vegan-recipe-app/andreas-website/projects/projects_pomodoroClock_bbiew0.png',
    alt: 'Pomodoro Clock',
    title: 'Pomodoro CLock',
    techStack: 'React',
    description: ['PomodoroClock'],
    sourceCode: 'https://github.com/Andreas-Sujono/pomodoro-clock',
    link: 'https://andreas-sujono.github.io/pomodoro-clock',
    otherImage: [],
  },
  {
    image:
      'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651369/vegan-recipe-app/andreas-website/projects/projects_drumMachine_dugyjy.png',
    alt: 'drum Machine',
    title: 'Drum Machine',
    techStack: 'React',
    description: ['Drum Machine'],
    sourceCode: 'https://github.com/Andreas-Sujono/drum-machine',
    link: 'https://andreas-sujono.github.io/drum-machine',
    otherImage: [],
  },
  {
    image:
      'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651369/vegan-recipe-app/andreas-website/projects/projects_memeGenerator_ohppwl.png',
    alt: 'Meme Generator',
    title: 'Meme Generator',
    techStack: 'React',
    description: ['Meme Generator'],
    sourceCode: 'https://github.com/Andreas-Sujono/meme-generator',
    link: 'https://andreas-sujono.github.io/meme-generator',
    otherImage: [],
  },
  {
    image:
      'https://res.cloudinary.com/dx6juznlw/image/upload/v1622651370/vegan-recipe-app/andreas-website/projects/projects_quoteGenerator_jdcsdt.png',
    alt: 'Quote Generator',
    title: 'Quote Generator',
    techStack: 'React',
    description: ['random Quote Generator'],
    sourceCode: 'https://github.com/Andreas-Sujono/random-quote-machine',
    link: 'https://andreas-sujono.github.io/random-quote-machine',
    otherImage: [],
  },
];

export default projectsData;
