// tailwind-config.js
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'SoftBlack': '#232323',
                'SoftBlackLight': '#393939',
                'SoftBlackDark': '#1F1F1F',
                'LBlue': '#1475E6',
                'LBlueLight': '#2C83E9',
                'LBlueDark': '#1269CF',
                'NosPurple': '#8f41dc',
                'NosPurpleLight': '#9A54DF ',
                'NosPurpleDark': '#803AC5',
                'melonRed': '#fd4659',
                'melonRedLight': '#FD596A ',
                'melonRedDark': '#E33F50',
                'teal': '#008080',
                'tealLight': '#1A8D8D ',
                'tealDark': '#007373',
                'nOrange': '#ff7600',
                'nOrangeDark': '#E56A00',
                'nOrangeLight': '#FF841A',
                'grayB4B': '#737373',
                'grayB4BDark': '#676767',
                'grayB4BLight': '#818181',
                brown: {
                  100: '#D7C49E', // Light brown
                  200: '#BFAF7A', // Medium light brown
                  300: '#A68A4D', // Medium brown
                  400: '#8B5B29', // Dark brown
                  500: '#7B4B2A', // Rich brown
                  600: '#6B3B1A', // Darker brown
                  700: '#5B2B0A', // Very dark brown
                  800: '#4B1B00', // Almost black brown
                  900: '#3B0A00', // Deep brown
                },
                review: {
                  ON: '#a94f4f',
                  VN: '#d76d6d',
                  MN: '#b15a39',
                  M: '#696969',
                  MP: '#5080db',
                  VP: '#3a8edb',
                  OP: '#1475e6',
                },
            },
            screens: {
                'xs': '480px', // Add xs size
            },
            fontFamily: {
                archivo: ['Archivo', 'sans-serif'],
            },
            fontSize: {
                'h1': '36px',
                'h2': '30px',
                'h3': '24px',
                'h4': '20px',
                'h5': '18px',
                'h6': '16px',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.text-shadow-xs': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
                },
                '.text-shadow-sm': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                },
                '.text-shadow-md': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                },
                '.text-shadow-lg': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75)',
                },
                '.text-shadow-xl': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                },
                '.text-shadow-none': {
                    textShadow: 'none',
                },
            });
        },
    ],
};
