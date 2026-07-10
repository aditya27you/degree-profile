import React, { useState, useEffect } from 'react';

export default function SignUpModal({ onClose, onSignInClick }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(29);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let interval;
    if (isOtpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOtpSent, timer]);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (fullName.trim() !== '' && email.trim() !== '' && phone.trim() !== '') {
      setIsOtpSent(true);
      setTimer(29);
      setOtp(['', '', '', '']);
      setHasError(false);
    }
  };

  const handleNameChange = (e) => {
    const val = e.target.value;
    const alphabeticVal = val.replace(/[^a-zA-Z\s]/g, '');
    setFullName(alphabeticVal);
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    const numericVal = val.replace(/[^0-9]/g, '').slice(0, 10);
    setPhone(numericVal);
  };

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    setHasError(false);

    if (element.value !== '' && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '' && e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (otpCode !== '1234') {
      setHasError(true);
    } else {
      setHasError(false);
      alert('Verification successful!');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 font-['Poppins',sans-serif]">
      <div className="w-[446px] h-[579px] bg-white rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-[32px] relative flex flex-col box-border">
        <button
          onClick={onClose}
          className="absolute top-[32px] right-[32px] text-gray-500 hover:text-gray-800 transition-colors duration-200"
          aria-label="Close"
        >
          <svg className="w-6 h-6" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9583 0.625L0.625 13.9583M0.625 0.625L13.9583 13.9583" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex flex-col">
          <div className="flex items-center justify-center mb-[8px] select-none">
            <svg className="w-10 h-10 mr-2 flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 13.5C10 16.5 8 25 12.5 31.5C15 35 20 35.5 23 33C17.5 34 13.5 31 12.5 25.5C11.5 19.5 14 14.5 17 13.5Z"
                fill="#ED923D"
              />
              <path
                d="M20 20C17.5 23 15.5 28.5 16 32.5C16.2 34 17.5 34.5 18.5 34.5C21 34.5 22.5 28.5 23.5 24.5C24 22.5 23 20.5 20 20Z"
                fill="#0D3B59"
              />
              <circle cx="20.5" cy="15.5" r="3.5" fill="#0D3B59" />
              <path d="M20.5 9.5L25 12L20.5 14.5L16 12L20.5 9.5Z" fill="#0D3B59" />
              <path d="M17.5 12.8V15.5" stroke="#0D3B59" strokeWidth="1" />
              <path
                d="M16 32C19.5 31 23.5 25 25.5 18.5C26 16.5 26.5 13.5 26.5 13.5C26.5 13.5 25.2 16.5 23.5 20.5C21.5 25 18.5 29.5 16 32Z"
                fill="#0D3B59"
              />
              <path
                d="M28 10C28 10.8 28.7 11.5 29.5 11.5C28.7 11.5 28 12.2 28 13C28 12.2 27.3 11.5 26.5 11.5C27.3 11.5 28 10.8 28 10Z"
                fill="#ED923D"
              />
            </svg>
            <span className="text-[26px] tracking-tight font-sans text-[#0D3B59]">
              <span className="font-normal">Degree</span>
              <span className="font-bold">FYD</span>
            </span>
          </div>

          {!isOtpSent ? (
            <>
              <h2 className="text-[16px] font-medium text-[#1a1a1a] text-center mb-[24px]">
                Enter your details to Sign up
              </h2>

              <div className="flex flex-col mb-[16px]">
                <div className="flex items-center gap-[8px] p-[12px] h-[48px] w-full border border-[#CFD8DE] rounded-[8px] bg-white focus-within:border-[#0D3B59] transition-colors mb-[16px]">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    value={fullName}
                    onChange={handleNameChange}
                    className="flex-1 text-[14px] outline-none text-gray-800 placeholder-gray-400 bg-transparent font-sans"
                  />
                </div>

                <div className="flex items-center gap-[8px] p-[12px] h-[48px] w-full border border-[#CFD8DE] rounded-[8px] bg-white focus-within:border-[#0D3B59] transition-colors mb-[16px]">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7.99961L12.824 12.5596C12.577 12.7144 12.2915 12.7964 12 12.7964C11.7085 12.7964 11.423 12.7144 11.176 12.5596L4 7.99961M5.6 5.59961H18.4C19.2837 5.59961 20 6.31595 20 7.19961V16.7996C20 17.6833 19.2837 18.3996 18.4 18.3996H5.6C4.71634 18.3996 4 17.6833 4 16.7996V7.19961C4 6.31595 4.71634 5.59961 5.6 5.59961Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 text-[14px] outline-none text-gray-800 placeholder-gray-400 bg-transparent font-sans"
                  />
                </div>

                <div className="flex items-center gap-[8px] p-[12px] h-[48px] w-full border border-[#CFD8DE] rounded-[8px] bg-white focus-within:border-[#0D3B59] transition-colors mb-[16px]">
                  <div className="flex items-center gap-2 select-none flex-shrink-0">
                    <span className="flex flex-col justify-between w-5 h-3.5 border border-gray-100 overflow-hidden rounded-[1px]">
                      <span className="h-[33%] bg-[#ff9933]"></span>
                      <span className="h-[33%] bg-white flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-blue-900"></span>
                      </span>
                      <span className="h-[33%] bg-[#128807]"></span>
                    </span>
                    <span className="text-[14px] font-medium text-gray-700">+91</span>
                  </div>
                  <div className="w-[1px] h-[20px] bg-[#CFD8DE] flex-shrink-0"></div>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="flex-1 text-[14px] outline-none text-gray-800 placeholder-gray-400 bg-transparent font-sans"
                  />
                </div>

                <button
                  onClick={handleSendOtp}
                  className="flex w-[150px] h-[44px] min-h-[44px] p-[12px_16px] justify-center items-center gap-[8px] bg-[#0D3B59] hover:bg-[#092c42] text-white rounded-[8px] font-semibold text-[15px] transition-colors mx-auto mt-[8px]"
                >
                  Send OTP
                </button>
              </div>

              <div className="text-center text-[14px] select-none">
                <span className="text-[#6b7280]">Already have an account...? </span>
                <span
                  onClick={onSignInClick}
                  className="text-[#2563eb] font-semibold hover:underline cursor-pointer"
                >
                  Sign in
                </span>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-[18px] font-normal text-[#121212] text-center leading-normal mb-[24px]">
                Enter the 4 digit OTP sent to your Phone number
              </h2>

              <div className="flex justify-center gap-[16px] mb-[16px]">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onFocus={(e) => e.target.select()}
                    className="w-[44px] h-[44px] aspect-square rounded-[8px] border border-[#0D3B59] bg-white text-center text-[18px] font-medium outline-none focus:border-[#0D3B59] focus:ring-1 focus:ring-[#0D3B59] text-gray-800"
                  />
                ))}
              </div>

              {hasError ? (
                <p className="text-[16px] text-center text-[#C2413A] font-normal leading-normal mb-[16px]">
                  Please enter the correct OTP
                </p>
              ) : (
                <div className="h-[24px] mb-[16px]"></div>
              )}

              <button
                onClick={handleVerifyOtp}
                className="flex w-[150px] h-[44px] min-h-[44px] p-[12px_16px] justify-center items-center gap-[8px] bg-[#0D3B59] hover:bg-[#092c42] text-white rounded-[8px] font-semibold text-[15px] transition-colors mx-auto mb-[16px]"
              >
                Verify OTP
              </button>

              {timer > 0 ? (
                <p className="text-[16px] text-center text-[#717171] font-normal leading-normal mb-[16px]">
                  Resend otp in 00 : {timer < 10 ? '0' : ''}{timer}
                </p>
              ) : (
                <div className="text-center mb-[16px]">
                  <button
                    onClick={() => {
                      setTimer(29);
                      setOtp(['', '', '', '']);
                      setHasError(false);
                    }}
                    className="text-[16px] text-[#2563eb] hover:underline font-medium"
                  >
                    Resend OTP
                  </button>
                </div>
              )}

              <div className="text-center text-[14px]">
                <button
                  onClick={() => setIsOtpSent(false)}
                  className="text-gray-500 hover:text-gray-800 underline font-medium"
                >
                  Change details
                </button>
              </div>
            </>
          )}
        </div>

        <div className="mt-auto flex justify-between items-start border-t border-gray-100 pt-6">
          <div className="flex flex-col items-center text-center max-w-[100px] flex-1">
            <div className="flex p-[8px] w-[40px] h-[40px] items-center justify-center gap-[10px] rounded-[8px] bg-[#FDF4EC] mb-2 flex-shrink-0">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px] flex-shrink-0 text-[#ED923D]">
                <path d="M24.2963 26.6663V24.296C24.2963 23.0386 23.7968 21.8328 22.9077 20.9438C22.0187 20.0547 20.8128 19.5552 19.5555 19.5552H12.4444C11.1871 19.5552 9.98127 20.0547 9.0922 20.9438C8.20314 21.8328 7.70367 23.0386 7.70367 24.296V26.6663M20.7407 10.0737C20.7407 12.692 18.6182 14.8145 16 14.8145C13.3817 14.8145 11.2592 12.692 11.2592 10.0737C11.2592 7.45551 13.3817 5.33301 16 5.33301C18.6182 5.33301 20.7407 7.45551 20.7407 10.0737Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[12px] text-[#121212] font-normal leading-normal text-center select-none">Sign up With Degreefyd</span>
          </div>

          <div className="w-[1px] h-[40px] bg-gray-200 self-center"></div>

          <div className="flex flex-col items-center text-center max-w-[100px] flex-1">
            <div className="flex p-[8px] w-[40px] h-[40px] items-center justify-center gap-[10px] rounded-[8px] bg-[#FDF4EC] mb-2 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path d="M14.1349 5.8309C13.9292 6.04073 13.814 6.32284 13.814 6.61666C13.814 6.91048 13.9292 7.19259 14.1349 7.40242L15.9309 9.19844C16.1407 9.40412 16.4229 9.51932 16.7167 9.51932C17.0105 9.51932 17.2926 9.40412 17.5024 9.19844L21.7343 4.96656C22.2988 6.21389 22.4697 7.60361 22.2242 8.95053C21.9788 10.2974 21.3288 11.5376 20.3607 12.5057C19.3926 13.4738 18.1524 14.1238 16.8055 14.3693C15.4586 14.6147 14.0689 14.4438 12.8216 13.8793L5.06498 21.6359C4.61842 22.0825 4.01275 22.3333 3.38121 22.3333C2.74968 22.3333 2.144 22.0825 1.69744 21.6359C1.25088 21.1893 1 20.5837 1 19.9521C1 19.3206 1.25088 18.7149 1.69744 18.2684L9.45401 10.5118C8.88957 9.26446 8.71867 7.87473 8.96408 6.52782C9.20949 5.1809 9.85956 3.94076 10.8277 2.97266C11.7958 2.00457 13.0359 1.3545 14.3828 1.10909C15.7297 0.863679 17.1194 1.03458 18.3668 1.59902L14.1349 5.8309Z" stroke="#ED923D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span className="text-[12px] text-[#121212] font-normal leading-normal text-center select-none">Access to our tools & insights</span>
          </div>

          <div className="w-[1px] h-[40px] bg-gray-200 self-center"></div>

          <div className="flex flex-col items-center text-center max-w-[100px] flex-1">
            <div className="flex p-[8px] w-[40px] h-[40px] items-center justify-center gap-[10px] rounded-[8px] bg-[#FDF4EC] mb-2 flex-shrink-0">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px] flex-shrink-0 text-[#ED923D]">
                <path d="M18.1068 5.33887C20.2877 5.56867 22.3248 6.53596 23.8813 8.08079C25.4378 9.62561 26.4204 11.6554 26.6666 13.8345M18.1068 9.6188C19.1591 9.82631 20.1248 10.3454 20.8784 11.1086C21.6321 11.8718 22.139 12.8439 22.3332 13.8987M26.6133 21.3031V24.5131C26.6145 24.8111 26.5535 25.106 26.4341 25.3791C26.3121 25.6521 26.1396 25.8972 25.92 26.0987C25.7004 26.3001 25.4412 26.4535 25.1589 26.549C24.8766 26.6444 24.5775 26.6799 24.2807 26.6531C20.9882 26.2953 17.8255 25.1702 15.0468 23.3682C12.4615 21.7254 10.2696 19.5336 8.62685 16.9483C6.81855 14.1569 5.69321 10.9789 5.342 7.67154C5.31526 7.37565 5.35042 7.07744 5.44525 6.79589C5.54008 6.51434 5.69249 6.25561 5.89279 6.0362C6.09309 5.81678 6.33687 5.64147 6.60864 5.52143C6.8804 5.40139 7.17418 5.33925 7.47127 5.33897H10.6812C11.2005 5.33386 11.7039 5.51774 12.0976 5.85634C12.4913 6.19494 12.7485 6.66516 12.8212 7.17934C12.9567 8.2066 13.2079 9.21523 13.5702 10.186C13.7141 10.569 13.7453 10.9852 13.66 11.3853C13.5746 11.7855 13.3764 12.1527 13.0887 12.4437L11.7298 13.8025C13.253 16.4813 15.471 18.6993 18.1497 20.2225L19.5086 18.8636C19.7995 18.5759 20.1668 18.3776 20.5669 18.2923C20.9671 18.207 21.3833 18.2381 21.7663 18.3821C22.737 18.7443 23.7457 18.9956 24.7729 19.1311C25.2927 19.2044 25.7674 19.4662 26.1067 19.8667C26.446 20.2672 26.6263 20.7784 26.6133 21.3031Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[12px] text-[#121212] font-normal leading-normal text-center select-none">Get free Career Counselling</span>
          </div>
        </div>
      </div>
    </div>
  );
}
