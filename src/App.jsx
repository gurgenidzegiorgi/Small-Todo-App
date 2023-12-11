/* eslint-disable no-unused-vars */
import { useState } from "react";
import { styled, createGlobalStyle } from "styled-components";

import TodoCard from "./Components/TodoCard";

const GlobalStyles = createGlobalStyle`

	html {
		font-size: 62.5%;
	}

	body {
		background-color: #EEE;
		height: 100vh;
		height: 100dvh;
		font-size: 62.5%;
		font-family: 'Inter';
		font-style: normal;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	* {
		    list-style: none;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 29.6rem;
`;

const TodoTitle = styled.p`
	color: #007fdb;
	font-size: 9.6rem;
	font-weight: 700;
	line-height: normal;
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100dvh",
				}}
			>
				<Container>
					<TodoTitle>Todo</TodoTitle>
					<TodoCard />
				</Container>
			</div>
		</>
	);
}

export default App;
