async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector("input[name='gem-title']").value.trim();
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    const response = await fetch(`api/gem/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title,
            description,
            country,
            state,
            visitors,
            pic,
            activity_type,
            city,
            lon,
            lat
        }),
        headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
        document.location.replace("/dashboard/");
    }
    else {
        alert(response.statusText);
    }
};

document.querySelector(".edit-gem-form").addEventListener("submit", editFormHandler);