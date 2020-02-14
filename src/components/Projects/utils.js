import projects_idealist from 'assets/projects_idealist.png'
import projects_skinTech from 'assets/projects_skinTech.png'
import Projects_pytorch from 'assets/projects_pytorch.png'
import projects_togo from 'assets/projects_togo.png'


const projectsData = [
    {
        image:projects_idealist,
        alt:'Website Idealist',
        title:'Idealist',
        techStack:"ReactJs",
        description:'Idealist is a news platform',
        otherImage : []
    },
    {
        image:projects_skinTech,
        alt:'SkinTech website',
        title:'SkinTech',
        techStack:"Django + Tensorflow",
        description:'SkinTech is skin cancer detector',
        otherImage : []
    },
    {
        image:Projects_pytorch,
        alt:'deep learning research',
        title:'Deep Learning Research',
        techStack:"Pytorch, Deep learning",
        description:'Research Projects: Image Blending',
        otherImage : []
    },
    {
        image:projects_togo,
        alt:'ToGo mobile app',
        title:'ToGo',
        techStack:"ReactNative",
        description:'ToGo is a travel mobile app',
        otherImage : []
    }
]

export default projectsData