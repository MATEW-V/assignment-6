import style3 from './Header.module.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className={style3.nbar}>
            <div className={style3.icon}>
                <h2 className={style3.logo}>ACI Theatre</h2>
            </div>
            <div className={style3.menu}>
                <ul className={style3.navigation}>
                    <li><a><Link to={`/`}>HOME</Link></a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">HELP</a></li>
                    <li>
                        <div className={style3.search}>
                            <div className={style3.searchbox}>
                                <input type="text" placeholder="Search..." />
                            </div>
                            <button className={style3.butsearch}>Search</button>
                        </div>
                    </li>
                    <li>
                        <div className={style3.buttons}>
                            <div className={style3.register}>
                                <Link to={`/register`} className={style3.button}>SIGN UP</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={style3.buttons}>
                            <div className={style3.login}>
                                <Link to={`/login`} className={style3.button}>LOG IN</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;