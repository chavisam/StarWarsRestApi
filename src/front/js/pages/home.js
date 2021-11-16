// import React, { useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import "../../styles/home.scss";

// export const Home = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div className="text-center mt-5">
// 			<h1>Hello Rigo!</h1>
// 			<p>
// 				<img src={rigoImageUrl} />
// 			</p>
// 			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
// 			<p>
// 				This boilerplate comes with lots of documentation:{" "}
// 				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
// 					Read documentation
// 				</a>
// 			</p>
// 		</div>
// 	);
// };

import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Card } from "../component/cards";

export const Home = () => {
	const { actions, store } = useContext(Context);

	return (
		<div>
			{store.token ? (
				<div className="container-fluid">
					<div className="row">
						<h1 className="text-center text-danger">Characters</h1>
						{/* ADDING CARDS */}
						<Card type_info="people" />

						<div className="row">
							{store.nextpeople != null ? (
								<button className="btn btn-warning more" onClick={() => actions.ten_more("people")}>
									Next 10 Characters
								</button>
							) : (
								console.log("no hay next")
							)}
							{store.previouspeople != null ? (
								<button
									className="btn btn-secondary more"
									onClick={() => actions.ten_previous("people")}>
									Previous 10 Characters
								</button>
							) : (
								console.log("no hay previous")
							)}
						</div>
					</div>

					<div className="row">
						<h1 className="text-center text-danger">Planets</h1>
						{/* ADDING CARDS */}
						<Card type_info="planets" />
						<div className="row">
							{store.nextplanets != null ? (
								<button className="btn btn-warning more" onClick={() => actions.ten_more("planets")}>
									Next 10 Planets
								</button>
							) : (
								console.log("no hay next")
							)}
							{store.previousplanets != null ? (
								<button
									className="btn btn-secondary more"
									onClick={() => actions.ten_previous("planets")}>
									Previous 10 Planets
								</button>
							) : (
								console.log("no hay previous")
							)}
						</div>
					</div>

					<div className="row less">
						<h1 className="text-center text-danger">Starships</h1>
						{/* ADDING CARDS */}
						<Card type_info="starships" />
						<div className="row">
							{store.nextstarships != null ? (
								<button className="btn btn-warning more" onClick={() => actions.ten_more("starships")}>
									Next 10 Starships
								</button>
							) : (
								console.log("no hay next")
							)}
							{store.previousstarships != null ? (
								<button
									className="btn btn-secondary more"
									onClick={() => actions.ten_previous("starships")}>
									Previous 10 Starships
								</button>
							) : (
								console.log("no hay previous")
							)}
						</div>
					</div>
				</div>
			) : (
				<Redirect to={"/"} />
			)}
		</div>
	);
};
