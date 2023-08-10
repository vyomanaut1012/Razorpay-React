export const BoxSec =(props)=>{
    return(
      <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
      preserveAspectRatio="none"
      style={{
        strokeOpacity: 0.15,
      }}
      viewBox="0 0 349.325 225"
      {...props}
    >
      <path
        fill="#fff"
        d="M0 6a6 6 0 0 1 6-6h250.325a16 16 0 0 1 11 5l77 77a16 16 0 0 1 5 11v126a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z"
      />
    </svg>
    )
};

export const BoxSec2 =(props)=>{
  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
    preserveAspectRatio="none"
    style={{
      strokeOpacity: 0.8,
    }}
    viewBox="0 0 349.325 225"
    {...props}
  >
    <path
      fill="#181C2E"
      d="M0 6a6 6 0 0 1 6-6h250.325a16 16 0 0 1 11 5l77 77a16 16 0 0 1 5 11v126a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z"
    />
  </svg>

  )
}

export const Arrow=(props)=>{
  return(
    <svg
    className="w-[20px] h-[20px] -skew-x-[20deg]"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
    />
  </svg>
  )
}
