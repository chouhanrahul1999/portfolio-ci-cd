

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex font-medium text-[14px] md:text-[16px] text-white justify gap-4 md:gap-8 items-center bg-linear-to-r from-[#04071D] to-[#0C0E23] rounded-xl md:rounded-2xl border border-[#11152C] px-6 md:px-16 md:py-5 py-3">
        <a href="#about" onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-[#CBACF9] transition-all duration-300 hover:scale-110 hover:font-semibold">About</a>
        <a href="#projects" onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-[#CBACF9] transition-all duration-300 hover:scale-110 hover:font-semibold">Projects</a>
        <a href="#experience" onClick={() => scrollToSection('experience')} className="cursor-pointer hover:text-[#CBACF9] transition-all duration-300 hover:scale-110 hover:font-semibold">Experience</a>
        <a href="#contact" onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-[#CBACF9] transition-all duration-300 hover:scale-110 hover:font-semibold">Contact</a>
    </div>
  )
}

export default Navbar;