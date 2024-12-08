import { getWidth } from "../functions/utils";

const SidebarConstants = () => {
	if (getWidth() < 973) {
		return {
			leftPanel: "100vw",
			rightPanel: "100vw",
		};
	} else {
		return {
			leftPanel: "10vw",
			rightPanel: "80vw",
		};
	}
};

const HeaderConstants = SidebarConstants;

const Colors = Object.freeze({
	Magnolia: "Magnolia",
	Linen: "Linen",
	MistyRose: "Misty Rose",
	MimiPink: "Mimi Pink",
	MintCream: "Mint Cream",
	LightBlue: "Light Blue",
	Isabelline: "Isabelline",
	Lavender: "Lavender",
	Periwinkle: "Periwinkle",
	OriginalColor: "#ff5630",
});

export const shardStyle = {
	theme: {
		original: {
			"shard-body": () => {
				return { color: Colors.OriginalColor };
			},
			"shard-border": () => {
				return {
					borderStyle: "dotted",
				};
			},
			"shard-a": () => {
				return {
					fontWeight: "bold",
				};
			},
			"shard-a-hover": () => {
				return {
					cursor: "pointer",
				};
			},
			"shard-h": () => {
				return {};
			},
			"shard-h-1": () => {
				return {
					fontSize: "6rem",
				};
			},
			"shard-h-2": () => {
				return {
					fontSize: "5rem",
				};
			},
			"shard-h-3": () => {
				return {
					fontSize: "4rem",
				};
			},
			"shard-h-4": () => {
				return {
					fontSize: "3rem",
				};
			},
			"shard-h-5": () => {
				return {
					fontSize: "2rem",
				};
			},
			"shard-h-6": () => {
				return {
					fontSize: "1rem",
				};
			},
			"shard-p": () => {
				return {
					marginBlockStart: "0",
					marginBlockEnd: "0",
					marginInlineStart: "0",
					marginInlineEnd: "0",
				};
			},
			"shard-div": () => {
				return {};
			},
			"shard-div-black": () => {
				return {
					backgroundColor: "black",
				};
			},
			"shard-card": () => {
				return {};
			},
			"shard-card-title": () => {
				return {
					fontWeight: "bold",
				};
			},
			"shard-card-content": () => {
				return {
					fontSize: "2rem",
				};
			},
			"shard-card-footer": () => {
				return {
					fontSize: "1rem",
				};
			},
			"shard-header": () => {
				return {
					justifyContent: "space-between",
					alignItems: "center",
					width: "100wv",
				};
			},
			"shard-layout": () => {
				return {
					padding: "15px 20px",
					margin: 10,
				};
			},
			"shard-layout-header": () => {
				return {
					padding: "15px 20px",
					margin: 10,
					display: "inline-block",
				};
			},
			"shard-layout-banner": () => {
				return {
					background: "url(/media/banner-size-50.png) no-repeat",
					width: "100vh",
					height: "5rem",
					padding: "10px",
				};
			},
			"shard-nav": () => {
				return { display: "flex", gap: "20px" };
			},
			"shard-sidebar-container": () => {
				return {
					width: "auto",
					display: "flex",
					flexDirection: "column",
					zIndex: 1,
					overflow: "auto",
					gap: "10px",
				};
			},
			"shard-sidebar-navlink-item": () => {
				return {
					textDecoration: "none",
					fontSize: "2rem",
					padding: "5px 10px",
					margin: 10,
					padding: 10,
				};
			},
			"shard-sidebar-navlink-item-hover": () => {
				return {
					color: "blue",
				};
			},
			"shard-floating-div-left": () => {
				return {
					width: SidebarConstants().leftPanel,
					cssFloat: "left",
				};
			},
			"shard-floating-div-right": () => {
				return {
					width: SidebarConstants().rightPanel,
					cssFloat: "right",
				};
			},
		},
	},
	//

	getShardTheme: function () {
		if (!window.shard) {
			window.shard = {};
		}
		return "original";
	},

	setShardTheme: function (themeName, callback) {
		if (!window.shard) {
			window.shard = {};
		}
		window.shard.theme = themeName;
		if (callback) {
			callback();
		}
	},

	getShardJCss: function (className) {
		if (!window.shard) {
			window.shard = {};
		}

		return window.shard.theme[window.shard.getShardTheme()][className]();
	},

	fromJCssToInlineCSS: function (classNames) {
		let css = "";
		classNames.forEach((_className) => {
			const jsondStyle = window.shard.getShardJCss(_className);
			for (let key in jsondStyle) {
				let cssKey = key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
				css += `${cssKey}: ${jsondStyle[key]};\n`;
			}
		});
		return css;
	},

	fromCssClassStringIntoMergedJCss: function (classNames) {
		let css = {};
		const classes = window.shard.fromStringToClassNameArray(classNames);
		classes.forEach((_className) => {
			css = { ...css, ...window.shard.getShardJCss(_className) };
		});

		return css;
	},

	fromStringToClassNameArray: function (classNames) {
		const classStringFromClassArray = classNames
			.trim()
			.split(" ")
			.map((q) => q && q.trim());

		return classStringFromClassArray;
	},
};
