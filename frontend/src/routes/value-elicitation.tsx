import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import "./value-elicitation.css";
import {assets} from "../assets/assets.ts"

export const Route = createFileRoute("/value-elicitation")({
	component: ValueElicitation,
});

function ValueElicitation() {
	const [selectedOption, setSelectedOption] = useState("");
	const [preferenceReason, setPreferenceReason] = useState("");
	const [completedQuestion, setCompletedQuestion] = useState(0);

	const totalQuestion = 5

	const handleSubmit = () => {
		if (selectedOption === "" || completedQuestion >= totalQuestion) {
			return;
		}

		setSelectedOption("");
		setPreferenceReason("");
		setCompletedQuestion(completedQuestion + 1);
	};
	console.log(window.location.origin);
	return (
		<div
			className="flex flex-col font-raleway text-gray-600 mx-20 my-4 bg-no-repeat bg-cover bg-center"
			style={{
				backgroundImage: `url(${assets.bgBlob})`,
				backgroundSize: "contain"
			}}
		>
			{/* Nav bar */}
			<div className="flex flex-row justify-end gap-4">
				<NavButton text="Home" />
				<NavButton text="Retake Value Quiz" />
				<NavButton text="Logout" />
			</div>

			<div id="main-section" className="flex flex-col items-start flex-grow  gap-8 mt-8">
				<h1 className="flex-grow-0 text-5xl font-medium bg-gradient-to-r from-custom-salmon to-custom-blue text-transparent bg-clip-text">
					Value Elicitation
				</h1>
				<div id="policy-cards" className="w-full flex-grow flex flex-row gap-8">
					<PolicyCard
						cardTitle="Policy A"
						cardDescription="Description A Description A Description A Description A Description A Description A"
						isSelected={selectedOption === "policy-a"}
						onClick={() => setSelectedOption("policy-a")}
					/>
					<PolicyCard
						cardTitle="Policy B"
						cardDescription="Description B "
						isSelected={selectedOption === "policy-b"}
						onClick={() => setSelectedOption("policy-b")}
					/>
				</div>

				<div id="input-form" className="w-full flex-grow flex flex-col items-start bg-white border border-gray-300 rounded-xl p-6 gap-4">
					<p className="text-lg">Your Preference</p>
					<fieldset>
						<div
							className="flex flex-row gap-2"
							onClick={() => setSelectedOption("policy-a")}
						>
							<input
								type="radio"
								id="policy-a"
								name="drone"
								checked={selectedOption === "policy-a"}
							/>
							<label htmlFor="policy-a"> I prefer Policy A</label>
						</div>
						<div
							className="flex flex-row gap-2"
							onClick={() => setSelectedOption("policy-b")}
						>
							<input
								type="radio"
								id="policy-b"
								name="drone"
								checked={selectedOption === "policy-b"}
							/>
							<label htmlFor="policy-b"> I prefer Policy B</label>
						</div>
					</fieldset>
					<textarea
						className="w-full flex-grow py-2 px-6 bg-gray-200 rounded-3xl"
						placeholder="Optional: Why did you make this choice?"
						onChange={(e) => setPreferenceReason(e.target.value)}
						value={preferenceReason}
					/>
					<div className="ml-auto flex items-center justify-center">
						<button
							type="button"
							className="transtion group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-custom-salmon to-custom-blue p-[1.5px]"
							onClick={handleSubmit}
						>
							<div className="flex h-full w-full font-medium items-center justify-center rounded-full bg-white hover:bg-gray-200 transition duration-300">
								Submit
							</div>
						</button>
					</div>
				</div>

				<div id="progress-section" className="flex flex-col w-full gap-4">
					<p className="ml-auto">
						{completedQuestion} of {totalQuestion}
					</p>
					<div id="progress-bar" className="bg-gray-200 rounded-full h-4 flex flex-row items-start">
						<div className="h-full flex rounded-full bg-gradient-to-r from-custom-salmon to-custom-blue transition-all ease-out duration-500" style={{width: `${completedQuestion / totalQuestion * 100}%`}}></div>
					</div>
				</div>
			</div> 
		</div>
	);
}

function NavButton(props: { text: string }) {
	return (
		<div
			className="flex-row border border-gray-400 rounded-2xl 
        px-10 py-2 hover:bg-slate-200 transition duration-300"
		>
			<span>{props.text}</span>
		</div>
	);
}

function PolicyCard(props: {
	cardTitle: string;
	cardDescription: string;
	isSelected: boolean;
	onClick: () => void;
}) {
	return (
		<div
			className={`flex flex-grow basis-0 flex-col gap-3 bg-white border ${props.isSelected ? "border-gray-500" : "border-gray-300"} rounded-xl p-6 hover:shadow-md transition duration-300`}
			onClick={props.onClick}
		>
			<p className="text-2xl font-medium">{props.cardTitle}</p>
			<p className="text-lg text-gray-400">{props.cardDescription}</p>
		</div>
	);
}
