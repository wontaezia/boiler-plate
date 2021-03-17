import { css } from '@emotion/react'
const globalStyles = css`
*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}
html{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;outline:none}
header,footer,section,article,aside,nav,hgroup,details,menu,figure,figcaption{display:block}
body,p,h1,h2,h3,h4,h5,h6,em,ul,ol,li,dl,dt,dd,div,table,th,td,form,fieldset,legend,input,textarea,button,select,label,iframe,pre,code,blockquote,video,audio,object,img,canvas,address,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,object{margin:0;padding:0}
body{-webkit-text-size-adjust:none;font-weight:400}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:inherit}
hr,legend{display:none}
ul,ol,dl,dt,dd{list-style:none}
table{width:100%;margin:0;padding:0;border:none;border-collapse:collapse;border-spacing:0}
tr,th,td{border:none;-webkit-box-orient:vertical}
caption{visibility:hidden;overflow:hidden;width:0;height:0;font-size:0;line-height:0}
input[type=text],input[type=password],input[type=button],input[type=number],input[type=tel],input[type=email],input[type=search],input[type=hidden],textarea,select{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-ms-border-radius:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-moz-appearance:none;-o-appearance:none;-ms-appearance:none;-webkit-appearance:none;border:none;background-color:transparent;outline:none}
input[type=checkbox],input[type=radio]{-moz-appearance:none;-o-appearance:none;-ms-appearance:none;-webkit-appearance:none;background-color:transparent;-ms-border-radius:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;outline:none;border:none}
input,textarea,select,button{font-family:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}
button{overflow:visible;border:none;background-color:transparent;cursor:pointer;-webkit-appearance:none;text-decoration:none;outline:none}
button::-moz-focus-inner{padding:0;border:none}
button,a,a:hover,a:active,a:focus{text-decoration:none;outline:none}
em{font-style:normal}
img{vertical-align:top}
a{color: #000;}
i{font-style: normal;}

html, body {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    word-break: keep-all;
    word-wrap: break-word;
}
`;
export default globalStyles;
