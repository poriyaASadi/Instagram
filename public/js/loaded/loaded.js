const loaded_welcome = document.getElementById('loaded-welcome'); 
 window.addEventListener('load' , () => {
  if (document.documentElement.className !== 'dark'){
    iconCheang();
  }
 loaded_welcome.style.display = 'none';
});


async function iconCheang () {
     document.getElementById('logoinstagrom-icon').classList.add('hidden');
    document.getElementById('boxLogo').insertAdjacentHTML('afterbegin' , 
    `<svg width="80" height="80" viewBox="0 0 332 332" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_96)">
    <g filter="url(#filter0_ii_2_96)">
    <rect width="332" height="332" rx="88" fill="#F7F6F2"/>
    </g>
    <rect width="332" height="332" rx="88" fill="url(#paint0_linear_2_96)" fill-opacity="0.1"/>
    <rect x="0.25" y="0.25" width="331.5" height="331.5" rx="87.75" stroke="#ACACAC" stroke-opacity="0.1" stroke-width="0.5"/>
    <g style="mix-blend-mode:darken" filter="url(#filter1_if_2_96)">
    <rect x="13" y="13" width="306" height="306" rx="80" fill="url(#paint1_linear_2_96)" fill-opacity="0.5"/>
    </g>
    <circle cx="166" cy="166" r="74" fill="white"/>
    <g filter="url(#filter2_f_2_96)">
    <path d="M111.001 166.296C111.167 196.67 135.922 221.159 166.302 220.999C196.682 220.839 221.165 196.078 220.999 165.698C220.833 135.324 196.078 110.835 165.698 111.001C135.324 111.161 110.835 135.922 111.001 166.296ZM201.65 165.805C201.756 185.498 185.882 201.543 166.189 201.65C146.497 201.756 130.451 185.882 130.344 166.189C130.238 146.497 146.112 130.451 165.805 130.344C185.497 130.238 201.543 146.112 201.65 165.805Z" fill="url(#paint2_linear_2_96)" fill-opacity="0.7"/>
    </g>
    <g filter="url(#filter3_f_2_96)">
    <path d="M329 114L260 90V47.5L325 43.5L329 114Z" fill="url(#paint3_linear_2_96)" fill-opacity="0.2"/>
    </g>
    <g filter="url(#filter4_f_2_96)">
    <path d="M329.5 245.5L168 261L200 237.5L240 191.5L248 133L208 83L329.5 149V245.5Z" fill="url(#paint4_linear_2_96)" fill-opacity="0.1"/>
    </g>
    <path d="M265.5 90C278.479 90 289 79.4787 289 66.5C289 53.5213 278.479 43 265.5 43C252.521 43 242 53.5213 242 66.5C242 79.4787 252.521 90 265.5 90Z" fill="url(#paint5_linear_2_96)"/>
    <g style="mix-blend-mode:luminosity" filter="url(#filter5_f_2_96)">
    <path d="M281.491 69.5C281.491 72.5376 280.371 75 278.991 75C277.61 75 278.076 72.5376 278.076 69.5C278.076 66.4624 277.61 64 278.991 64C280.371 64 281.491 66.4624 281.491 69.5Z" fill="white"/>
    </g>
    <g style="mix-blend-mode:luminosity" opacity="0.5" filter="url(#filter6_f_2_96)">
    <path d="M250 64.5C250 67.5376 251.283 70 252.865 70C254.447 70 253.913 67.5376 253.913 64.5C253.913 61.4624 254.447 59 252.865 59C251.283 59 250 61.4624 250 64.5Z" fill="white"/>
    </g>
    <g filter="url(#filter7_dii_2_96)">
    <path d="M165.483 70.0014C112.466 70.2908 69.7223 113.5 70.0014 166.527C70.2804 219.554 113.5 262.288 166.527 261.999C219.544 261.709 262.288 218.5 261.999 165.473C261.719 112.456 218.5 69.7121 165.483 70.0014ZM166.341 228.225C131.968 228.411 103.961 200.704 103.775 166.331C103.589 131.958 131.296 103.951 165.669 103.765C200.042 103.579 228.049 131.286 228.235 165.659C228.421 200.032 200.714 228.039 166.341 228.225Z" fill="url(#paint6_linear_2_96)"/>
    <path d="M70.5014 166.524C70.2238 113.773 112.745 70.7893 165.486 70.5014C218.227 70.2136 261.221 112.735 261.499 165.476C261.786 218.227 219.265 261.211 166.524 261.499C113.773 261.786 70.7789 219.275 70.5014 166.524ZM103.275 166.333C103.463 200.983 131.694 228.912 166.344 228.725C200.993 228.537 228.923 200.305 228.735 165.656C228.548 131.007 200.316 103.077 165.667 103.265C131.017 103.452 103.088 131.684 103.275 166.333Z" stroke="white" stroke-opacity="0.1"/>
    </g>
    <g filter="url(#filter8_f_2_96)">
    <path d="M165.483 70.0015C112.466 70.2908 69.7223 113.5 70.0014 166.527C70.2804 219.554 113.5 262.288 166.527 261.999C219.544 261.709 262.288 218.5 261.999 165.473C261.719 112.456 218.5 69.7121 165.483 70.0015ZM166.341 228.225C131.968 228.411 103.961 200.704 103.775 166.331C103.589 131.958 131.296 103.951 165.669 103.765C200.042 103.579 228.049 131.286 228.235 165.659C228.421 200.032 200.714 228.039 166.341 228.225Z" fill="url(#paint7_linear_2_96)"/>
    </g>
    <g filter="url(#filter9_f_2_96)">
    <circle cx="166" cy="166" r="70" stroke="url(#paint8_linear_2_96)" stroke-opacity="0.5" stroke-width="4"/>
    </g>
    <g filter="url(#filter10_f_2_96)">
    <circle cx="166" cy="166" r="86" transform="rotate(-30 166 166)" stroke="url(#paint9_linear_2_96)" stroke-opacity="0.6" stroke-width="4"/>
    </g>
    </g>
    <defs>
    <filter id="filter0_ii_2_96" x="0" y="0" width="332" height="332" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2_96"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
    <feBlend mode="normal" in2="effect1_innerShadow_2_96" result="effect2_innerShadow_2_96"/>
    </filter>
    <filter id="filter1_if_2_96" x="-7" y="-7" width="346" height="346" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_innerShadow_2_96"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="4"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"/>
    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2_96"/>
    <feGaussianBlur stdDeviation="10" result="effect2_foregroundBlur_2_96"/>
    </filter>
    <filter id="filter2_f_2_96" x="51" y="51" width="230" height="230" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_2_96"/>
    </filter>
    <filter id="filter3_f_2_96" x="250" y="33.5" width="89" height="90.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_2_96"/>
    </filter>
    <filter id="filter4_f_2_96" x="158" y="73" width="181.5" height="198" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_2_96"/>
    </filter>
    <filter id="filter5_f_2_96" x="271" y="57" width="17.4907" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_2_96"/>
    </filter>
    <filter id="filter6_f_2_96" x="243" y="52" width="18" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_2_96"/>
    </filter>
    <filter id="filter7_dii_2_96" x="45" y="28" width="272" height="272" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="15" dy="-2"/>
    <feGaussianBlur stdDeviation="20"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.420833 0 0 0 0 0.420833 0 0 0 0 0.420833 0 0 0 0.5 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_96"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_96" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="1"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2_96"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="4"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="effect2_innerShadow_2_96" result="effect3_innerShadow_2_96"/>
    </filter>
    <filter id="filter8_f_2_96" x="68" y="68" width="196" height="196" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2_96"/>
    </filter>
    <filter id="filter9_f_2_96" x="90" y="90" width="152" height="152" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_96"/>
    </filter>
    <filter id="filter10_f_2_96" x="73.9854" y="73.9853" width="184.03" height="184.029" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_96"/>
    </filter>
    <linearGradient id="paint0_linear_2_96" x1="54.4999" y1="277.5" x2="356.181" y2="214.456" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FAD99B"/>
    <stop offset="1" stop-color="#6258D5"/>
    </linearGradient>
    <linearGradient id="paint1_linear_2_96" x1="21.5" y1="166" x2="319" y2="166" gradientUnits="userSpaceOnUse">
    <stop stop-color="#DBDBDB"/>
    <stop offset="0.27649" stop-color="white" stop-opacity="0.5"/>
    <stop offset="0.700589" stop-color="#FCFCFC" stop-opacity="0.740395"/>
    <stop offset="1" stop-color="#E0E0E0"/>
    </linearGradient>
    <linearGradient id="paint2_linear_2_96" x1="202.277" y1="205.787" x2="135.574" y2="122.702" gradientUnits="userSpaceOnUse">
    <stop stop-color="#EFD99E"/>
    <stop offset="0.208333" stop-color="#D29F5D"/>
    <stop offset="0.369792" stop-color="#C86734"/>
    <stop offset="0.71875" stop-color="#9D3374"/>
    <stop offset="1" stop-color="#3932AB"/>
    </linearGradient>
    <linearGradient id="paint3_linear_2_96" x1="264" y1="58.5" x2="332" y2="87" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="0.911758" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint4_linear_2_96" x1="264" y1="165" x2="332" y2="193.5" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="0.911758" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint5_linear_2_96" x1="248.5" y1="82" x2="284" y2="53.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFE399"/>
    <stop offset="0.208333" stop-color="#E9B067"/>
    <stop offset="0.369792" stop-color="#E6753A"/>
    <stop offset="0.71875" stop-color="#CC4297"/>
    <stop offset="1" stop-color="#5C54E0"/>
    </linearGradient>
    <linearGradient id="paint6_linear_2_96" x1="96.5532" y1="229.319" x2="241.574" y2="112.894" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFE399"/>
    <stop offset="0.208333" stop-color="#E0A85E"/>
    <stop offset="0.369792" stop-color="#D76A30"/>
    <stop offset="0.71875" stop-color="#B0317F"/>
    <stop offset="1" stop-color="#3D36BB"/>
    </linearGradient>
    <linearGradient id="paint7_linear_2_96" x1="96.5532" y1="229.319" x2="241.574" y2="112.894" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFE399"/>
    <stop offset="0.208333" stop-color="#E9B067"/>
    <stop offset="0.369792" stop-color="#E6753A"/>
    <stop offset="0.71875" stop-color="#CC4297"/>
    <stop offset="1" stop-color="#5C54E0"/>
    </linearGradient>
    <linearGradient id="paint8_linear_2_96" x1="79.5" y1="122" x2="242.5" y2="230.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="0.211314" stop-color="white" stop-opacity="0"/>
    <stop offset="0.78987" stop-color="white" stop-opacity="0.0915453"/>
    <stop offset="1" stop-color="white" stop-opacity="0.890625"/>
    </linearGradient>
    <linearGradient id="paint9_linear_2_96" x1="60.2781" y1="112.222" x2="259.5" y2="244.833" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="0.189888" stop-color="white" stop-opacity="0"/>
    <stop offset="0.812649" stop-color="white" stop-opacity="0.0915453"/>
    <stop offset="1" stop-color="white" stop-opacity="0.890625"/>
    </linearGradient>
    <clipPath id="clip0_2_96">
    <rect width="332" height="332" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `);
}