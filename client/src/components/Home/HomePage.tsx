import { Link } from "react-router-dom";
import styles from "./styles.module.css";



const Home = () => {
	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.right}>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
                <div className={styles.right}>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Login
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
