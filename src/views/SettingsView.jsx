import style13 from "SettingsView.module.css";
import { useStoreContext } from "../context";

function SettingsView() {
    const { email, fname, genres, password, lname} = useStoreContext();  // Destructure addToCart from context
    return (
    <div className={style13.appcontainer}>welcome {fname} {lname}, email: {email}</div>
)
}
export default SettingsView;