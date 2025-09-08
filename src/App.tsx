
import './App.css'

function App() {

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111714] dark group/design-root overflow-x-hidden" style={{ fontFamily: "'Space Grotesk', 'Noto Sans', sans-serif" }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#29382f] bg-[#111714]/80 px-10 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-4 text-white">
            <svg className="size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fill-rule="evenodd"></path>
            </svg>
            <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">CodeSprint</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal transition-colors hover:text-[#1dc962]" href="#about">About</a>
              <a className="text-white text-sm font-medium leading-normal transition-colors hover:text-[#1dc962]" href="#agenda">Agenda</a>
              <a className="text-white text-sm font-medium leading-normal transition-colors hover:text-[#1dc962]" href="#rules">Rules</a>
              <a className="text-white text-sm font-medium leading-normal transition-colors hover:text-[#1dc962]" href="#prizes">Prizes</a>
              <a className="text-white text-sm font-medium leading-normal transition-colors hover:text-[#1dc962]" href="#community">Community</a>
              <a className="text-white text-sm font-medium leading-normal transition-colors hover:text-[#1dc962]" href="#sponsors">Sponsors</a>
              <a className="text-white text-sm font-medium leading-normal transition-colors hover:text-[#1dc962]" href="#faq">FAQ</a>
            </nav>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1dc962] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
              <span className="truncate">Register</span>
            </button>
          </div>
        </header>
        <main className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div className="flex min-h-[480px] flex-col gap-6 rounded-lg bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center p-8" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuUjh1Z9Qz7VSz_smcszyLyHI99aHHNGM-GPXIzWbk9NCx32h4G_S6bHjGXldGw_V1j0ux8sc5lELhUTDvfasjVYcXiQELLAEb9WLTbYXSKcng23DYKUAOgkzweynH8xCa2LdnvCTjWMZIi9PB1DewypkudCCx4-v5y_yRj1hSB3QM4jXnCKElZFM-QRluT-wVz7nn8TQdZobG7Y_hHqoi87qhKwwl3J-Kedg1wHiKaIo5FCEPbYgX2iWYLhkpVXVNnQ9dQ-NHoXBq")' }}>
                  <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">CodeSprint 2024</h1>
                    <h2 className="text-gray-300 text-lg font-normal leading-normal @[480px]:text-xl @[480px]:font-normal @[480px]:leading-normal max-w-2xl">
                      Join us for a 48-hour coding marathon where innovation meets collaboration. Build, learn, and compete for exciting prizes.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-[#1dc962] text-[#111714] text-base font-bold leading-normal tracking-[0.015em] @[480px]:text-lg @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-transform hover:scale-105">
                    <span className="truncate">Register Now</span>
                  </button>
                </div>
              </div>
            </div>
            <section className="scroll-mt-20 px-4 py-16" id="about">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">About the Event</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center gap-4 rounded-lg bg-[#1a241f] p-6">
                  <span className="material-symbols-outlined text-4xl text-[#1dc962]">emoji_objects</span>
                  <h3 className="text-white text-xl font-bold">Theme</h3>
                  <p className="text-[#9eb7a8] text-sm leading-normal">Innovate for a Sustainable Future</p>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-lg bg-[#1a241f] p-6">
                  <span className="material-symbols-outlined text-4xl text-[#1dc962]">location_on</span>
                  <h3 className="text-white text-xl font-bold">Place</h3>
                  <p className="text-[#9eb7a8] text-sm leading-normal">Online</p>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-lg bg-[#1a241f] p-6">
                  <span className="material-symbols-outlined text-4xl text-[#1dc962]">calendar_month</span>
                  <h3 className="text-white text-xl font-bold">Date</h3>
                  <p className="text-[#9eb7a8] text-sm leading-normal">October 25-27, 2024</p>
                </div>
              </div>
            </section>
            <section className="scroll-mt-20 px-4 py-16" id="agenda">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">Hackathon Agenda</h2>
              <div className="relative border-l-2 border-dashed border-[#3d5245] pl-8">
                <div className="absolute -left-[10px] top-0 h-4 w-4 rounded-full bg-[#1dc962]"></div>
                <div className="mb-12">
                  <h3 className="text-white text-xl font-bold leading-tight">Pre-Hackathon Bootcamps</h3>
                  <p className="text-[#9eb7a8] text-sm font-normal leading-normal mt-2">October 1-15, 2024</p>
                  <p className="text-white text-base mt-4">Join our optional training bootcamps to sharpen your skills in web development, AI, and project management. Sessions are online and free for all registered participants.</p>
                </div>
                <div className="absolute -left-[10px] top-1/3 h-4 w-4 rounded-full bg-[#1dc962] -translate-y-1/2"></div>
                <div className="mb-12">
                  <h3 className="text-white text-xl font-bold leading-tight">Registration &amp; Team Formation</h3>
                  <p className="text-[#9eb7a8] text-sm font-normal leading-normal mt-2">Deadline: October 20, 2024</p>
                  <p className="text-white text-base mt-4">Register individually or as a team. Use our Discord channel to find teammates and brainstorm ideas. Final teams must be formed by the deadline.</p>
                </div>
                <div className="absolute -left-[10px] top-2/3 h-4 w-4 rounded-full bg-[#1dc962] -translate-y-1/2"></div>
                <div className="mb-12">
                  <h3 className="text-white text-xl font-bold leading-tight">Hackathon Kick-off</h3>
                  <p className="text-[#9eb7a8] text-sm font-normal leading-normal mt-2">October 25, 2024 - 6:00 PM</p>
                  <p className="text-white text-base mt-4">The event officially begins with an opening ceremony, theme reveal, and keynote speech. Coding starts immediately after.</p>
                </div>
                <div className="absolute -left-[10px] bottom-0 h-4 w-4 rounded-full bg-[#1dc962]"></div>
                <div>
                  <h3 className="text-white text-xl font-bold leading-tight">Project Submissions &amp; Judging</h3>
                  <p className="text-[#9eb7a8] text-sm font-normal leading-normal mt-2">October 27, 2024 - 6:00 PM</p>
                  <p className="text-white text-base mt-4">Submit your final projects. Judging will commence, followed by a closing ceremony and winner announcements.</p>
                </div>
              </div>
            </section>
            <section className="scroll-mt-20 px-4 py-16" id="rules">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">Rules</h2>
              <ul className="list-disc list-inside space-y-4 text-white text-base font-normal leading-normal marker:text-[#1dc962]">
                <li>Participants must be at least 18 years old.</li>
                <li>Teams can have up to 4 members.</li>
                <li>Projects must be submitted by the deadline.</li>
                <li>All code must be original and adhere to the theme.</li>
                <li>Judging criteria include innovation, functionality, design, and impact.</li>
              </ul>
            </section>
            <section className="scroll-mt-20 px-4 py-16" id="prizes">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">Prizes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4 rounded-lg border border-[#3d5245] bg-[#1a241f] p-6 text-center transition-all hover:border-[#1dc962] hover:shadow-lg hover:shadow-[#1dc962]/20">
                  <div className="w-full h-40 bg-center bg-no-repeat bg-cover rounded-lg mb-4" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBpDSYFWtd4WWTTfWr7G7k2M6HNLgoDNwluobhWUm_gym7KSDUWUY_Twy3WubuXq9Z8YLwrubMQbBI2We91TkrVHxGgsx6uaqf57rdjJE--XFLy91SchlOIUzjjfIqIIukvBgrqecMV_BjkHTXLI7S199VDKh3h6VMWo_3fKEg9d4Q4Tmix2nQj5zr82NU2TzHJyC55eGYo2_OWWLLwGG5RrxiUyu0STsOPwc3RVUDa9lhjoi2lW-vAuG0QWwWQXP00XTbAvHB1McC")' }}></div>
                  <h3 className="text-white text-xl font-bold leading-tight">Grand Prize</h3>
                  <p className="text-[#9eb7a8] text-sm font-normal leading-normal">A trip to a tech conference of your choice, up to $5000 in value.</p>
                </div>
                <div className="flex flex-col gap-4 rounded-lg border border-[#3d5245] bg-[#1a241f] p-6 text-center transition-all hover:border-[#1dc962] hover:shadow-lg hover:shadow-[#1dc962]/20">
                  <div className="w-full h-40 bg-center bg-no-repeat bg-cover rounded-lg mb-4" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_h1N148PJ64LQJd6HWDCQAMlimE6Y4RoAJUk8haa_AsjDiCHkb5Ho--fDwjqaPzCh7aVyiwQBTYAj-ePLh5m0V8xvsU4N-nvyw17TNDJ2IiYWsN53ZN5qDYq9CuI3stEvnjr3xG6w2_fS1Ihqy4EdZgu3jBJ40G9LeBmHuDjXOnu9sMBmvOn9lF8txUw9B6z3dXhgkvwhi_he4gR4dd9kOv8CImvqL_aa3KrLQdhnQMvKvscxBZ3gs-uSOhYKkzU6o8-u9vlvGkRa")' }}></div>
                  <h3 className="text-white text-xl font-bold leading-tight">Second Prize</h3>
                  <p className="text-[#9eb7a8] text-sm font-normal leading-normal">A set of high-end tech gadgets, including a laptop and noise-canceling headphones.</p>
                </div>
                <div className="flex flex-col gap-4 rounded-lg border border-[#3d5245] bg-[#1a241f] p-6 text-center transition-all hover:border-[#1dc962] hover:shadow-lg hover:shadow-[#1dc962]/20">
                  <div className="w-full h-40 bg-center bg-no-repeat bg-cover rounded-lg mb-4" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAe9_jBdnGwGQWaAD-nYesxs72_Ovv3q0WsCXKEZJFEmn7uzj9rAT9qhe1837tnSeFklyV1dYg3TKlyj1Ei1mzV3OaVO4CgLe7cv6I9JtxMS98qtMS3cFQpG_IhD3n-CrNdeioM0DlUMtj1r4L-qqQxsZzaN7Ynt1p9ZCZUmCSmYvwysEQACLtZz1gz-HL-SCE26nbZBssCKNqyy_O9TGgoF216C1Lszka5QsvmnsM6vMsw2DkmQ0Wm18pbLJE9WzzPWSpEk4D173lf")' }}></div>
                  <h3 className="text-white text-xl font-bold leading-tight">Third Prize</h3>
                  <p className="text-[#9eb7a8] text-sm font-normal leading-normal">Gift cards to popular tech stores, totaling $1000.</p>
                </div>
              </div>
            </section>
            <section className="scroll-mt-20 px-4 py-16" id="community">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">Community Organizers</h2>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <img alt="Community Logo 1" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoNcyMDv1lZM02TjBpI7blyhXJxAxWGY99-MQC5hhLZTZYSB_RBLTFuTfkLrBt5D_RUaV-TOJlsgnpEA9QEyTMxKMYd1A1rohIW5uOZNVZscFRHpAAB-Nm8_50iCpYOzn54ePZcwBjMJ8KoG45fnPA3Wb8VPKk7eu4GnrAeF9h7hte2xV7_prT0ZU3ZqbkM0SQTDiWc0MdhWjoQ39MaZtrotpCi6o7oA9jgLk51DF1eo6W5vED-081wfHDaW1xVtZJnmlwBQZH6LgB" />
                <img alt="Community Logo 2" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-KSwpiL-C6tDrCnOaU67W6b58ptkH5nZVN217FKC7UGZqCWeUT38LTYOfwQhRPyAzQJJ1DWWCfDEqkM3FqGKIwU6K21swaMqcAFXCvrCWVWQVeBNxORh_sUIPqFRdpfuP7-bk3YxjYg1j9p7EY5dJKsXfkf8Yx-R9tk8QIIdTKtI-Otb6llBOUBXT0xbKMFm0fQOwcSzkyf0NDcg-mFq4_5PLatBdrwYFy-XZOo4AC6eJOpQdUfxKGo8HiJ74A_EfCL8WcGhn6NZb" />
                <img alt="Community Logo 3" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQjNb38rICHE3nigh0SxFyo5eAe-sMXL29Lv1bfqez-QWCHpeFtnKTpEcTMa3rff2RU-iaELZY0Zezv_G0DXzizHchpr85RlLLsiaFWMko7gJzJPMtIMuiFzI4p6GCmEOqM5Ubm0PB5103cNE8rWN5TaZ3HMCggHea9ulhNN9C9vqh3UC7s7aRQsy4zTAwGuwbBikGB6e3NyhDDtsIpPcYJiizHeN7Y2ktHfw_Fv9W9IkFAtNQi0JM747tipv0Dcy0jUKPR16f-Y3B" />
                <img alt="Community Logo 4" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZMKd18groxOQaepFI07zuKh2RbHPx4MjirrJruf5CZUelkv5oUrO6_k4-6ZJnoGjL0KBGekTGkompu-HzbrdJ92xqYIRxBnq3fVkNhehGvrZbR6mahx1rTa_ZpIWFFd4-cD2kObEO1VCtss9nz_R3NVvMOSy0r4YEzvS06DvUoz1RvkTI4c5EnVgVrLNPRUJy0_UaX3f5YAXWz7OIyi7_AYQ8BPCtsIR8ZjxS90ZpQV_WjDBTJK7TzRsTEsbLkUc4qqB0ViwtLwfl" />
                <img alt="Community Logo 5" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuMX_CDbA3oUW_3ozt7Nsjo2G38cQCUMSudbT4yT1d8BqIwuufirHIo47pRR6td-RV6p-FdIqJvv5hpne_YJHu28DPhvlrJQfgXrHvmInX4hPSzqDZBpe3Xlyzz0OzeSn66m4u-4QVvG7l3t9OI5FyUKebpaTeT-N2ClOuwuHcDsufhH-RjbR18oU5R8CMmr2Io15pEQ8FSoI2KeZcZyFZGpQbRxqj-_Y-mLpAmx_ZOh9nIzleVsqAQ_mfFEA0hR496IMyBnngGD3f" />
              </div>
            </section>
            <section className="scroll-mt-20 px-4 py-16" id="sponsors">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">Sponsors</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center p-4">
                  <div className="w-full h-24 bg-contain bg-center bg-no-repeat grayscale transition-all hover:grayscale-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCh4iRhEoaCdXnc-BzQi5Qya8kpYM3KvE47eTwbjdJeLQuEdY11OHLmGNe9e1HM8ie4ySbBzqgBzq-oIY_N5D7qNcw2fUxzYd_t_9jXO1yfloAHfz1k0IdrsbX3ioFAdlRCCvj23XBEnzKz94g8ggCD7aduYoUFr1o6a0H8KCQcOXwyBSQpy2FzJAE_p8oGfh_6k4BzOBkJM3JU0dvlG_ZX_zf6lgf0ASEIxhvkO1XZCqzYaMFkbc4sCrm5RZdZV-ZXa31DsDf654Cq")' }}></div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <div className="w-full h-24 bg-contain bg-center bg-no-repeat grayscale transition-all hover:grayscale-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4bR4cPe-qSvuj9SvlF7lgWrYN-osr0cVqr5FBRTRNc3Fp8mta0ejIdGPDi7epZJ_I8LZiTz_DtCh3Uk89y68UbFFSe8-4_TCJaVFRXhOty6yOpynkl4sV7yICOwuoIuCbzkgfaV82Jur35QqCsWl9mm0L8MvCEJqbbgQZmE3op6SlrZbFjHyrBkZTnlWc07qTLQZTCQeee3tExNjHqaYUTjfbPF0KlejY7aa2wNktE_v9bsVSPycHK-x131GLenDTS-OyCFd5mTqs")' }}></div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <div className="w-full h-24 bg-contain bg-center bg-no-repeat grayscale transition-all hover:grayscale-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkSxsEM0p6nQ2A8SW_E7Vn4CMIrofNRs5tzfu4I6RfYpmDWvZlITuahsjRGS3uJXeciF3axIwuK-PZyetM4raxzHaNHzRgde2zGE3DSYUrQ7ww23MFYclDe2OIM-H2fRrzdoKnGkM7yeVsBcmFkEeHvAMgz-emgtp-eoPtv_cLj-KpIkykW2-BZ8xFfJoFwfz_f4yaD00KpnoDBDvcfrknpyrzw7nvBnXh5g_qx6ev0w-tb4Mn0Yk-lchRyFVEOLmzOAJbcXbQ6MCB")' }}></div>
                </div>
              </div>
            </section>
            <section className="scroll-mt-20 px-4 py-16" id="faq">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">Frequently Asked Questions</h2>
              <div className="flex flex-col gap-4">
                <details className="rounded-lg border border-[#3d5245] bg-[#1a241f] p-4 group" open>
                  <summary className="flex cursor-pointer items-center justify-between gap-6 text-white text-base font-medium leading-normal">
                    What is the theme of the hackathon?
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <p className="text-[#9eb7a8] text-sm font-normal leading-normal mt-4">The theme is 'Innovate for a Sustainable Future'. We encourage projects that address environmental or social sustainability challenges.</p>
                </details>
                <details className="rounded-lg border border-[#3d5245] bg-[#1a241f] p-4 group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 text-white text-base font-medium leading-normal">
                    What are the judging criteria?
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <p className="text-[#9eb7a8] text-sm font-normal leading-normal mt-4">Projects will be judged on innovation, functionality, design, impact, and adherence to the theme. A detailed rubric will be provided to all participants.</p>
                </details>
                <details className="rounded-lg border border-[#3d5245] bg-[#1a241f] p-4 group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 text-white text-base font-medium leading-normal">
                    How can I contact the organizers?
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <p className="text-[#9eb7a8] text-sm font-normal leading-normal mt-4">You can reach out to us via the contact form below or join our Discord server for real-time communication.</p>
                </details>
              </div>
            </section>
            <section className="scroll-mt-20 px-4 py-16 text-center">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">Ready to Innovate?</h2>
              <p className="text-[#9eb7a8] text-lg mb-8">Join the brightest minds and create something amazing.</p>
              <a className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-[#1dc962] text-[#111714] text-lg font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105" href="#">
                <span className="truncate">Register for CodeSprint 2024</span>
              </a>
            </section>
          </div>
        </main>
        <footer className="border-t border-solid border-t-[#29382f]">
          <div className="mx-auto max-w-[960px] px-5 py-10">
            <div className="flex flex-col items-center justify-center gap-6 text-center">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <a className="text-[#9eb7a8] text-base font-normal leading-normal transition-colors hover:text-[#1dc962]" href="#">Privacy Policy</a>
                <a className="text-[#9eb7a8] text-base font-normal leading-normal transition-colors hover:text-[#1dc962]" href="#">Terms of Service</a>
              </div>
              <div className="flex justify-center gap-6">
                <a className="text-[#9eb7a8] transition-colors hover:text-[#1dc962]" href="#">
                  <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                  </svg>
                </a>
                <a className="text-[#9eb7a8] transition-colors hover:text-[#1dc962]" href="#">
                  <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                  </svg>
                </a>
                <a className="text-[#9eb7a8] transition-colors hover:text-[#1dc962]" href="#">
                  <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                  </svg>
                </a>
              </div>
              <p className="text-[#9eb7a8] text-sm font-normal leading-normal">© 2024 CodeSprint. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
