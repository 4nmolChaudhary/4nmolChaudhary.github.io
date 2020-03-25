import React from 'react'
import '../styles/main.css'
import pd from '../images/pd.png'
import { FiGithub } from 'react-icons/fi'
import { FaDribbble } from 'react-icons/fa'

function Projects() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="header-container">
                    <div>
                        <img src={pd} alt="Anmol Chaudhary" className="avatar" />
                    </div>
                </div>
                <div className="text-content">
                    <div className="small-text">
                        Projects and Designs & Blogs
                    </div>
                    <div className="text-content what-items">
                        <div className="item-row">
                            <a href="https://github.com/4nmolChaudhary/A-Better-React-ToDo-APP" className="item projects-link">
                                <div className="item-icon">
                                    <FiGithub size={56} />
                                </div>
                                <div className="item-content">
                                    <div className="item-title card-title">A better React ToDo app </div>
                                    <div className="item-text card-desc">A React to do app with better User Experience.</div>
                                    <div className="item-text">React | CSS </div>
                                </div>
                            </a>
                            <a href="https://github.com/4nmolChaudhary/Weather-Forecast-App" className="item projects-link">
                                <div className="item-icon">
                                    <FiGithub size={56} />
                                </div>
                                <div className="item-content">
                                    <div className="item-title card-title">Weather App</div>
                                    <div className="item-text card-desc">Weather app using OpenWeatherMap.org API.</div>
                                    <div className="item-text">HTML | CSS | JS</div>
                                </div>
                            </a>
                            <a href="https://github.com/4nmolChaudhary/Advanced-Table-with-sort-interaction" className="item projects-link">
                                <div className="item-icon">
                                    <FiGithub size={56} />
                                </div>
                                <div className="item-content">
                                    <div className="item-title card-title">Search interaction in table </div>
                                    <div className="item-text card-desc">Interaction and Filter in a html table while searching throught input filed.</div>
                                    <div className="item-text">HTML | CSS | Javascript</div>
                                </div>
                            </a>
                        </div>
                        <div className="item-row ">
                            <a href="https://dribbble.com/AnmolChaudhary" className="item projects-link">
                                <div className="item-icon">
                                    <FaDribbble size={56} />
                                </div>
                                <div className="item-content">
                                    <div className="item-title card-title">Calender App UI </div>
                                    <div className="item-text card-desc">User Interface design on a Calender App (Dark mode)</div>
                                    <div className="item-text">Adobe XD | UI</div>
                                </div>
                            </a>
                            <a href="https://dribbble.com/AnmolChaudhary" className="item projects-link">
                                <div className="item-icon">
                                    <FaDribbble size={56} />
                                </div>
                                <div className="item-content">
                                    <div className="item-title card-title">Call Interface </div>
                                    <div className="item-text card-desc">User Interface design of a ongoing call (Dark mode)</div>
                                    <div className="item-text">UX | Photoshop</div>
                                </div>
                            </a>
                            <a href="https://dribbble.com/AnmolChaudhary" className="item projects-link">
                                <div className="item-icon">
                                    <FaDribbble size={56} />
                                </div>
                                <div className="item-content">
                                    <div className="item-title card-title">Landing Page </div>
                                    <div className="item-text card-desc">User Interface design of Landing Page (Web)</div>
                                    <div className="item-text">Adobe XD | UI</div>
                                </div>
                            </a>
                        </div>
                        <div className="item-icon">
                            <svg height="50" viewBox="0 0 511.99898 511" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m226.289062 23.492188c-12.820312-12.816407-33.675781-12.816407-46.492187 0-6.210937 6.210937-9.628906 14.464843-9.628906 23.25 0 7.25 2.335937 14.140624 6.648437 19.820312l-105.84375 219.675781-58.179687 58.175781c-12.8632815 12.867188-14.324219 32.871094-4.402344 47.371094-12.910156 19.105469-10.925781 45.351563 5.976563 62.253906 9.582031 9.582032 22.167968 14.371094 34.753906 14.371094 9.613281 0 19.222656-2.804687 27.5-8.398437 6.3125 4.320312 13.667968 6.492187 21.023437 6.492187 9.542969 0 19.082031-3.632812 26.34375-10.894531l14.335938-14.335937 104.46875 66.882812c4.546875 2.910156 9.726562 4.328125 14.886719 4.328125 7.1875 0 14.335937-2.757813 19.652343-8.074219l22.492188-22.492187c7.175781-7.175781 9.855469-17.679688 6.992187-27.414063-2.863281-9.734375-10.800781-17.117187-20.71875-19.265625l-19.347656-4.191406-69.332031-40.964844 204.421875-98.496093c5.679687 4.3125 12.570312 6.652343 19.824218 6.652343 8.78125 0 17.035157-3.421875 23.246094-9.628906 12.816406-12.820313 12.816406-33.675781 0-46.496094zm-197.78125 416.402343c-8.878906-8.882812-10.820312-22.117187-5.820312-32.898437l38.722656 38.71875c-10.785156 5.003906-24.019531 3.0625-32.902344-5.820313zm81.339844 1.570313c-3.257812 3.261718-7.59375 5.054687-12.203125 5.054687s-8.941406-1.792969-12.199219-5.054687l-58.507812-58.507813c-3.261719-3.257812-5.054688-7.589843-5.054688-12.199219 0-4.609374 1.792969-8.941406 5.054688-12.199218l52.304688-52.308594 82.910156 82.910156zm151.089844 8.785156 20.925781 4.535156c4.039063.875 5.378907 4.042969 5.765625 5.359375.390625 1.320313.976563 4.710938-1.945312 7.628907l-22.492188 22.496093c-2.542968 2.542969-6.585937 2.980469-9.609375 1.042969l-100.777343-64.515625 25.046874-25.046875 80.117188 47.335938c.917969.546874 1.921875.9375 2.96875 1.164062zm169.828125-175.785156c-2.429687 2.433594-5.664063 3.773437-9.101563 3.773437s-6.671874-1.339843-9.105468-3.773437l-76.960938-76.960938c-3.902344-3.902344-10.234375-3.902344-14.140625 0-3.90625 3.90625-3.90625 10.238282 0 14.144532l65.101563 65.101562-208.210938 100.320312-87.015625-87.015624 100.320313-208.210938 65.101562 65.105469c3.90625 3.902343 10.238282 3.902343 14.144532 0 3.90625-3.90625 3.90625-10.238281 0-14.144531l-76.960938-76.960938c-2.429688-2.433594-3.769531-5.664062-3.769531-9.105469 0-3.4375 1.339843-6.671875 3.769531-9.101562 5.023438-5.019531 13.191406-5.023438 18.207031 0l218.621094 218.621093c5.023437 5.019532 5.023437 13.1875 0 18.207032zm0 0" /><path d="m296.175781 162.230469c-2.628906 0-5.210937 1.058593-7.070312 2.929687-1.859375 1.859375-2.929688 4.441406-2.929688 7.070313 0 2.628906 1.070313 5.199219 2.929688 7.070312 1.859375 1.859375 4.441406 2.929688 7.070312 2.929688 2.640625 0 5.210938-1.070313 7.070313-2.929688 1.859375-1.871093 2.929687-4.441406 2.929687-7.070312 0-2.640625-1.070312-5.210938-2.929687-7.070313-1.859375-1.871094-4.429688-2.929687-7.070313-2.929687zm0 0" /><path d="m343.285156 56.214844h12.6875l-7.234375 22.015625c-1.726562 5.246093 1.128907 10.898437 6.375 12.625 1.039063.339843 2.089844.5 3.125.5 4.203125 0 8.117188-2.667969 9.5-6.878907l11.550781-35.136718c1-3.046875.480469-6.390625-1.398437-8.988282-1.882813-2.597656-4.894531-4.136718-8.101563-4.136718h-12.730468l7.367187-22.613282c1.710938-5.253906-1.160156-10.894531-6.410156-12.609374-5.253906-1.707032-10.894531 1.160156-12.605469 6.414062l-11.636718 35.710938c-.992188 3.046874-.464844 6.382812 1.417968 8.972656 1.882813 2.59375 4.890625 4.125 8.09375 4.125zm0 0" /><path d="m505.121094 147.773438-35.140625-11.550782c-3.046875-1.003906-6.390625-.484375-8.988281 1.398438-2.597657 1.878906-4.136719 4.894531-4.136719 8.101562v12.726563l-22.613281-7.367188c-5.25-1.707031-10.894532 1.160157-12.605469 6.414063-1.710938 5.25 1.160156 10.894531 6.410156 12.605468l35.710937 11.632813c1.015626.332031 2.058594.492187 3.097657.492187 2.085937 0 4.148437-.648437 5.875-1.90625 2.59375-1.882812 4.125-4.890624 4.125-8.09375v-12.6875l22.015625 7.234376c5.246094 1.722656 10.898437-1.128907 12.625-6.375 1.726562-5.25-1.128906-10.902344-6.375-12.625zm0 0" /><path d="m444.109375 84.089844c1.527344 0 3.074219-.347656 4.527344-1.085938l40.589843-20.644531c2.851563-1.449219 4.839844-4.179687 5.34375-7.34375.5-3.164063-.542968-6.375-2.808593-8.640625l-12.953125-12.953125 27.695312-13.992187c4.929688-2.492188 6.90625-8.507813 4.417969-13.4375-2.488281-4.929688-8.503906-6.90625-13.4375-4.417969l-40.027344 20.222656c-2.859375 1.445313-4.855469 4.179687-5.363281 7.34375-.507812 3.167969.535156 6.386719 2.804688 8.65625l12.980468 12.980469-28.3125 14.398437c-4.921875 2.5-6.882812 8.523438-4.378906 13.445313 1.765625 3.472656 5.277344 5.46875 8.921875 5.46875zm0 0" /></svg>
                        </div>
                        <div>More Projects and Blogs Coming Soon</div>
                    </div>




                </div>
            </div>
        </div>

    )
}

export default Projects
