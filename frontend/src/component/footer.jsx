
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const contactData = {
    linkedIn: "https://www.linkedin.com/in/%E0%B8%9B%E0%B8%A3%E0%B8%B4%E0%B8%8A%E0%B8%8D%E0%B8%B2-%E0%B8%99%E0%B8%B2%E0%B8%AA%E0%B8%B3%E0%B9%81%E0%B8%94%E0%B8%87-4b3732301/",
    github: "https://github.com/Rlaal19",
    ig: "https://www.instagram.com/rlaal_23/"
}
function Footer() {
    return (
        <div className=' mt-32'>
            <footer className="footer items-center p-3 bg-gray-400 text-white">
                <aside className="items-center grid-flow-col">
                <FontAwesomeIcon className=' text-4x text-5xl' icon={faHashtag} />
                <p className='text-md'>Copyright © 2024 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href={contactData.linkedIn} target="_blank"><FontAwesomeIcon className='text-3xl' icon={faLinkedin} /></a>
                    <a href={contactData.github} target="_blank"><FontAwesomeIcon className='text-3xl' icon={faGithub} /></a>
                    <a href={contactData.ig} target="_blank"><FontAwesomeIcon className='text-3xl' icon={faInstagram} /></a>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
