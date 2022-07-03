export const headerData = [
    "Header",
    "Details"
];

// Note : I can use unique ID generator for every row cell but for sake of 
// simplicity I am using constant key values
export const tableRowData = [
    {
        id: "td-1",
        type: "text",
        text: (item) => item.full_name,
        customClass: ""
    },
    {
        id: "td-2",
        type: "text",
        text: "full_name",
        customClass: ""
    },
]