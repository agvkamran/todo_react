import React from "react";
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className='todo_footer'>
                <a className='soc_wrappers soc_first' href="https://github.com/agvkamran/" target='_blank'>
                    <i className="fab fa-github soc"></i>
                </a>
                <a className='soc_wrappers' href="https://bitbucket.org/agvkamran/" target='_blank'>
                    <i className="fab fa-bitbucket soc"></i>
                </a>
                <a className='soc_wrappers soc_third' href="https://www.linkedin.com/" target='_blank'>
                    <i className="fab fa-linkedin-in soc"></i>
                </a>
            </footer>
        )
    }
}

export default Footer;