import htm from '../assets/tech/téléchargement 2.jpeg'
import css from '../assets/tech/téléchargement.png'
import js from '../assets/tech/téléchargement 1.png'
import react from '../assets/tech/téléchargement 2.png'
import tailwind from '../assets/tech/téléchargement 3.png'
import bootstrap from '../assets/tech/téléchargement.jpeg'

    const images = [
        {
            id: 1,
            img: htm,
            title: "html5",
        },
        {
            id: 2,
            img: css,
            title: "css3",
        },
        {
            id: 3,
            img: js,
            title: "js",
        },
        {
            id: 4,
            img: react,
            title: "react",
        },
        {
            id: 5,
            img: tailwind,
            title: "tailwind",
        },
        {
            id: 6,
            img: bootstrap,
            title: "bootstrap",
        },
    ]

    const certif = [
        {
            id: 1,
            title: " data-literacy ",
            description: "je suis certifié data-literacy par coursera , avec l'universite d'oxford et le MIT",
            date: "2025",
        },
        {
            id: 2,
            title: " IOT ",
            description: "je suis certifié IOT par coursera , avec Yonsei University",
            link :'https://coursera.org/share/36b861885d781d2746766088ca052b08',
            date: "2025",
        },
        {
            id: 3,
            title: " Gmail ",
            description: "je suis certifié Gmail par coursera , avec google cloud",
            link :'https://coursera.org/share/256cf7996dcead047da7c021cb5ef0bc',
            date: "2025",
        }
    ]

const Experiences = () => {
    return (
        <div id='experiences'>
            <h2 className="text-[2rem] text-center underline md:text-[4rem] font-bold">expériences</h2>
           <div className="flex flex-col items-center gap-4 md:gap-8 md:flex-row">   
              <div >
                    <h2 className='capitalize mb-4 text-center'> mes competences</h2>
                <div className="grid grid-cols-2 font-bold md:grid-cols-3 gap-4">
                        {images.map((image) => (
                            <div key={image.id} className="flex flex-col items-center">
                                <img src={image.img} alt={image.title} className="w-24 rounded-full border-2 border-slate-400 h-24 md:w-32 md:h-32" />
                                <p className="text-center">{image.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                    <div>
                        <h2 className="grid grid-cols-2 text-center items-center justify-center  font-bold  gap-4"> 
                            mes certifications
                        </h2>
                        <div className="grid grid-cols-1 font-bold md:grid-cols-2 gap-4">
                            {certif.map((cret)=>(
                                <div key={cret.id} className="bg-slate-500 p-4 rounded-2xl">
                                    <h3 className="text-[2rem] md:text-[1.5rem] font-bold">{cret.title}</h3>
                                    <p>{cret.description}</p>
                                    <p>{cret.date}</p>
                                    <a href={cret.link} target="_blank" rel="noopener noreferrer" className=' text-dark btn btn-error'>voir la certification</a>
                                </div>
                            ))}
                        </div>

                    </div>
           
           </div>
        </div>
    )
}

export default Experiences