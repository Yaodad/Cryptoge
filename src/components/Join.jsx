import { join } from "../constant"

const Join = () => {
  return (
    <section id="join">
      <div className="flex flex-col justify-center items-center font-space sm:leading-normal leading-tight mt-[150px] text-center">
        <h1 className="sm:text-[100px] text-[70px] font-extrabold font gradient-brand-primary gradient-text">{join.text1}</h1>
        <h1 className="sm:text-[100px] text-[70px] font-extrabold bg-primary text-secondary px-4">{join.text2}</h1>
        <p className="mt-8 text-2xl text-primary">{join.paragraph}</p>
        <a href="https://discord.com/" target="_blank" className="px-[40px] py-[16px] my-16 text-white font-extrabold text-2xl gradient-brand-primary rounded-full transition-all ease-in-out delay-150 hover:opacity-80">{join.btn}</a>
      </div>
    </section>
  )
}

export default Join