// Ticket object shape
export const Ticket = {
    id: "",
    title: "",
    tag: [],
    userId: "",
    status: "",
    priority: 0,
};

// User object shape
export const User = {
    id: "",
    name: "",
    available: false,
};

// Col object shape
export const Col = {
    col: [],  // Array of Ticket objects
};

// UserIdToData object shape
export const UserIdToData = {
    userData: {},  // Record of user ID to User objects
};
