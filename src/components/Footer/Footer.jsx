import "./Footer.scss"
import {BsReddit as Reddit} from "react-icons/bs"
import {AiFillGithub as Github} from "react-icons/ai"
import {FaSquareTwitter as Twitter} from "react-icons/fa6"

export default function Footer() {
    return (
        <>
            <footer>
                <div>
                    <ul>
                        <li>
                            <a href="#" className="logo"><Github></Github></a>
                        </li>
                        <li>
                            <a href="#" className="logo"><Twitter></Twitter></a>
                        </li>
                        <li>
                            <a href="#" className="logo"><Reddit></Reddit></a>
                        </li>
                    </ul>
                    <p>&copy; Todos os direitos reservados - 2023</p>
                </div>
            </footer>
        </>
    );
}