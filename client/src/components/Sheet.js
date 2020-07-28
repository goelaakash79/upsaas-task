import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sheet = ({ hidden, info, onClose }) => {
	const isLoggedIn = localStorage.getItem("token");
	const [hide, setHide] = useState(true);

	useEffect(() => {
		setHide(hidden);
	}, [hidden]);

	const linkedinSvg = (
		<svg
			viewBox="0 0 24 24"
			width="16"
			height="16"
			className="inline-block mr-4"
		>
			<path d="M18.59 24l4.66-.001a.75.75 0 00.75-.75c-.35-7.857 1.842-16.148-6.338-16.148-1.573 0-2.826.537-3.729 1.247 0-1.461-1.579-.653-5.224-.87a.75.75 0 00-.75.75c.302 14.166-.674 15.771.75 15.771h4.66c1.353 0 .492-1.908.75-8.188 0-2.594.75-3.102 2.046-3.102 1.434 0 1.675.996 1.675 3.228.257 6.167-.598 8.063.75 8.063zm-2.425-12.791c-4.491 0-3.546 4.938-3.546 11.29h-3.16V8.978h2.974v1.298c0 .72 1.097 1.074 1.479.35.492-.934 1.77-2.025 3.75-2.025 3.527 0 4.838 1.733 4.838 6.396V22.5h-3.16c0-7.144.756-11.291-3.175-11.291zM1.122 7.479c-1.42 0-.448 1.585-.75 15.771 0 .414.336.75.75.75h4.665c1.42 0 .448-1.585.75-15.771 0-1.295-1.881-.531-5.415-.75zM5.037 22.5H1.872V8.979h3.165zM3.452 0c-4.576 0-4.548 6.929 0 6.929 4.545 0 4.581-6.929 0-6.929zm0 5.429C.884 5.429.86 1.5 3.452 1.5c2.597 0 2.564 3.929 0 3.929z" />
		</svg>
	);

	const twitterSvg = (
		<svg
			viewBox="0 -47 512.00004 512"
			width="16"
			height="16"
			className="inline-block"
		>
			<path d="M512 55.965c-32.207 1.484-31.504 1.363-35.145 1.668L495.93 3.16s-59.54 21.902-74.633 25.82c-39.64-35.628-98.563-37.203-140.688-11.312-34.496 21.207-53.011 57.625-46.836 100.191C166.637 108.543 110.07 76.72 65.41 23.07L51.285 6.105 40.73 25.488C27.39 49.98 22.96 77.984 28.254 104.34A113.287 113.287 0 0039.23 135.12l-12.117-4.695-1.437 20.246c-1.457 20.566 5.39 44.574 18.32 64.215a114.185 114.185 0 0014.27 17.597l-6.262-.96 7.64 23.199c10.043 30.48 30.903 54.062 57.973 67.172-27.035 11.472-48.875 18.793-84.773 30.601L0 363.293l30.336 16.586c11.566 6.324 52.437 27.445 92.82 33.781 89.766 14.078 190.832 2.613 258.871-58.664 57.309-51.613 76.114-125.031 72.207-201.433-.59-11.567 2.579-22.606 8.922-31.079 12.707-16.964 48.766-66.406 48.844-66.52zm-72.832 48.55c-10.535 14.067-15.813 32.032-14.867 50.579 3.941 77.066-17.028 136.832-62.328 177.629-52.918 47.66-138.274 66.367-234.172 51.324-17.367-2.723-35.317-8.82-50.172-14.91 30.098-10.356 53.34-19.586 90.875-37.352l52.398-24.8-57.851-3.704c-27.711-1.773-50.785-15.203-64.969-37.008a103.763 103.763 0 0022.023-3.671l55.176-15.368-55.636-13.625c-27.036-6.62-42.446-22.797-50.614-35.203-5.363-8.152-8.867-16.504-10.969-24.203 5.579 1.496 12.083 2.563 22.57 3.602l51.497 5.093-40.8-31.828c-29.4-22.93-41.18-57.379-32.544-90.496 91.75 95.164 199.477 88.012 210.32 90.528-2.386-23.184-2.449-23.239-3.074-25.446-13.886-49.09 16.547-74.015 30.274-82.453 28.672-17.621 74.183-20.277 105.707 8.754 6.808 6.266 16.015 8.73 24.633 6.59 7.734-1.922 14.082-3.957 20.296-6.172L434.004 89.32l16.516.012a8240.32 8240.32 0 01-11.352 15.184zm0 0" />
		</svg>
	);

	return (
		<div
			className={`absolute top-0 w-screen min-h-screen md:fixed md:top-0 md:right-0 md:w-1/2 lg:w-1/3 md:h-screen bg-color-200 py-12 px-6 md:rounded-tl-lg md:rounded-bl-lg ${
				hide ? "hidden" : null
			}`}
		>
			<span
				onClick={() => {
					setHide(true);
					onClose();
				}}
				className="cursor-pointer right-0 px-6 absolute"
			>
				x
			</span>

			{isLoggedIn ? (
				<>
					<h1 className="text-color-700 font-black text-3xl mb-4">
						{info.company}
					</h1>
					<p className="font-medium text-color-400 mb-4">
						{`${info.city}, ${info.state}, ${info.country}`}
					</p>
					<p className="text-color-600 mb-4 text-sm">
						{info.description}
					</p>
					<div className="text-color-700 mb-4">
						<label className="text-xs text-color-600">
							Company Size
						</label>
						<p className="font-semibold">
							{info.employees} employees
						</p>
					</div>
					<div className="flex gap-4">
						<div className="w-1/2 text-color-700 mb-4">
							<label className="text-xs text-color-600">
								Founder/CEO
							</label>
							<p className="font-semibold">{info.founder_ceo}</p>
						</div>
						<div className="w-1/2 text-color-700 mb-4">
							<label className="text-xs text-color-600">
								Social Media handles
							</label>
							<p>
								{info.linkedin ? (
									<a href={info.linkedin}>{linkedinSvg}</a>
								) : null}{" "}
								{info.twitter ? (
									<a href={info.twitter}>{twitterSvg}</a>
								) : null}
							</p>
						</div>
					</div>
					<div className="text-color-700 mb-4">
						<label className="text-xs text-color-600">
							Tech Stack
						</label>
						<div className="font-medium flex overflow-x-auto gap-2">
							{info.techstack &&
								info.techstack.split(",").map(tech => (
									<span
										className="px-4 py-2 bg-color-400 text-white rounded-md text-xs"
										key={tech}
									>
										{tech}
									</span>
								))}
						</div>
					</div>
					<div className="text-color-700 mb-4">
						<label className="text-xs text-color-600">
							Cloud host
						</label>
						<p className="font-semibold">{info.cloud}</p>
					</div>
					<div className="text-color-700 mb-4">
						<label className="text-xs text-color-600">
							Visit Website
						</label>
						<p>
							<a
								href={`https://www.${info.domain}`}
								className="font-semibold"
							>
								Click here
							</a>
						</p>
					</div>
				</>
			) : (
				<div className="h-screen flex flex-col justify-center items-center gap-4">
					<p>To view more, please login first</p>

					<Link
						to="/login"
						className="bg-color-700 hover:bg-color-400 transition-all duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Login
					</Link>
				</div>
			)}
		</div>
	);
};

export default Sheet;
