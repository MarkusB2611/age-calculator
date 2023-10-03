import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "Poppins";
    src: local("Poppins"), url("../src/assets/fonts/Poppins-Regular.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "Poppins Bold";
    src: local("Poppins Bold"), url("../src/assets/fonts/Poppins-Bold.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "Poppins Bold Italic";
    src: local("Poppins Bold Italic"), url("../src/assets/fonts/Poppins-BoldItalic.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "Poppins ExtraBold";
    src: local("Poppins ExtraBold "), url("../src/assets/fonts/Poppins-ExtraBold.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "Poppins ExtraBold Italic";
    src: local("Poppins ExtraBold Italic"), url("../src/assets/fonts/Poppins-ExtraBoldItalic.ttf") format("truetype");
    font-display: swap;
  }



    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
    font-size: 16px;
    font-family: 'Poppins';
    background-color: #F0F0F0;
}
`