const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      lineClamp: {

        15:'15',
        9:'9',
        8:'8',
        7:'7',
      }
    },
  },
  plugins: [],
});

