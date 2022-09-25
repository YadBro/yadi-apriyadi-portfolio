

export default function AchievementSection() {
  return(
    <>
      <section id="achievement" className="pt-32 pb-32 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">

            <div className="mx-auto text-center mb-14">
              <h4 className="font-semibold text-xl text-primary mb-2">Achievement</h4>
              
              <h2 className="font-bold text-dark text-3xl mb-4 mt-5 sm:text-4xl lg:text-5xl">
                <a href="https://drive.google.com/file/d/1PjHR_70cjQwTjqyR8oawJKlMXCQ6yjCI/view" target="_blank" rel="noreferrer" className="thickness-link">
                  Certificate Graduation Dumbways
                </a>
              </h2>
              <p className="font-medium text-medium text-secondary md:text-lg">Graduation from <a href="https://dumbways.id/" target="_blank" rel="noreferrer" className="text-blue-600">dumbways.id</a> batch 34</p>
              <div className="rounded-md shadow-md overflow-hidden max-w-xl mx-auto">
                <img src="/assets/images/graduation-dumbways.PNG" alt="Roblox Youtubers Indonesia" className="w-full" />
              </div>


              <h2 className="font-bold text-dark text-3xl mb-4 mt-16 sm:text-4xl lg:text-5xl"><a href="https://youtu.be/XgBJLzQGzIM" target="_blank" rel="noreferrer" className="thickness-link">Roblox Youtubers Indonesia Competitions</a></h2>
              <p className="font-medium text-medium text-secondary md:text-lg">2nd place in roblox game parkour competition among youtubers. Hosted by <a href="https://www.youtube.com/c/HafizHafizah" target="_blank" rel="noreferrer" className="text-blue-600">Hafiz & Hafizah</a></p>
              <div className="rounded-md shadow-md overflow-hidden max-w-xl mx-auto">
                <img src="/assets/images/roblox-competitions.png" alt="Roblox Youtubers Indonesia" className="w-full" />
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}