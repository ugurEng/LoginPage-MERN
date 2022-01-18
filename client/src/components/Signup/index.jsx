import { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmpassword: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log(data)
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (data.password!==data.confirmpassword) {
			alert("Please type same password")
			}
		else{  
		try {
			const url = "http://localhost:5007/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	}
	};

	return (
		<div>
			<div className={styles.container}>
				<h6>Sign In Page</h6>
				<form onSubmit={handleSubmit}>
					<div>
						<div class="form-group">
							<input
								type="text"
								placeholder="First Name"
								name="firstName"
								onChange={handleChange}
								value={data.firstName}
								required
								class="form-control"
							/>
						</div>
						<div>
							<input
								type="text"
								placeholder="Last Name"
								name="lastName"
								onChange={handleChange}
								value={data.lastName}
								required
								class="form-control"
							/>
						</div>
						<div>
							<input
								type="email"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={data.email}
								required
								class="form-control"
							/>
						</div>
						<div>
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleChange}
								value={data.password}
								required
								class="form-control"
							/>
							<input
								type="password"
								placeholder="Confirm Password"
								name="confirmpassword"
								onChange={handleChange}
								value={data.confirmpassword}
								required
								class="form-control"
							/>
						</div>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className="btn btn-primary">
							Sing Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
