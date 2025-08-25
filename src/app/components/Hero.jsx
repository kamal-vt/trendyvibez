import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
	const router = useRouter();
	const [currentWord, setCurrentWord] = useState(0);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isMouseMoving, setIsMouseMoving] = useState(false);
	const [wordWidth, setWordWidth] = useState(0);
	const wordRef = useRef(null);
	const words = ["Momentum", "Success", "Growth", "Innovation", "Excellence"];
	const [drift, setDrift] = useState({ x: 0, y: 0 });

	const handleOverlayError = (e) => {
		e.currentTarget.onerror = null;
		e.currentTarget.src = '/h1-rendering.png';
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWord((prev) => (prev + 1) % words.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		let timeout;
		if (isMouseMoving) {
			timeout = setTimeout(() => setIsMouseMoving(false), 120);
		}
		return () => clearTimeout(timeout);
	}, [isMouseMoving]);

	useEffect(() => {
		const measure = () => {
			if (wordRef.current) {
				setWordWidth(wordRef.current.offsetWidth);
			}
		};
		measure();
		window.addEventListener('resize', measure);
		return () => window.removeEventListener('resize', measure);
	}, [currentWord]);

	useEffect(() => {
		const interval = setInterval(() => {
			setDrift({ x: (Math.random() - 0.5) * 12, y: (Math.random() - 0.5) * 10 });
		}, 1400);
		return () => clearInterval(interval);
	}, []);

	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const { innerWidth, innerHeight } = window;
		const x = (clientX / innerWidth - 0.5) * 2;
		const y = (clientY / innerHeight - 0.5) * 2;
		setMousePosition({ x, y });
		setIsMouseMoving(true);
	};

	return (
		<section
			className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
			style={{ 
				backgroundImage: "url('/hero-bg.jpg')", 
				backgroundSize: 'cover', 
				backgroundPosition: 'center',
				marginTop: '-80px',
				paddingTop: '80px'
			}}
			onMouseMove={handleMouseMove}
		>
			{/* Left Overlay Image with mouse interaction */}
			<div
				className="pointer-events-none absolute left-2 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-10"
				style={{
					transform: `translate(calc(${mousePosition.x * -12}px + ${drift.x}px), calc(${mousePosition.y * -8}px + ${drift.y}px))`
				}}
			>
				<img
					src="/h1-rendering.png"
					alt="Decorative overlay"
					className="w-28 sm:w-36 md:w-44 lg:w-52 opacity-90 mix-blend-screen drop-shadow-xl select-none"
					onError={handleOverlayError}
				/>
			</div>

			{/* Background */}
			<div className="absolute inset-0 bg-black/30">
				<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none">
					{/* Removed blurred circle under sticky navbar */}
					{/* <div className="absolute bottom-8 right-4 md:bottom-20 md:right-20 w-40 md:w-96 h-40 md:h-96 border border-white/10 rounded-full"></div> */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 md:w-80 h-32 md:h-80 border border-white/10 rounded-full"></div>
				</div>
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto w-full px-2 sm:px-4 md:px-8">
				<div className="grid grid-cols-1 gap-6 md:gap-10 items-center justify-items-center text-center">
					{/* Centered Content */}
					<div className="space-y-6 md:space-y-8">
						<div className="inline-fle">
							{/* <span className="text-[10px] md:text-xs text-white/90 tracking-wider font-medium flex items-center gap-2"> */}
								{/* <span className="text-coral-pink ">★</span> */}
								{/* Digital Marketing Agency */}
							{/* </span> */}
						</div>

						<div className="space-y-3 md:space-y-4">
							<h1 className="font-extrabold leading-[1] tracking-tight p-0 text-[2.6rem] sm:text-6xl md:text-5xl lg:text-[7.5rem]">
								<span className="block text-white">Grow Faster Through</span>
								<span className="block text-white">Smarter <span className="text-coral-pink">Marketing</span></span>
							</h1>
						</div>

						<p className="text-base sm:text-xl md:text-2xl text-white/85 max-w-4xl mx-auto leading-relaxed font-light">
							Elevate your business by aligning creativity with data driven marketing .
						</p>

						<div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-8 justify-center">
							<button
								className="group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-coral-pink to-dusty-rose text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-coral-pink/25 hover:scale-105 text-base md:text-lg"
								onClick={() => router.push('/lets-talk')}
							>
								<span className="relative z-10 flex items-center gap-3">DISCOVER NOW
									<svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</span>
								<div className="absolute inset-0 bg-white/20 rounded-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
							</button>
						</div>

						<div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 pb-16 md:pt-12 border-t border-white/20 max-w-3xl mx-auto">
							<div className="text-center">
								<div className="text-lg sm:text-xl md:text-3xl font-bold text-coral-pink mb-3">300%</div>
								<div className="text-[10px] sm:text-xs text-light-gray uppercase tracking-wider font-medium">Avg. ROI</div>
							</div>
							<div className="text-center">
								<div className="text-lg sm:text-xl md:text-3xl font-bold text-dusty-rose mb-1">50+</div>
								<div className="text-[10px] sm:text-xs text-light-gray uppercase tracking-wider font-medium">Projects</div>
							</div>
							<div className="text-center">
								<div className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-1">98%</div>
								<div className="text-[10px] sm:text-xs text-light-gray uppercase tracking-wider font-medium">Satisfaction</div>
							</div>
						</div>
					</div>
					{/* Right Column (hidden to match reference layout) */}
					{/* Intentionally removed interactive cards and orbit to keep the hero clean and typographically focused, similar to the reference. */}
				</div>
			</div>

			{/* Scroll Indicator */}
			{/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
				<div className="flex flex-col items-center text-gray-300">
					<span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
					<div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
						<div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-bounce"></div>
					</div>
				</div>
			</div> */}
		</section>
	);
}
  

	// <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
	// 							{/* <div className="w-2 h-2 bg-[var(--tv-accent)] rounded-full mr-3 animate-pulse"></div>
	// 							{/* <span className="text-xs md:text-sm font-medium text-white tracking-wide">DIGITAL MARKETING EXCELLENCE</span> */}
	// 						</div> 