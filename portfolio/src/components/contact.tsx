

const Contact = () => {
        return (
        <div className="my-[1vw]  mx-[4vw]" id="contact">
            <h2 className="text-[2rem] text-center underline md:text-[4rem] font-bold">contactez moi</h2>
            <form action="" className="form-control md:w-[50vw] text-success items-center bg-slate-600 rounded-2xl md:mx-[15vw]  w-[80vw] space-y-6 place-items-center p-10 ">
                <div className="form-control">
                    <label htmlFor="name" className="label">name</label><br />
                    <input type="text" name="name" placeholder="name" className=" text-black input bg-transparent input-bordered" />
                </div>
                <div className="form-control">
                    <label htmlFor="email" className="label">email</label><br />
                    <input type="email" name="email" placeholder="email" className=" text-black input bg-transparent input-bordered" />
                </div>
                <div className="form-control">
                    <label htmlFor="subject" className="label">subject</label><br />
                    <input type="text"  name="subject" placeholder="subject" className=" text-black input bg-transparent input-bordered"/>
                </div>
                <div className="form-control">
                    <label htmlFor="message" className="label">message</label><br />    
                    <textarea placeholder="message" className="textarea scale-[1.20] mt-3 bg-transparent textarea-bordered"></textarea>
                </div>
                <button type="submit" className="p-4 text-black bg-primary w-full md:w-fit rounded-xl ">Envoyer</button>
            </form>
        </div>
    )
}

export default Contact