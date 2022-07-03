export const headerData = [
    "Repo Name",
    "Repo Link"
];

// Note : I can use unique ID generator for every row cell but for sake of 
// simplicity I am using constant key values
export const tableRowData = [
    {
        id: "td-1",
        type: "text",
        text: "name",
        customClass: ""
    },
    {
        id: "td-2",
        type: "link",
        url: detail=>`/github-repo-details/${detail.name || ""}`,
        text: "url",
        customClass: "linkDecorate"
    }
]