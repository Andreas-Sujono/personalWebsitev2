import projects_idealist from 'assets/projects_idealist.png'
import projects_idealist2 from 'assets/projects_idealist2.png'
import projects_idealist3 from 'assets/projects_idealist3.png'

import projects_skinTech from 'assets/projects_skinTech.png'
import projects_skinTech2 from 'assets/projects_skinTech2.png'
import projects_skinTech3 from 'assets/projects_skinTech3.png'

import Projects_pytorch from 'assets/projects_pytorch.png'

import projects_togo from 'assets/projects_togo.png'
import projects_togo2 from 'assets/projects_togo2.png'
import projects_togo3 from 'assets/projects_togo3.png'
import projects_togo4 from 'assets/projects_togo4.png'

import projects_myblog from 'assets/projects_myblog.png'
import projects_myblog2 from 'assets/projects_myblog2.png'
import projects_myblog3 from 'assets/projects_myblog3.png'
import projects_myblog4 from 'assets/projects_myblog4.png'

import projects_drumMachine from 'assets/projects_drumMachine.png'
import projects_markdownPreviewer from 'assets/projects_markdownPreviewer.png'
import projects_memeGenerator from 'assets/projects_memeGenerator.png'
import projects_pomodoroClock from 'assets/projects_pomodoroClock.png'
import projects_quoteGenerator from 'assets/projects_quoteGenerator.png'

import projects_reduxtagram from 'assets/projects_reduxtagram.png'
import projects_reduxtagram2 from 'assets/projects_reduxtagram2.png'
import projects_reduxtagram3 from 'assets/projects_reduxtagram3.png'

import projects_capture from 'assets/projects_capture.png'
import projects_capture2 from 'assets/projects_capture2.png'
import projects_capture3 from 'assets/projects_capture3.png'

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
        image:projects_idealist,
        alt:'Website Idealist',
        title:'Idealist',
        techStack:"React + NodeJs",
        description:['Idealist is an online news platform, it allows user to signup and login \
        and create post to share their experience or knowledge.', 
        'Other features including user comments, news admin that allows user \
        to update/delete their own post.'],
        link:"https://andreas-sujono.github.io/ideaList",
        sourceCode:'https://github.com/Andreas-Sujono/ideaList',
        otherImage : [
            {
                image:projects_idealist2,
                alt:"idealist2"
            },
            {
                image:projects_idealist3,
                alt:"idealist3"
            }
        ],
        
    },
    {
        image:projects_skinTech,
        alt:'SkinTech website',
        title:'SkinTech',
        techStack:"Django + Tensorflow",
        description:['SkinTech is skin cancer detector, it use machine learning to classify whether \
        skin image is consider a malignant or benign cancer.','Future improvement: Add chat for doctor consultation, \
        seperate page for doctor and patient'],
        sourceCode:'https://github.com/Andreas-Sujono/skinTech',
        otherImage : [
            {
                image:projects_skinTech2,
                alt:"skinTech2"
            },
            {
                image:projects_skinTech3,
                alt:"skinTech3"
            }
        ],
    },
    {
        image:Projects_pytorch,
        alt:'deep learning research',
        title:'Deep Learning Research',
        techStack:"Pytorch",
        description:['Research Projects: Image Blending with poisson and style refinement'],
        sourceCode:'https://github.com/Andreas-Sujono/Deep_Image_Blending',
        otherImage : []
    },
    {
        image:projects_togo,
        alt:'ToGo mobile app',
        title:'ToGo',
        techStack:"ReactNative",
        description:['ToGo is a travel mobile app, it allows user to search nearby restaurant',],
        sourceCode:'https://github.com/Andreas-Sujono/TOGO-Travel-App',
        otherImage : [
            {
                image:projects_togo2,
                alt:"ToGo2"
            },
            {
                image:projects_togo3,
                alt:"ToGo3"
            },
            {
                image:projects_togo4,
                alt:"ToGo4"
            },
        ],
    },

    {
        image:projects_myblog,
        alt:'MyBlog website',
        title:'myBlog',
        techStack:"Django",
        description:['Personal Blog website '],
        sourceCode:"https://gitlab.com/AndreasSujono/myblog",
        otherImage : [
            {
                image:projects_myblog2,
                alt:"MyBlog website"
            },
            {
                image:projects_myblog3,
                alt:"MyBlog website"
            },
            {
                image:projects_myblog4,
                alt:"MyBlog website"
            },
        ],

    },
    {
        image:projects_reduxtagram,
        alt:'reduxtagram',
        title:'Reduxtagram',
        techStack:"React + Redux",
        description:['Reduxtagram is an instagram clone where people can comment on other people images. ',
         'future improvement: crate sign in and sign up mechanism, let user to upload images,'],
        sourceCode:'https://github.com/Andreas-Sujono/reduxtagram',
        link:"https://andreas-sujono.github.io/reduxtagram",
        otherImage : [
            {
                image:projects_reduxtagram2,
                alt:"Reduxtagram"
            },
            {
                image:projects_reduxtagram3,
                alt:"Reduxtagram"
            }
        ],
    },
    {
        image:projects_capture,
        alt:'projects_capture',
        title:'Capture',
        techStack:"React + Firebase",
        description:['Capture is an ecommerce website'],
        sourceCode:'https://github.com/Andreas-Sujono/Capture',
        link:"https://andreas-sujono.github.io/Capture/",
        otherImage : [
            {
                image:projects_capture2,
                alt:"Capture"
            },
            {
                image:projects_capture3,
                alt:"Capture"
            }
        ],
    },


    {
        image:projects_markdownPreviewer,
        alt:'MarkdownPreviewer website',
        title:'MarkdownPreviewer',
        techStack:"React",
        description:['MarkdownPreviewer'],
        otherImage : []
    },
    {
        image:projects_pomodoroClock,
        alt:'Pomodoro Clock',
        title:'Pomodoro CLock',
        techStack:"React",
        description:['PomodoroClock'],
        sourceCode:'https://github.com/Andreas-Sujono/pomodoro-clock',
        link:"https://andreas-sujono.github.io/pomodoro-clock",
        otherImage : [],    
    },
    {
        image:projects_drumMachine,
        alt:'drum Machine',
        title:'Drum Machine',
        techStack:"React",
        description:['Drum Machine'],
        sourceCode:'https://github.com/Andreas-Sujono/drum-machine',
        link:"https://andreas-sujono.github.io/drum-machine",
        otherImage : [],
        
    },
    {
        image:projects_memeGenerator,
        alt:'Meme Generator',
        title:'Meme Generator',
        techStack:"React",
        description:['Meme Generator'],
        sourceCode:'https://github.com/Andreas-Sujono/meme-generator',
        link:"https://andreas-sujono.github.io/meme-generator",
        otherImage : [],
        
    },
    {
        image:projects_quoteGenerator,
        alt:'Quote Generator',
        title:'Quote Generator',
        techStack:"React",
        description:['random Quote Generator'],
        sourceCode:'https://github.com/Andreas-Sujono/random-quote-machine',
        link:"https://andreas-sujono.github.io/random-quote-machine",
        otherImage : [],
    },

]

export default projectsData