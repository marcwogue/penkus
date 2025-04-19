

const projet = [
    {
        id: 1,
        title: "Projet 1",
        description: "Description du projet 1",
        image: "https://www.wizishop.fr/media/6079aa471a21b91b9474e996/v1/top-sites-monde-wizishop.webp",
        link: "https://projet1.com"
    },
    {
        id: 2,
        title: "Projet 2",
        description: "Description du projet 2",
        image: "https://img.freepik.com/free-vector/flat-design-portfolio-template-design_52683-80880.jpg?semt=ais_hybrid&w=740",
        link: "https://projet2.com"
    },
    {
        id: 3,
        title: "Projet 3",
        description: "Description du projet 3",
        image: "https://www.privateinternetaccess.com/blog/wp-content/uploads/2024/09/Group-11-1024x680.png",
        link: "https://projet3.com"
    }
]

const Projets = () => {
    return (
        <div>
            <h2 className="text-[2rem] text-center underline md:text-[4rem] font-bold">mes projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-8 md:flex-row">
            {projet.map((projet) => (
                <div key={projet.id} className="bg-slate-800 rounded-2xl p-4">
                    <div className="w-[22rem] h-[14rem] overflow-hidden rounded-xl">
                    <img src={projet.image} alt={projet.title} className="w-[22rem] h-[14rem] duration-700 hover:scale-105 object-cover rounded-2xl" />
                    </div>
                    <h3 className="text-xl font-bold">{projet.title}</h3>
                    <p>{projet.description}</p>
                    <a href={projet.link}>Voir le projet</a>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Projets