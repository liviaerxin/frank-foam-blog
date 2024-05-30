"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3309],{81647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(74848),s=n(28453);const o={},r="Sunday, April 7, 2024",a={permalink:"/journal/2024/04/07/",source:"@site/../../journal/2024-04-07.md",title:"Sunday, April 7, 2024",description:"TOTP application",date:"2024-04-07T00:00:00.000Z",tags:[],readingTime:4.89,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Friday, April 12, 2024",permalink:"/journal/2024/04/12/"},nextItem:{title:"Saturday, April 6, 2024",permalink:"/journal/2024/04/06/"}},c={authorsImageUrls:[]},l=[{value:"TOTP application",id:"totp-application",level:2},{value:"TOTP URI scheme",id:"totp-uri-scheme",level:2},{value:"How TOTP application generate TOTP codes?",id:"how-totp-application-generate-totp-codes",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"totp-application",children:"TOTP application"}),"\n",(0,i.jsx)(t.p,{children:"TOTP stands for Time-Based One-Time Password. It's a form of two-factor authentication that generates a unique, temporary password that is used along with a regular password for added security. TOTP codes are usually generated by mobile apps or hardware tokens."}),"\n",(0,i.jsx)(t.p,{children:"Here's how a TOTP application typically works:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Setup"}),": Initially, you'll need to set up two-factor authentication on the service or platform you want to secure. This usually involves enabling TOTP authentication and scanning a QR code or entering a secret key into your TOTP application."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Generating Codes"}),": Once set up, the TOTP application (such as Google Authenticator, Authy, or Microsoft Authenticator) will continuously generate new, time-based codes. These codes are typically 6 to 8 digits long and change every 30 seconds or so."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Authentication"}),": When logging into the service or platform, you'll be prompted to enter a TOTP code along with your regular password. You'll retrieve the current code from your TOTP application and enter it within the allotted time window."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Validation"}),": The service or platform will then validate the code you entered against the expected code generated by their system. If they match, you'll be granted access."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Continuous Use"}),": Every time you log in, you'll need to provide a new TOTP code from your application. This adds an extra layer of security because even if someone were to obtain your regular password, they wouldn't be able to access your account without the TOTP code."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Remember, it's important to keep your TOTP application and the device it's installed on secure to prevent unauthorized access to your accounts. Additionally, it's a good idea to have backup methods of authentication in case you lose access to your TOTP application or device. This might include backup codes provided by the service or platform, or alternative authentication methods like SMS or email verification."}),"\n",(0,i.jsx)(t.h2,{id:"totp-uri-scheme",children:"TOTP URI scheme"}),"\n",(0,i.jsx)(t.p,{children:'The text "otpauth://totp" typically serves as a URI scheme used to represent TOTP (Time-Based One-Time Password) parameters in a standardized format. This format is commonly used for sharing TOTP configuration data between applications, such as when setting up two-factor authentication on a new device.'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"otpauth://totp/Example:alice@example.com?secret=JBSWY3DPEHPK3PXP&issuer=Example&algorithm=SHA256&digits=6&period=30\n"})}),"\n",(0,i.jsx)(t.p,{children:'Following "otpauth://totp", there is typically additional information encoded in the URI, including:'}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Label"}),": This identifies what the TOTP code is for, such as the name of the service or account."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Issuer (Optional)"}),": This specifies the provider or issuer of the TOTP code."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Secret"}),": This is a unique secret key used to generate the TOTP codes."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Algorithm (Optional)"}),": This specifies the algorithm used to generate the codes, usually HMAC-SHA1, HMAC-SHA256, or HMAC-SHA512."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Digits (Optional)"}),": This specifies the number of digits in the generated TOTP codes, typically 6 or 8."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Period (Optional)"}),": This specifies the time period (in seconds) for which a TOTP code is valid, usually 30 seconds."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Counter (Optional)"}),": This is an alternative to the time-based approach, specifying a counter value for generating TOTP codes."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:['This URI would be interpreted by a TOTP-compatible application to set up a TOTP configuration for an account named "Example" belonging to "',(0,i.jsx)(t.a,{href:"mailto:alice@example.com",children:"alice@example.com"}),'". It specifies a secret key, SHA-256 algorithm, 6-digit codes, and a 30-second period.']}),"\n",(0,i.jsx)(t.p,{children:"You can use this URI to easily configure a TOTP application by scanning a QR code or manually entering the information into the app. This helps streamline the setup process for two-factor authentication on various platforms."}),"\n",(0,i.jsx)(t.h2,{id:"how-totp-application-generate-totp-codes",children:"How TOTP application generate TOTP codes?"}),"\n",(0,i.jsx)(t.p,{children:"TOTP application has no need to know the issuer ip address."}),"\n",(0,i.jsxs)(t.p,{children:["The TOTP application just use URI (",(0,i.jsx)(t.code,{children:"otpauth://TOTP/..."}),"), as the URI contains all the necessary information for the TOTP application to generate TOTP codes."]}),"\n",(0,i.jsx)(t.p,{children:"Here's a simplified explanation of how you can generate TOTP codes based on the shared secret:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Convert the secret from base32 encoding"}),": The secret provided in the URI (",(0,i.jsx)(t.code,{children:"JBSWY3DPEHPK3PXP"}),") is typically base32 encoded. You'll need to decode it to its raw binary form."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Determine the current time"}),": TOTP codes are time-based, so you need to determine the current time in the same time unit as specified in the URI (",(0,i.jsx)(t.code,{children:"30 seconds"})," in this case). This is typically Unix time (number of seconds since January 1, 1970)."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Calculate the counter"}),": The counter value is derived from the current time divided by the time period specified in the URI. This represents the number of time steps that have occurred since the TOTP epoch."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Hash the counter with the secret"}),": Use the HMAC-SHA algorithm (specified in the URI) to hash the counter value with the shared secret. This produces a hash value."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Extract the dynamic truncation offset"}),": TOTP uses a dynamic truncation offset to extract a 4-byte dynamic binary code from the hash. This offset is determined by the last 4 bits of the hash value."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Generate the OTP"}),": Take the dynamic binary code and convert it to a numeric code. This is usually done by taking the last 6 or 8 bits of the dynamic code and converting it to a decimal number."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Format the OTP"}),": If necessary, format the OTP code to the specified number of digits (6 digits in this case)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Here's an example implementation in Python using the ",(0,i.jsx)(t.code,{children:"pyotp"})," library:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'import time\nimport base64\nimport hmac\nimport hashlib\nimport struct\nimport pyotp\n\nuri = "otpauth://totp/Example:alice@example.com?secret=JBSWY3DPEHPK3PXP&issuer=Example&algorithm=SHA256&digits=6&period=30"\n\n# Parse URI to extract parameters\nparams = pyotp.parse_uri(uri)\nsecret = base64.b32decode(params["secret"])\ndigits = params["digits"]\nperiod = params["period"]\n\n# Generate TOTP code\nepoch = time.time()\ncounter = int(epoch) // period\ncounter_bytes = struct.pack(">Q", counter)\nhash_value = hmac.new(secret, counter_bytes, hashlib.sha256).digest()\noffset = hash_value[-1] & 0x0F\ndynamic_code = struct.unpack(">I", hash_value[offset:offset+4])[0] & 0x7FFFFFFF\notp = str(dynamic_code % (10 ** digits)).zfill(digits)\n\nprint("TOTP code:", otp)\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This code snippet demonstrates a basic TOTP code generation process. However, it's essential to use a trusted library for generating TOTP codes in production scenarios due to security implications. The ",(0,i.jsx)(t.code,{children:"pyotp"})," library is widely used and reputable for this purpose."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);