import React, { useState } from "react";

const TrafficLight = () => {

	const [color, setColor] = useState("");

	return (
		<>
			<div>
				<div className="top"></div>
				<div className="box">
				<div className={"red-light " + (color === "red-light" ? "brillo" : "")} onClick={() => setColor("red-light")}></div>
					<div className={"yellow-light " + (color === "yellow-light" ? "brillo" : "")} onClick={() => setColor("yellow-light")}></div>
					<div className={"green-light " + (color === "green-light" ? "brillo" : "")} onClick={() => setColor("green-light")}></div>
					</div>
			</div>
		</>
	);
};


export default TrafficLight;