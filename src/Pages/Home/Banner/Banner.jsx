import React from 'react';
import { BsDownload } from 'react-icons/bs';
import './banner.css';

const Banner = () => {
	const handleDownload = () => {
		fetch('/src/assets/Resume/Sajjad Abdullah MERN Stack Developer.pdf').then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Sajjad Abdullah MERN Stack Developer.pdf';
				alink.click();
			});
		});
	};

	return (
		<div className="flex h-screen justify-center items-center flex-col  mb-10  ">
			<h1 className="my-name font-extrabold text-5xl lg:text-8xl mb-10 ">Sajjad Abdullah</h1>
			<h3 className="text-3xl lg:text-5xl font-extrabold">Web Developer</h3>
			<div className="flex items-center justify-center gap-5">
				<a
					target="_blank"
					href="https://drive.google.com/file/d/1fEhoSoyCvkzLfE24dzsBhJVvrI9Rh7tT/view?usp=sharing">
					<button
						className="glow-on-hover bg-[#191328] mt-10 px-14 py-4 font-extrabold text-xl"
						type="button">
						See My Resume
					</button>
				</a>

				<a
				// href="/src/assets/Resume/Sajjad Abdullah Web Developer.pdf"
				// download="Sajjad-Abdullah Portfolio"
				>
					<button
						type="button"
						onClick={handleDownload}
						className="glow-on-hover bg-[#191328] mt-10 px-4 py-4 font-extrabold text-xl flex">
						<BsDownload className="h-7 w-7" />
					</button>
				</a>
			</div>
		</div>
	);
};

export default Banner;
