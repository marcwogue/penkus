

const Contact = () => {
        return (
        <div className="my-[1vw]  mx-[4vw]">
            <h2 className="text-[2rem] text-center underline md:text-[4rem] font-bold">contactez moi</h2>
            <form action="" className="form-control md:w-[50vw] items-center bg-slate-800 rounded-2xl md:mx-[15vw]  w-[80vw] space-y-6 place-items-center p-10 ">
                <div className="form-control">
                    <label htmlFor="name" className="label">name</label><br />
                    <input type="text" placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label htmlFor="email" className="label">email</label><br />
                    <input type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label htmlFor="subject" className="label">subject</label><br />
                    <input type="text" placeholder="subject" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label htmlFor="message" className="label">message</label><br />    
                    <textarea placeholder="message" className="textarea w-[17rem] h-[10rem] textarea-bordered"></textarea>
                </div>
                <button type="submit" className="p-4  bg-primary w-full md:w-fit rounded-xl ">Envoyer</button>
            </form>
        </div>
    )
}

export default Contact