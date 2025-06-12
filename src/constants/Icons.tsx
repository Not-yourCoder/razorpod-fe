
// Beauty Icon
export const BeautyIcon = ({ size = 24, color = "red", ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"
            stroke={color}
            strokeWidth="2"
            fill="none"
        />
        <path
            d="M12 6V8M8 8H16C17.1 8 18 8.9 18 10V18C18 19.1 17.1 20 16 20H8C6.9 20 6 19.1 6 18V10C6 8.9 6.9 8 8 8Z"
            stroke={color}
            strokeWidth="2"
            fill="none"
        />
        <circle cx="10" cy="12" r="1" fill={color} />
        <circle cx="14" cy="12" r="1" fill={color} />
        <path d="M10 15C10.5 16 11.2 16.5 12 16.5C12.8 16.5 13.5 16 14 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Fragrance Icon
export const FragranceIcon = ({ size = 24, color = "currentColor", ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect x="6" y="8" width="12" height="12" rx="2" stroke={color} strokeWidth="2" fill="none" />
        <path d="M10 8V6C10 4.9 10.9 4 12 4C13.1 4 14 4.9 14 6V8" stroke={color} strokeWidth="2" fill="none" />
        <path d="M9 4L8 2M15 4L16 2M12 4L12 2" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="14" r="2" stroke={color} strokeWidth="2" fill="none" />
        <path d="M12 12V16M10 14H14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

// Furniture Icon
export const FurnitureIcon = ({ size = 24, color = "currentColor", ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M3 10H21V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V10Z" stroke={color} strokeWidth="2" fill="none" />
        <path d="M5 10V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7V10" stroke={color} strokeWidth="2" fill="none" />
        <path d="M7 20V22M17 20V22" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M3 13H21" stroke={color} strokeWidth="2" />
        <circle cx="8" cy="8" r="0.5" fill={color} />
    </svg>
);

// Home Decoration Icon
export const HomeDecorationIcon = ({ size = 24, color = "currentColor", ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M3 12H21L12 3L3 12Z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
        <path d="M5 12V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 21V12" stroke={color} strokeWidth="2" fill="none" />
        <rect x="9" y="16" width="6" height="5" stroke={color} strokeWidth="2" fill="none" />
        <path d="M9 16V14C9 13.4 9.4 13 10 13H14C14.6 13 15 13.4 15 14V16" stroke={color} strokeWidth="2" fill="none" />
        <circle cx="12" cy="18" r="0.5" fill={color} />
    </svg>
);

// Kitchen Accessories Icon
export const KitchenAccessoriesIcon = ({ size = 24, color = "currentColor", ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M8 2V7C8 8.1 8.9 9 10 9H14C15.1 9 16 8.1 16 7V2" stroke={color} strokeWidth="2" fill="none" />
        <rect x="6" y="9" width="12" height="11" rx="2" stroke={color} strokeWidth="2" fill="none" />
        <path d="M6 13H18" stroke={color} strokeWidth="2" />
        <circle cx="10" cy="16" r="1" fill={color} />
        <circle cx="14" cy="16" r="1" fill={color} />
        <path d="M10 2H14" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M12 20V22" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Groceries Icon
export const GroceriesIcon = ({ size = 24, color = "currentColor", ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M3 7H21L19 17H5L3 7Z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
        <path d="M3 7L2 2H1" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="20" r="1" stroke={color} strokeWidth="2" fill="none" />
        <circle cx="17" cy="20" r="1" stroke={color} strokeWidth="2" fill="none" />
        <path d="M8 10V12M12 9V13M16 10V12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const ShirtIcon = ({ size = 24, color = "black", ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4 3L9 5L12 3L15 5L20 3V8L17 10V21H7V10L4 8V3Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
        <path
            d="M9 5V8"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M15 5V8"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);
