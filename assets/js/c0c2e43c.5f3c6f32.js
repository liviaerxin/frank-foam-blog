"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3937],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={},i="Sunday, April 7, 2024",s={permalink:"/journal/2024/04/07/",source:"@site/../../journal/2024-04-07.md",title:"Sunday, April 7, 2024",description:"TOTP application",date:"2024-04-07T00:00:00.000Z",formattedDate:"April 7, 2024",tags:[],readingTime:4.89,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Friday, April 12, 2024",permalink:"/journal/2024/04/12/"},nextItem:{title:"Saturday, April 6, 2024",permalink:"/journal/2024/04/06/"}},p={authorsImageUrls:[]},l=[{value:"TOTP application",id:"totp-application",level:2},{value:"TOTP URI scheme",id:"totp-uri-scheme",level:2},{value:"How TOTP application generate TOTP codes?",id:"how-totp-application-generate-totp-codes",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"totp-application"},"TOTP application"),(0,o.kt)("p",null,"TOTP stands for Time-Based One-Time Password. It's a form of two-factor authentication that generates a unique, temporary password that is used along with a regular password for added security. TOTP codes are usually generated by mobile apps or hardware tokens."),(0,o.kt)("p",null,"Here's how a TOTP application typically works:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Setup"),": Initially, you'll need to set up two-factor authentication on the service or platform you want to secure. This usually involves enabling TOTP authentication and scanning a QR code or entering a secret key into your TOTP application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Generating Codes"),": Once set up, the TOTP application (such as Google Authenticator, Authy, or Microsoft Authenticator) will continuously generate new, time-based codes. These codes are typically 6 to 8 digits long and change every 30 seconds or so.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Authentication"),": When logging into the service or platform, you'll be prompted to enter a TOTP code along with your regular password. You'll retrieve the current code from your TOTP application and enter it within the allotted time window.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Validation"),": The service or platform will then validate the code you entered against the expected code generated by their system. If they match, you'll be granted access.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Continuous Use"),": Every time you log in, you'll need to provide a new TOTP code from your application. This adds an extra layer of security because even if someone were to obtain your regular password, they wouldn't be able to access your account without the TOTP code."))),(0,o.kt)("p",null,"Remember, it's important to keep your TOTP application and the device it's installed on secure to prevent unauthorized access to your accounts. Additionally, it's a good idea to have backup methods of authentication in case you lose access to your TOTP application or device. This might include backup codes provided by the service or platform, or alternative authentication methods like SMS or email verification."),(0,o.kt)("h2",{id:"totp-uri-scheme"},"TOTP URI scheme"),(0,o.kt)("p",null,'The text "otpauth://totp" typically serves as a URI scheme used to represent TOTP (Time-Based One-Time Password) parameters in a standardized format. This format is commonly used for sharing TOTP configuration data between applications, such as when setting up two-factor authentication on a new device.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"otpauth://totp/Example:alice@example.com?secret=JBSWY3DPEHPK3PXP&issuer=Example&algorithm=SHA256&digits=6&period=30\n")),(0,o.kt)("p",null,'Following "otpauth://totp", there is typically additional information encoded in the URI, including:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Label"),": This identifies what the TOTP code is for, such as the name of the service or account."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Issuer (Optional)"),": This specifies the provider or issuer of the TOTP code."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Secret"),": This is a unique secret key used to generate the TOTP codes."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Algorithm (Optional)"),": This specifies the algorithm used to generate the codes, usually HMAC-SHA1, HMAC-SHA256, or HMAC-SHA512."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Digits (Optional)"),": This specifies the number of digits in the generated TOTP codes, typically 6 or 8."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Period (Optional)"),": This specifies the time period (in seconds) for which a TOTP code is valid, usually 30 seconds."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Counter (Optional)"),": This is an alternative to the time-based approach, specifying a counter value for generating TOTP codes.")),(0,o.kt)("p",null,'This URI would be interpreted by a TOTP-compatible application to set up a TOTP configuration for an account named "Example" belonging to "',(0,o.kt)("a",{parentName:"p",href:"mailto:alice@example.com"},"alice@example.com"),'". It specifies a secret key, SHA-256 algorithm, 6-digit codes, and a 30-second period.'),(0,o.kt)("p",null,"You can use this URI to easily configure a TOTP application by scanning a QR code or manually entering the information into the app. This helps streamline the setup process for two-factor authentication on various platforms."),(0,o.kt)("h2",{id:"how-totp-application-generate-totp-codes"},"How TOTP application generate TOTP codes?"),(0,o.kt)("p",null,"TOTP application has no need to know the issuer ip address."),(0,o.kt)("p",null,"The TOTP application just use URI (",(0,o.kt)("inlineCode",{parentName:"p"},"otpauth://TOTP/..."),"), as the URI contains all the necessary information for the TOTP application to generate TOTP codes."),(0,o.kt)("p",null,"Here's a simplified explanation of how you can generate TOTP codes based on the shared secret:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Convert the secret from base32 encoding"),": The secret provided in the URI (",(0,o.kt)("inlineCode",{parentName:"p"},"JBSWY3DPEHPK3PXP"),") is typically base32 encoded. You'll need to decode it to its raw binary form.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Determine the current time"),": TOTP codes are time-based, so you need to determine the current time in the same time unit as specified in the URI (",(0,o.kt)("inlineCode",{parentName:"p"},"30 seconds")," in this case). This is typically Unix time (number of seconds since January 1, 1970).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Calculate the counter"),": The counter value is derived from the current time divided by the time period specified in the URI. This represents the number of time steps that have occurred since the TOTP epoch.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Hash the counter with the secret"),": Use the HMAC-SHA algorithm (specified in the URI) to hash the counter value with the shared secret. This produces a hash value.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Extract the dynamic truncation offset"),": TOTP uses a dynamic truncation offset to extract a 4-byte dynamic binary code from the hash. This offset is determined by the last 4 bits of the hash value.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Generate the OTP"),": Take the dynamic binary code and convert it to a numeric code. This is usually done by taking the last 6 or 8 bits of the dynamic code and converting it to a decimal number.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Format the OTP"),": If necessary, format the OTP code to the specified number of digits (6 digits in this case)."))),(0,o.kt)("p",null,"Here's an example implementation in Python using the ",(0,o.kt)("inlineCode",{parentName:"p"},"pyotp")," library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import time\nimport base64\nimport hmac\nimport hashlib\nimport struct\nimport pyotp\n\nuri = "otpauth://totp/Example:alice@example.com?secret=JBSWY3DPEHPK3PXP&issuer=Example&algorithm=SHA256&digits=6&period=30"\n\n# Parse URI to extract parameters\nparams = pyotp.parse_uri(uri)\nsecret = base64.b32decode(params["secret"])\ndigits = params["digits"]\nperiod = params["period"]\n\n# Generate TOTP code\nepoch = time.time()\ncounter = int(epoch) // period\ncounter_bytes = struct.pack(">Q", counter)\nhash_value = hmac.new(secret, counter_bytes, hashlib.sha256).digest()\noffset = hash_value[-1] & 0x0F\ndynamic_code = struct.unpack(">I", hash_value[offset:offset+4])[0] & 0x7FFFFFFF\notp = str(dynamic_code % (10 ** digits)).zfill(digits)\n\nprint("TOTP code:", otp)\n')),(0,o.kt)("p",null,"This code snippet demonstrates a basic TOTP code generation process. However, it's essential to use a trusted library for generating TOTP codes in production scenarios due to security implications. The ",(0,o.kt)("inlineCode",{parentName:"p"},"pyotp")," library is widely used and reputable for this purpose."))}d.isMDXComponent=!0}}]);